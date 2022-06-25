import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Register = (props) => {
  const [customer, setCustomer] = useState({
    email: '',
    name: '',
  })
  let navigate = useNavigate()

  const registerNewUser = () => {
    return fetch('http://localhost:8088/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    })
      .then((res) => res.json())
      .then((createdUser) => {
        if (createdUser.hasOwnProperty('id')) {
          localStorage.setItem(
            'vinyl_user',
            JSON.stringify({
              id: createdUser.id,
            })
          )

          navigate('/')
        }
      })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    return fetch(`http://localhost:8088/users?email=${customer.email}`)
      .then((res) => res.json())
      .then((response) => {
        if (response.length > 0) {
          // Duplicate email. No good.
          window.alert('Account with that email address already exists')
        } else {
          // Good email, create user.
          registerNewUser()
        }
      })
  }

  const updateCustomer = (evt) => {
    const copy = { ...customer }
    copy[evt.target.id] = evt.target.value
    setCustomer(copy)
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Join us!</h1>
          <p className="py-6">Start building your vinyl collection today!</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                onChange={updateCustomer}
                id="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={updateCustomer}
                id="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={handleRegister}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

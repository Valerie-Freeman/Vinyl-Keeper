import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [email, set] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    return fetch(`http://localhost:8088/users?email=${email}`)
      .then((res) => res.json())
      .then((foundUsers) => {
        if (foundUsers.length === 1) {
          const user = foundUsers[0]
          localStorage.setItem(
            'vinyl_user',
            JSON.stringify({
              id: user.id,
              staff: user.isStaff,
            })
          )

          navigate('/')
        } else {
          window.alert('Invalid login')
        }
      })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 pr-4">
            Welcome to Vinyl Keeper! Your virtual library for your entire
            collection!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(evt) => set(evt.target.value)}
                required
                className="input input-bordered"
              />
            </div>
            <label className="label">
              <Link
                to="/register"
                className="label-text-alt link link-secondary link-hover"
              >
                Not a member yet?
              </Link>
            </label>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

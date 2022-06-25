import { Link, useNavigate } from 'react-router-dom'

export const NavBar = () => {
  const navigate = useNavigate()

  // return (
  //   <ul className="navbar">
  //     <li className="navbar__item active">
  //       <Link className="navbar__link" to="/wishlist">
  //         Wishlist
  //       </Link>
  //     </li>
  //     {localStorage.getItem('vinyl_user') ? (
  //       <li className="navbar__item navbar__logout">
  //         <Link
  //           className="navbar__link"
  //           to=""
  //           onClick={() => {
  //             localStorage.removeItem('vinyl_user')
  //             navigate('/', { replace: true })
  //           }}
  //         >
  //           Logout
  //         </Link>
  //       </li>
  //     ) : (
  //       ''
  //     )}
  //   </ul>
  // )

  return (
    <div className="navbar bg-accent font-mono font-semibold">
      <div className="navbar-start">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered"
          />
        </div>
      </div>
      <div className="navbar-center">
        <p className="normal-case text-xl">Vinyl Keeper</p>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" alt="" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/">Library</Link>
            </li>
            <li>
              <Link to="/albumSearch/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link
                to=""
                onClick={() => {
                  localStorage.removeItem('vinyl_user')
                  navigate('/', { replace: true })
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

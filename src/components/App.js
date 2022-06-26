import { Route, Routes } from 'react-router-dom'
import { Authorize } from './views/Authorize'
import { NavBar } from './nav/NavBar'
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { AuthorizedRoutes } from './views/AuthorizedRoutes'
import { UserProvider } from '../userContext'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          <Authorize>
            <UserProvider>
              <NavBar />
              <AuthorizedRoutes />
              <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </UserProvider>
          </Authorize>
        }
      />
    </Routes>
  )
}

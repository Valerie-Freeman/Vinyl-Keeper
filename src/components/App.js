import { Route, Routes } from 'react-router-dom'
import { Authorize } from './views/Authorize'
import { NavBar } from './nav/NavBar'
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { AuthorizedRoutes } from './views/AuthorizedRoutes'

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          <Authorize>
            <>
              <NavBar />
              <AuthorizedRoutes />
            </>
          </Authorize>
        }
      />
    </Routes>
  )
}

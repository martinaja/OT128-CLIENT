import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.auth)

  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticated === true ? children : <Redirect to="/login" />
      }}
    />
  )
}

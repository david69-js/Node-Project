import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = ({isAuth, to}) => {
    return (
        isAuth ? <Outlet/> : <Navigate to={to}/>
  )
}
export default PrivateRoutes
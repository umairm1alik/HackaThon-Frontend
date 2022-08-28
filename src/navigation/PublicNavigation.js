import { Navigate, Outlet } from "react-router-dom";

const PublicNavigation = ({
    isLoginUser,
    redirectPath = '/',
    children,
}) => {
    if (isLoginUser) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};


export default PublicNavigation
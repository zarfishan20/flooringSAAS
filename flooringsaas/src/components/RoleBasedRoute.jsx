import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RoleBasedRoute = ({ allowedRoles, element }) => {
    const { user } = useSelector((state) => state.auth);

    if (!user) return <Navigate to="/login" replace />;
    if (!allowedRoles.includes(user.role)) return <Navigate to="/" replace />;

    return element; // Return the actual component instead of Outlet
};

export default RoleBasedRoute;

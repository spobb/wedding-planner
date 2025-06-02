import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function ProtectedRoute({ children, roles }) {
    const location = useLocation();
    const { user, loading } = useAuth();

    if (loading) return <p>Loading...</p>;

    if (roles) return <p>roles</p>;

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return (<>
        {children}
    </>)
};
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    return (
        <nav className="navbar">
            <div className="logo">Flooring</div>
            <div className="nav-right">
                {user ? (
                    <>
                        <span>{user.name}</span>
                        <i className="icon fas fa-bell"></i>
                        <i className="icon fas fa-cog"></i>
                        <button className="logout" onClick={() => dispatch(logoutUser())}>Logout</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => navigate("/login")}>Login</button>
                        <button onClick={() => navigate("/signup")}>Sign Up</button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

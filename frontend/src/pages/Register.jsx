import Form from "../components/Form";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    function handleLogin() {
        localStorage.clear();
        navigate("/login");
    }
    return (
        <div>
            <Form route="/api/user/register/" method="register" />
            <p className="route-text">Already have an account?{" "}
                <a onClick={handleLogin} className="route-link">Log In here</a>
            </p>
        </div>
    );
}
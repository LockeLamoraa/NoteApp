import Form from "../components/Form";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    function handleRegister() {
        localStorage.clear();
        navigate("/register");
    }

    return (
        <div>
            <Form route="/api/token/" method="login" />
            <p className="route-text">Don't have an account?{" "}
                <a onClick={handleRegister} className="route-link">Register here</a>
            </p>
        </div>
    );
}
import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = "http://localhost:8000/auth/";

const register = (name, email, password, password_confirmation) => {
    return axios.post(API_URL + "signup", {
        name,
        email,
        password,
        password_confirmation
    });
};

const login = (email, password) => {
    return axios
        .post(API_URL + "login", {
            email,
            password,
        })
        .then((response) => {
            if (response.token) {
                localStorage.setItem(response.token);
            }

            return response.data;
        });
};
const fetchLoggedInUser = () => {
    return axios.get(API_URL + "loggedInUser", { headers: authHeader() })
}
const logout = () => {
    localStorage.removeItem("user");
};

const AuthService = {
    register,
    login,
    logout,
    fetchLoggedInUser
};

export default AuthService;
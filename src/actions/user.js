import axios from "axios";
import { setUserAction } from "../redux/authReducer";

export const registration = async (email, name, password) => {
    try {
        const response = await axios.post('http://localhost:5001/api/auth/registration', {
            email,
            name,
            password,
            admin: false,
        });
        alert(response.data.message);
    } catch (e) {
        alert(e.response.data.message);
    }
};

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5001/api/auth/login', {
                email,
                password,
            });
            dispatch(setUserAction(response.data.user));
            localStorage.setItem('token', response.data.token);
        } catch (e) {
            alert(e.response.data.message);
        }
    }
};

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5001/api/auth/auth`,
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            dispatch(setUserAction(response.data.user));
            localStorage.setItem('token', response.data.token);
        } catch (e) {
            localStorage.removeItem('token');
        }
    }
};

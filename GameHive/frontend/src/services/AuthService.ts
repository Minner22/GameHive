import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

interface AuthResponse {
    token: string;
}

class AuthService {
    login(username: string, password: string): Promise<AuthResponse> {
        return axios
            .post<AuthResponse>(API_URL + 'login', {
                username,
                password
            })
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(username: string, password: string): Promise<void> {
        return axios.post(API_URL + 'register', {
            username,
            password
        })
    }

    getCurentUser() {
        const userStr = localStorage.getItem('user');
        if (userStr) {
            return JSON.parse(userStr);
        }
        return null;
    }
}

export default new AuthService();
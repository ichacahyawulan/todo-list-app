import http from "./http-common";

class UserService {
    login(data) {
        return http.post("/auth/login", data);
    }

    signup(data) {
        return http.post("/signup", data);
    }
}

export default new UserService();
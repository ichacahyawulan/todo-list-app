import http from "./http-common";
import auth from "./authService";

class UserService{
    login(data) {
        return http.post("/auth/login", data);
    }

    signup(data) {
        return http.post("/signup", data);
    }

    getListTodo(){
        return http.get("/todos", {headers: auth()});
    }
    
    createTodo(){
        return http.post("/todos", data, {headers: auth()});
    }

    getTodoItem(id){
        return http.get(`/todos/${id}/items`, {headers: auth()});
    }

    createTodoItem(id){
        return http.post(`/todos/${id}/items`, data, {headers: auth()});
    }

    updateTodoItem(id_todo, id_item){
        return http.patch(`/todos/${id_todo}/items/${id_item}`, data, {headers: auth()});
    }

    deleteTodoItem(id_todo, id_item){
        return http.delete(`/todos/${id_todo}/items/${id_item}`, {headers: auth()});
    }
}

export default new UserService();
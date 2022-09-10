import http from "./http-common";
import auth from "./authService";

class TodoService {
    getListTodo(){
        return http.get("/todos", {headers: auth()});
    }
    
    createTodo(data){
        return http.post("/todos", data, {headers: auth()});
    }
}

export default new TodoService();
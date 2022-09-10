import http from "./http-common";
import auth from "./authService";

class ItemService {
    getTodoItem(id){
        return http.get(`/todos/${id}/items`, {headers: auth()});
    }

    createTodoItem(id, data){
        return http.post(`/todos/${id}/items`, data, {headers: auth()});
    }

    updateTodoItem(id_todo, id_item, data){
        return http.patch(`/todos/${id_todo}/items/${id_item}`, data, {headers: auth()});
    }

    deleteTodoItem(id_todo, id_item){
        return http.delete(`/todos/${id_todo}/items/${id_item}`, {headers: auth()});
    }
}

export default new ItemService();
import api from "../apis/api";

export const getTodos = () => {
    return api.get("/todos");
}
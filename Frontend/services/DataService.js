import http from "../http-common";

class DataService {
  getAll() {
    return http.get("/app");
  }

  get(id) {
    return http.get(`/app/${id}`);
  }

  create(data) {
    return http.post("/app", data);
  }

  update(id, data) {
    return http.put(`/app/${id}`, data);
  }

  delete(id) {
    return http.delete(`/app/${id}`);
  }

}

export default new DataService();
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

  deleteAll() {
    return http.delete(`/app`);
  }

  findByTitle(title) {
    return http.get(`//app?title=${title}`);
  }
}

export default new DataService();
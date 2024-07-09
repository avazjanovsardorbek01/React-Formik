import http from "../config";

const service = {
  get: () => http.get('/api/services'),
  post: (data) => http.post('/api/services', data),
  delete: (id) => http.delete(`/api/services/${id}`),
};

export default orders
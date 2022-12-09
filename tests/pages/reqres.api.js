import BaseApi from "./base.api";

const ReqresApi = {
    register: (data) => BaseApi.post('/register', data),
    list_user : (param) => BaseApi.get(`/users?page=${param}`)
}

export default ReqresApi;
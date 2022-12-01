import BaseApi from "./base.api";

const ReqresApi = {
    register: (data) => BaseApi.post('/register'. data)
}

export default ReqresApi;
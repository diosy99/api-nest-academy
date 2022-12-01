import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const BaseApi = axios.create({
    baseURL :Process.env.BASE_URL ,
    headers : {
        "Content-Type" : "application/json",
        "Accept" : "*/*",
    },
    validateStatus: function (){
        return true;
    }
})

export default BaseApi;
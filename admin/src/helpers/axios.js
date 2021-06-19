import axios from "axios";
import { api } from "../urlConfig";
import store from '../store';
import { authConstants } from '../actions/constants';

const axiosInstance = axios.create({
    baseURL: api,
    // headers:{
    //     "Authorization": ""
    // }
})

export default axiosInstance
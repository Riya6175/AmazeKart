import axiosInstance from "../helpers/axios";

export const addProduct = form => {
    return async dispatch => {
        const res = await axiosInstance.post(`product/addproduct`, form);
        console.log(res)
    }
}
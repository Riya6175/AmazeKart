import axiosInstance from "../helpers/axios"
import { authConstants } from "./constants"

export const login = (user) => {
    return async (dispatch) => {

        const res = await axiosInstance.post("/admin/signin",{
            email: ""
        })
        
        dispatch({
            type: authConstants.LOGIN_REQUEST,
            payload:{
                ...user
            }
        })
    }
}
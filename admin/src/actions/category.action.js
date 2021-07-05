import axiosInstance from "../helpers/axios";
import { categoryConstants } from "./constants";

export const getAllCategory = () => {
    return async dispatch => {
        dispatch({ type: categoryConstants.CATEGORY_REQUEST })
        const res = await axiosInstance.get(`category/getcategory`);
        console.log(res);
        if (res.status == 200) {

            const { categoryList } = res.data;
            dispatch({
                type: categoryConstants.CATEGORY_SUCCESS,
                payload: { categories: categoryList }
            })
        } else {
            dispatch({
                type: categoryConstants.CATEGORY_FAILURE,
                payload: { error: res.data.error }
            })
        }
    }
}

export const addCategory = (form) => {
    return async dispatch => {
        dispatch({ type: categoryConstants.ADD_NEW_CATEGORY_REQUEST });
        try {

            const res = await axiosInstance.post(`/category/create`, form);

            if (res.status === 201) {
                dispatch({
                    type: categoryConstants.ADD_NEW_CATEGORY_SUCCESS,
                    payload: { category: res.data.category }
                });
            } else {
                dispatch({
                    type: categoryConstants.ADD_NEW_CATEGORY_FAILURE,
                    payload: { error: res.data.error }
                })
            }

        } catch (error) {
            console.log(error)
        }
    }
}
export const updateCategories = (form) => {
    return async dispatch => {
        const res = await axiosInstance.post(`/category/update`, form);

        if (res.status === 201) {
            return true;
            console.log(res)
        } else {
            console.log(res)
        }

    }
}
export const deleteCategories = (ids) => {
    return async dispatch => {
        const res = await axiosInstance.post(`/category/delete`, {
            payload: {
                ids
            }
        });
        if (res.status == 201) {
            return true;
        } else {
            return false;
        }

    }
}
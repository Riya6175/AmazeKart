import { categoryConstants } from "../actions/constants"

const initState = {
    categories: [],
    loading: false,
    error: null
}

export default (state = initState,action) => {
    switch(action.type){
        case categoryConstants.CATEGORY_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
    //     case categoryConstants.CATEGORY_FAILURE:
    //         state = {
    //             ...state,
    //             loading: false,
    //             message: action.payload.message
    //         }
    //         break;
    //     case categoryConstants.CATEGORY_SUCCESS:
    //         state = {
    //             ...state,
    //             laoding: false,
    //             error: action.payload.error
    //         }
    //         break;
     }

    return state;
}
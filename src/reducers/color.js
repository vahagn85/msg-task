import {GET_COLORS} from "../actions/types";

const initialState ={
    loading:true,
    colors: []
};
export default function (state=initialState,action) {
    const {type,payload} = action;
    switch (type) {
        case GET_COLORS:
            return {
                ...state,
                loading:false,
                colors:payload
            };
        default:
            return state
    }
}
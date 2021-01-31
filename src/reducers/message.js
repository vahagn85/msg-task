import {GET_MESSAGES,CHANGE_MSG_COLOR,FILTER_MSG} from "../actions/types";

const initialState ={
    msg:[],
    loading:true,
    color: ["255"," 255", " 255"],
    txtColor:'black'
};
export default function (state=initialState,action) {
    const {type,payload} = action;
    switch (type) {
        case GET_MESSAGES:
            return {
                ...state,
                loading:false,
                msg:payload
            };
        case CHANGE_MSG_COLOR:
            let newArray;
            let textColor;
            if(payload){
                newArray = payload.substring(1, payload.length - 1).split(',');
                let brightness = Math.round(((parseInt(newArray[0]) * 299) +
                    (parseInt(newArray[1]) * 587) +
                    (parseInt(newArray[2]) * 114)) / 1000);
                textColor = (brightness > 125) ? 'black' : 'white';
            }else {
                    newArray=["255"," 255", " 255"];
                    textColor='black'
            }
            return {
                ...state,
                color:newArray,
                txtColor:textColor
            };
        case FILTER_MSG:
            return {
                ...state,
                loading:false,
                msg:payload
            };
        default:
            return state
    }
}
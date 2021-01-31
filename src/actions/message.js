import msgData from '../resources/data/msg'
import {GET_MESSAGES,CHANGE_MSG_COLOR,FILTER_MSG} from './types'
export const getMessages= () => dispatch => {
    setTimeout(() => {
        dispatch({
            type:GET_MESSAGES,
            payload:msgData
        })
    }, 2500)
};

export const changeMsgColor= (color) => dispatch => {
    setTimeout(() => {
        dispatch({
            type:CHANGE_MSG_COLOR,
            payload:color
        })
    }, 200)
};

export const filterMsg= (value) => dispatch => {
    setTimeout(() => {
        const newData = msgData.filter(item=>item.body.includes(value));
        dispatch({
            type:FILTER_MSG,
            payload:newData
        })
    }, 200)
};
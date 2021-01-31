import colorData from '../resources/data/colors'
import {GET_COLORS} from './types'
export const getColors= () => dispatch => {
    setTimeout(() => {
        dispatch({
            type:GET_COLORS,
            payload:colorData
        })
    }, 2000)
};
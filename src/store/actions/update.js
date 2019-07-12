import * as actionTypes from './actionTypes';

export const increaseItem = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decreaseItem = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

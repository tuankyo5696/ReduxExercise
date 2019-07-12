import * as actionTypes from './../actions/actionTypes';
const initialState = {
    update : 42
}

const reducer = (state = initialState, action) => {
    let item;
    switch (action.type) {
        case actionTypes.INCREMENT:
            item = { ...state }
            item.update++;
            return {
                ...state,update : item.update
            }
        case actionTypes.DECREMENT:
            item = { ...state }
            item.update--;
            return {
                ...state, update: item.update
            }
        default: return state;
    }
} 

export default reducer;
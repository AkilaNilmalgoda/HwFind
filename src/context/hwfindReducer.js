import {CHANGE_INPUT, UPDATE_HWLIST, UPDATE_HW, SET_LOADING} from './types';

// eslint-disable-next-line
export default (state,action) => {
    switch(action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                searchhw: action.payload,
            };
        case UPDATE_HWLIST:
            return {
                ...state,
                filteredhw: action.payload
            };
        case UPDATE_HW:
            return{
                ...state,
                HWK:action.payload
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}


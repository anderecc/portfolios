import { CONTEXT_SET_LOADING, CONTEXT_SET_MESSAGE } from '../types';

CONTEXT_SET_LOADING;
const initialState = {
    loading: false,
    message: {
        text: '',
        success: false,
        error: false,
        visible: false,
    },
};

const contextReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONTEXT_SET_LOADING:
            return { ...state, loading: action.payload };
        case CONTEXT_SET_MESSAGE:
            return {
                ...state,
                message: { ...state.message, ...action.payload },
            };

        default:
            return { ...state };
    }
};

export default contextReducer;

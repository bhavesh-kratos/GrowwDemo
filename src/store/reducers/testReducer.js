import { searchImages } from '../../actions/routines';
import {CLEAR_IMAGES_DATA} from '../../actions/actionTypes';

const initialState = {
    data: [],
    last_page_count: null,
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case searchImages.TRIGGER:
            return {
                ...state,
                loading: true,
            };
        case searchImages.SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload],
                last_page_count: action.payload.page
            };
        case searchImages.FAILURE:
            console.warn("GET IMAGES REQUEST FAILED-->", action.payload)
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case CLEAR_IMAGES_DATA:
            return {
                ...state,
                data: [],
                last_page_count: null
            };
        default:
            return state;
    }
};

export default reducer;

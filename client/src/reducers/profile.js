import {
    GET_PROFILE,
    PROFILE_FAIL,
    CLEAR_PROFILE,
    GET_PROFILES
} from '../actions/types';

const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {}
}

// eslint-disable-next-line
export default function (state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case GET_PROFILE: 
            return {
                ...state, 
                profile: payload,
                loading: false
            }
        case GET_PROFILES: 
            return {
                ...state,
                profiles: payload,
                loading: false
            }
        case PROFILE_FAIL:
            return {
                ...state, 
                error: payload,
                profile: null,
                loading: false
            }
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                loading: false
            }
        default:
            return state;
    }
}


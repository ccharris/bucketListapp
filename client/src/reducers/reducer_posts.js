import { FETCH_POSTS, FETCH_POST, CREATE_POSTS } from '../actions/types';

const INITIAL_STATE = { all: [], post: null};

export default function(state = INITIAL_STATE, action) {
    switch(action.type){
        case CREATE_POSTS:
            return {...state, post: action.payload.data };
        case FETCH_POST:
            return {...state, post: action.payload.data };
        case FETCH_POSTS:
            return { ...state, all: action.payload.data };
        default:
            return state;
    }
}
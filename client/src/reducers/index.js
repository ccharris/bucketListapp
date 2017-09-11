import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import PostsReducer from './reducer_posts';


const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    posts: PostsReducer
});

export default rootReducer;


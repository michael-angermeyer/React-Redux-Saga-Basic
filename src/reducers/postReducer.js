import { Posts } from '../constants/postConstants';

const initialState = {
    posts: []
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Posts.fetchPosts:
            return state
        case Posts.fetchPostsSuccess:
            // Catch payload data and pass it into state
            return {...state, posts: action.payload}
        default:
            return initialState
    }
}

export default postsReducer;
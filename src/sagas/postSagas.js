import { call, put, takeLatest, all} from 'redux-saga/effects';

import {
    Posts
} from "../constants/postConstants";
import { PostsAPI } from '../api/api';
import {
    fetchPostsSuccess,
    fetchPostsError
} from '../actions/postActions';

const postsApi = new PostsAPI();

function* getPosts(action) {
    yield takeLatest(Posts.fetchPosts, getPostsFromAPI)
}

function* getPostsFromAPI(action) {
    try {
        // call the api
        const data = yield call(postsApi.fetchPosts, {response: action.payload})
        // call the success action with data
        yield put(fetchPostsSuccess(data));
    } catch(e) {
        // call the error action with data
        yield put(fetchPostsError(e));
    }
}

// function* getPostsSuccess() {
//     // redirect, trigger, notification
// }



export default function* rootSaga() {
    yield all([
        getPosts(),
    ]);
};
import React from 'react'
import { fetchPosts } from '../actions/postActions'
import { connect, useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from "reselect";

const PostsComponent = (props) => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.postsReducer.posts);

    const onClick = () => {
        dispatch(fetchPosts(0))
    }


    return (
        <div>
            <button onClick={onClick}>
                Fetch Posts
            </button>
            <div className="posts__Container">
                {
                    posts.length > 0 &&
                    posts.slice(0,10).map((post, i) => {
                        return (
                            <div key={i} className="post_singlePost">
                                <b>Post #{i.toString()}</b> - {post.title}   
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const structuredSelector = createStructuredSelector({
    posts: state => state.posts,
})

const mapDispatchToProps = { fetchPosts };
export default connect(structuredSelector, mapDispatchToProps)(PostsComponent);
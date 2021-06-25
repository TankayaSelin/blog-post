import axios from 'axios';

export const getPosts = () => dispatch => {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      dispatch({type: "GET_POSTS_SUCCESS", payload: response.data})
    })
    .catch(function (error) {
        dispatch({type: "GET_POSTS_ERROR", payload: error})
    });
}

export const recentTwoPosts = () => dispatch =>{
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      dispatch({type: "RECENT_TWO_POSTS", payload: response.data})
    })
    .catch(function (error) {
        dispatch({type: "RECENT_TWO_POSTS_ERROR", payload: error})
    });
}

export const currentPost = (text) =>{
    return{ type: 'CURRENT_POST', payload: text}
}


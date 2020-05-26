
import { UPDATE_MOVIES } from "./actionTypes";

export function fetchPosts() {
    return (dispatch) => {
        const url = 'http://localhost:8000/genre/';
        fetch(url)
            .then((response) => {
                console.log('response', response);
                return response.json();
            }).then((data) => {
                console.log('*******', data);
                dispatch(updatePosts(data.genre));
            });
    };
}

export function updatePosts(posts) {
    return {
        type: UPDATE_POSTS,
        posts
    }
}
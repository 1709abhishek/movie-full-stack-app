
import { UPDATE_POSTS, ADDMOVIE_FAILED, ADDMOVIE_SUCCESS } from "./actionTypes";
import { getFormBody } from '../helpers/utils';
import { Redirect } from 'react-router-dom';

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

export function addMovie(title, year, director) {
    return (dispatch) => {
        const url = 'http://localhost:8000/movies/:genre/create';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: getFormBody({ title, year, director }),
        })
            .then(response => response.json())
            .then((data) => {
                console.log('data', data)
                if (data.success) {
                    dispatch(addMovieSuccess(data.movie));
                    return;
                }
                dispatch(addMovieFailed(data.message));
            })
    }
}

export function updatePosts(posts) {
    return {
        type: UPDATE_POSTS,
        posts
    }
}

export function addMovieFailed(error) {
    return {
        type: ADDMOVIE_FAILED,
        error
    }
}

export function addMovieSuccess(movie) {
    return {
        type: ADDMOVIE_SUCCESS,
        movie
    }
}
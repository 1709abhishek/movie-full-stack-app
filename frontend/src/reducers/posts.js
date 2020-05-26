import { UPDATE_POSTS } from "../actions/actionTypes";

export default function posts(state = [], action) {
    switch (action.type) {
        case UPDATE_POSTS:
            return action.posts;
        default:
            return state;
    }
    return state;
}

// const initialAuthState = {
//     movie: {},
//     error: null,

// }


// export default function auth(state = initialAuthState, action) {
//     switch (action.type) {

//         case ADDMOVIE_SUCCESS:
//             return {
//                 ...state,
//                 movie: action.movie,
//                 error: null
//             };
//         case ADDMOVIE_FAILED:
//             return {
//                 ...state,
//                 error: action.error
//             };

//         default:
//             return state
//     }
// }
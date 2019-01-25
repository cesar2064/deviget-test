import { Actions, ActionTypes } from './actions';
import { featureAdapter, initialState, State } from './state';
import { RedditPostModel } from 'src/app/shared/models/reddit-post.model';

declare var moment: any;

export function postReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.POST_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case ActionTypes.POST_SUCCESS:
            return featureAdapter.addAll(action.payload.posts, {
                ...state,
                posts: action.payload.posts,
                isLoading: false,
            });
        case ActionTypes.POST_DELETE:
            return {
                ...state,
                posts: state.posts.filter((post: RedditPostModel) => {
                    return post.data.id !== action.payload.id;
                }),
                isLoading: false,
            };
        case ActionTypes.POST_ERROR:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            };
        default: {
            return state;
        }
    }
}
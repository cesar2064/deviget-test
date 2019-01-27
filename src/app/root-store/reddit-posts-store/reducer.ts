import { Actions, ActionTypes, PostSuccessAction } from './actions';
import { featureAdapter, initialState, RedditPostsState } from './state';
import { RedditPostModel } from 'src/app/shared/models/reddit-post.model';
import { UPDATE } from '@ngrx/store';

declare var moment: any;

export function postReducer(state = initialState, action: Actions): RedditPostsState {
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
            let post = state.posts.find((post) => post.data.id == action.payload.id);
            post && (post.isDeleted = true);
            return {
                ...state,
                isLoading: false,
            };
        case ActionTypes.POST_UPDATE:
            let found = state.posts.find((post) => {
                return post.data.id == action.payload.data.id
            });
            Object.assign(found, action.payload);
            return {
                ...state,
                posts: state.posts,
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
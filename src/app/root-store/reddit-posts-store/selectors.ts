import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { featureAdapter, State } from './state';
import { RootStoreState } from '../../root-store';
import { RedditPostModel } from 'src/app/shared/models/reddit-post.model';

const getError = (state: State): any => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

export const selecPostState: MemoizedSelector<
    object,
    State
    > = createFeatureSelector<State>('post');

export const selectAllPosts: (
    state: object
) => RedditPostModel[] = featureAdapter.getSelectors(selecPostState).selectAll;


export const findOnePost = (id: string) =>
    createSelector(
        (state: RootStoreState.State) => state.redditPosts.posts,
        (posts) => {
            return posts.find((post) => id === post.data.id);
        });


export const selectPostError: MemoizedSelector<object, any> = createSelector(
    selecPostState,
    getError
);

export const selectPostIsLoading: MemoizedSelector<
    object,
    boolean
    > = createSelector(selecPostState, getIsLoading);
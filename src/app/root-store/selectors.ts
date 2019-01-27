import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  RedditPostsStoreSelectors
} from './reddit-posts-store';


export const selectError: MemoizedSelector<object, string> = createSelector(
  RedditPostsStoreSelectors.selectPostError,
  (postError: string) => {
    return postError;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  RedditPostsStoreSelectors.selectPostIsLoading,
  (isLoading: boolean) => {
    return isLoading;
  }
);
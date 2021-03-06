import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { RedditPostModel } from 'src/app/shared/models/reddit-post.model';

export const featureAdapter: EntityAdapter<
RedditPostModel
> = createEntityAdapter<RedditPostModel>({
    selectId: model => model.data.id
});

export interface RedditPostsState extends EntityState<RedditPostModel>  {
    posts: RedditPostModel[];
    isLoading: boolean;
    error: string;
}

export const initialState: RedditPostsState = featureAdapter.getInitialState({
    posts: [],
    isLoading: false,
    error: null
});
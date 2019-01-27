import { Action } from '@ngrx/store';
import { RedditPostModel } from 'src/app/shared/models/reddit-post.model';

export enum ActionTypes {
  POST_REQUEST = 'Post list request',
  POST_SUCCESS = 'Post detail',
  POST_DELETE = 'Post delete',
  POST_UPDATE = 'Post update',
  POST_ERROR = 'Post error'
}

export class PostRequestAction implements Action {
  readonly type = ActionTypes.POST_REQUEST;
  constructor(public payload: { filter: any }) { }
}

export class PostSuccessAction implements Action {
  readonly type = ActionTypes.POST_SUCCESS;
  constructor(public payload: { posts: RedditPostModel[] }) { }
}

export class PostDeleteAction implements Action {
  readonly type = ActionTypes.POST_DELETE;
  constructor(public payload: { id: string }) { }
}

export class PostUpdateAction implements Action {
  readonly type = ActionTypes.POST_UPDATE;
  constructor(public payload: RedditPostModel) { }
}

export class PostErrorAction implements Action {
  readonly type = ActionTypes.POST_ERROR;
  constructor(public payload: { error: string }) { }
}

export type Actions = PostRequestAction | PostSuccessAction | PostErrorAction | PostDeleteAction | PostUpdateAction;

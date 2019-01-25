import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import * as featureActions from './actions';
import { RootStoreState } from '..';
import { RedditService } from 'src/app/shared/services/reddit.service';
import { RedditPostModel } from 'src/app/shared/models/reddit-post.model';

@Injectable()
export class RedditPostsStoreEffects {
    constructor(
        private redditService: RedditService,
        private actions$: Actions,
        private store$: Store<RootStoreState.State>
    ) { }

    private postsList: RedditPostModel[];

    @Effect()
    postRequestEffect$: Observable<Action> = this.actions$.pipe(
        ofType<featureActions.PostRequestAction>(
            featureActions.ActionTypes.POST_REQUEST
        ),
        exhaustMap(() => {
            return this.redditService
                .top()
                .pipe(
                    map(
                        posts => new featureActions.PostSuccessAction({
                            posts
                        })
                    ),
                    catchError(error =>
                        observableOf(new featureActions.PostErrorAction({ error }))
                    )
                );
        })
    );
}
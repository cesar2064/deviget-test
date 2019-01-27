import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, State } from '@ngrx/store';
import { RootStoreState } from 'src/app/root-store';
import { take, map, filter } from 'rxjs/operators';
import { RedditPostModel } from '../models/reddit-post.model';
import { PostRequestAction } from '../../root-store/reddit-posts-store/actions';
import { RedditPostsState } from 'src/app/root-store/reddit-posts-store/state';

@Injectable()
export class ReddiPostsResolver implements Resolve<Observable<RedditPostsState>> {
  constructor(
    private store$: Store<RootStoreState.State>
  ) { }

  resolve(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<RedditPostsState> {
    this.initProfileData();
    return this.store$.select('redditPosts').pipe(map((state) => state), filter((state) => { return state.posts.length > 0 }), take(1));
  }

  initProfileData(): void {
    this.store$.pipe(take(1)).subscribe(store => {
      if (store.redditPosts.posts.length == 0) {
        this.store$.dispatch(new PostRequestAction({ filter: {} }));
      }
    });
  }
}

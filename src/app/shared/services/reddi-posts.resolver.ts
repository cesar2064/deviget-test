import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootStoreState } from 'src/app/root-store';
import { take, map, filter } from 'rxjs/operators';
import { RedditPostModel } from '../models/reddit-post.model';

@Injectable()
export class ReddiPostsResolver implements Resolve<Observable<RedditPostModel[]>> {
  constructor(
    private store$: Store<RootStoreState.State>
  ) { }

  resolve(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<RedditPostModel[]> {
    return this.store$.select('redditPosts').pipe(map((store) => store.posts as RedditPostModel[]), take(1));
  }
}

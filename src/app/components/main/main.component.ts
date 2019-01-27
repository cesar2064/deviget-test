import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { RedditPostsState } from 'src/app/root-store/reddit-posts-store/state';
import { RootStoreState } from 'src/app/root-store';
import { take } from 'rxjs/operators';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate(600, style({ opacity: 0, transform: 'translateX(-40px)' }))
      ])
    ])
  ]
})
export class MainComponent implements OnInit {

  redditPostState: RedditPostsState;
  idToAnimate: string;
  constructor(
    private acr: ActivatedRoute,
    private store$: Store<RootStoreState.State>
  ) { }

  ngOnInit() {
    this.redditPostState = this.acr.snapshot.data.posts;
  }
  onDeletedPost($event) {
    this.store$.select('redditPosts').pipe(take(1)).subscribe((state) => {
      this.redditPostState = state;
    })
  }
}

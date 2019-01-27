import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState } from 'src/app/root-store';
import { PostDeleteAction, PostUpdateAction } from 'src/app/root-store/reddit-posts-store/actions';
import { RedditPostModel } from 'src/app/shared/models/reddit-post.model';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }),
        animate(600, style({ opacity: 0, transform: 'translateX(-40px)' }))
      ])
    ])
  ]
})
export class PostPreviewComponent implements OnInit {

  @Input() post: RedditPostModel;
  constructor(
    private store$: Store<RootStoreState.State>
  ) { }

  ngOnInit() { }

  open() {
    this.post.isRead = true;
    this.store$.dispatch(new PostUpdateAction(this.post));
  }

  remove() {
    this.post.isDeleted = true;
    this.store$.dispatch(new PostDeleteAction({ id: this.post.data.id }));
  }
}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState } from 'src/app/root-store';
import { PostDeleteAction, PostUpdateAction } from 'src/app/root-store/reddit-posts-store/actions';
import { RedditPostModel } from 'src/app/shared/models/reddit-post.model';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {

  @Input() post: RedditPostModel;
  @Output() deletedPost = new EventEmitter();

  constructor(
    private store$: Store<RootStoreState.State>
  ) { }

  ngOnInit() { }

  open() {
    this.post.isRead = true;
    this.store$.dispatch(new PostUpdateAction(this.post));
  }

  remove() {
    this.store$.dispatch(new PostDeleteAction({ id: this.post.data.id }));
    this.deletedPost.emit(this.post.data.id);
  }
}

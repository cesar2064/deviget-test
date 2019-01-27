import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedditPostsState } from 'src/app/root-store/reddit-posts-store/state';
import { RedditPostModel } from 'src/app/shared/models/reddit-post.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']

})
export class MainComponent implements OnInit {

  redditPostState: RedditPostsState;
  openedPost: RedditPostModel;
  constructor(
    private acr: ActivatedRoute
  ) { }

  ngOnInit() {
    this.redditPostState = this.acr.snapshot.data.posts;
  }
  onOpenedPost(id: string) {
    this.openedPost = this.redditPostState.posts.find(post => post.data.id == id);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedditPostsState } from 'src/app/root-store/reddit-posts-store/state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']

})
export class MainComponent implements OnInit {

  redditPostState: RedditPostsState;
  idToAnimate: string;
  constructor(
    private acr: ActivatedRoute
  ) { }

  ngOnInit() {
    this.redditPostState = this.acr.snapshot.data.posts;
  }
}

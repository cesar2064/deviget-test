import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedditPostsState } from 'src/app/root-store/reddit-posts-store/state';
import { RedditPostModel } from 'src/app/shared/models/reddit-post.model';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']

})
export class MainComponent implements OnInit {

  redditPostState: RedditPostsState;
  openedPost: RedditPostModel;
  openSideNav = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.matchMediaQuery();
  }

  constructor(
    private acr: ActivatedRoute,
    public breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.redditPostState = this.acr.snapshot.data.posts;
    this.matchMediaQuery();
  }
  private matchMediaQuery() {
    this.breakpointObserver
      .observe(['(min-width: 800px) and (orientation: landscape)', '(min-width: 800px) and (orientation: portrait)'])
      .pipe(take(1))
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.openSideNav = true;
        }
        else {
          this.openSideNav = false;
        }
      });
  }
  onOpenedPost(id: string) {
    this.openedPost = this.redditPostState.posts.find(post => post.data.id == id);
  }
  onSwipeRight($event) {
    this.openSideNav = true;
  }
  onSwipeLeft($event) {
    this.openSideNav = false;
  }
}

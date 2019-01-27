import { Component, OnInit, Input } from '@angular/core';
import { RedditPostModel } from 'src/app/shared/models/reddit-post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: RedditPostModel;
  constructor() { }

  ngOnInit() {
  }

}

/**************** Librarys ***************/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

/**************** App ***************/
import { RedditPostModel, RedditPostResponse } from '../models/reddit-post.model';
import { environment } from 'src/environments/environment';


@Injectable()
export class RedditService {

  constructor(
    private http: HttpClient
  ) { }

  top(): Observable<RedditPostModel[]> {
    return this.http.get<RedditPostResponse>(environment.api.reddit.top).pipe(map(response => response.data.children));
  }
}

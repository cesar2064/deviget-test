import { RedditResponseModel } from './reddit.response.model';

export interface RedditPostResponse extends RedditResponseModel {
    data:{
        modash: string;
        dist: number;
        children: RedditPostModel[];
    }
}

export interface RedditPostModel {
    isRead?: boolean;
    isDeleted?: boolean;
    kind: string;
    data: {
        id: string;
        title: string;
        author: string;
        thumbnail: string;
        thumbnail_height: number;
        thumbnail_width: number;
        num_comments: number;
        created_utc: number;
        created: number;
    }
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { RedditPostsStoreEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('redditPosts', postReducer),
    EffectsModule.forFeature([RedditPostsStoreEffects])
  ],
  providers: [
    RedditPostsStoreEffects
  ],
  declarations: []
})
export class RedditPostsStoreModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedditPostsStoreModule } from './reddit-posts-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RedditPostsStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }

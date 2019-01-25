import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedditService } from './services/reddit.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    RedditService
  ]
})
export class SharedModule { }

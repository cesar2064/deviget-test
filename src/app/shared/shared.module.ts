import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedditService } from './services/reddit.service';
import { RootStoreModule } from '../root-store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RootStoreModule,
    HttpClientModule
  ],
  providers: [
    RedditService
  ]
})
export class SharedModule { }

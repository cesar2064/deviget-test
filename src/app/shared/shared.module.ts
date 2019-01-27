import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedditService } from './services/reddit.service';
import { RootStoreModule } from '../root-store';
import { HttpClientModule } from '@angular/common/http';
import { CutTextPipe } from './pipes/cut-text.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
  declarations: [CutTextPipe, TimeAgoPipe],
  imports: [
    CommonModule,
    RootStoreModule,
    HttpClientModule
  ],
  providers: [
    RedditService
  ],
  exports:[
    CutTextPipe,
    TimeAgoPipe
  ]
})
export class SharedModule { }

/**************** Library modules imports ***************/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

/**************** App modules imports ***************/
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

/**************** App components imports ***************/
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PostPreviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

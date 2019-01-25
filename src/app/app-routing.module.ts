import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ReddiPostsResolver } from './shared/services/reddi-posts.resolver';

const routes: Routes = [
  { path: '', component: MainComponent, resolve: [ReddiPostsResolver] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [ReddiPostsResolver],
  exports: [RouterModule]
})
export class AppRoutingModule { }

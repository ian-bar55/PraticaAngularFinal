import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { NavComponent } from './nav/nav.component';


const routes: Routes = [
  {path: 'comment', component: CommentComponent},
  {path: 'user', component: UserComponent},
  {path: 'post', component: PostComponent},
  {path: 'nav', component: NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

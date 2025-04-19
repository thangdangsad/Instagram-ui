// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {PostListComponent} from "./components/post/post-list/post-list.component";
import {PostCreateComponent} from "./components/post/post-create/post-create.component";
import {AuthGuard} from "./core/guards/auth.guard";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'posts', component: PostListComponent, canActivate: [AuthGuard] },
  { path: 'posts/create', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', redirectTo: '/posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

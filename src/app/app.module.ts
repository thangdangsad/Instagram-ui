// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {PostListComponent} from "./components/post/post-list/post-list.component";
import {PostCreateComponent} from "./components/post/post-create/post-create.component";
import {AppRoutingModule} from "./app.routes";


@NgModule({
    declarations: [

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        AppComponent,
        RegisterComponent,
        PostListComponent,
        PostCreateComponent,
        LoginComponent
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }

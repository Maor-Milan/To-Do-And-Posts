import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { ActionHostCompComponent } from './action-host-comp/action-host-comp.component';
import { PocComponent } from './poc/poc.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AH2Component } from './ah2/ah2.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NewUserComponent } from './new-user/new-user.component'


@NgModule({
  declarations: [
    AppComponent,
    UpdatePersonComponent,
    ActionHostCompComponent,
    PocComponent,
    UserComponent,
    UsersComponent,
    TodosComponent,
    TodoComponent,
    PostsComponent,
    PostComponent,
    AddTodoComponent,
    AH2Component,
    NewPostComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

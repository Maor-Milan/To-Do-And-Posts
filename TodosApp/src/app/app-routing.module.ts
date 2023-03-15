import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionHostCompComponent } from './action-host-comp/action-host-comp.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AH2Component } from './ah2/ah2.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NewUserComponent } from './new-user/new-user.component';
import { PocComponent } from './poc/poc.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
                         
                           {path:"update/:id",component:UpdatePersonComponent},
                           {path:"todos/:id",component:TodosComponent},
                           {path:"actions/:id",component:ActionHostCompComponent },
                           {path:"addtodo/:id",component:AddTodoComponent },
                           {path:"actions",component:ActionHostCompComponent },
                           {path:"addpost/:id",component:NewPostComponent },
                           {path:"newuser",component:NewUserComponent },
                           

                           
                          
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

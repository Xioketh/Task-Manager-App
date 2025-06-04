import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskListComponent} from './components/task-list/task-list.component';
import {AddTaskComponent} from './components/add-task/add-task.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthGuard} from './Guard/auth-guard.service';
import {ForbiddenComponent} from './components/forbidden/forbidden.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'list', component: TaskListComponent, canActivate: [AuthGuard] },
  { path: 'create', component: AddTaskComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: AddTaskComponent, canActivate: [AuthGuard] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { QuestionBuilderComponent } from './question-builder/question-builder.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'question-builder',
    component: QuestionBuilderComponent
  },
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: LoginFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

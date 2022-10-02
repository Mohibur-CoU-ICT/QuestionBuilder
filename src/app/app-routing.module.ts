import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'question-builder',
    // loadChildren: () => QuestionBuilderModule
    loadChildren: () => import('./question-builder/question-builder.module').then(m => m.QuestionBuilderModule)
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

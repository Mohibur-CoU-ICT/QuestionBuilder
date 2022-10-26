import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { QuestionBuilderComponent } from './question-builder.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionBuilderComponent,
  },
  {
    path: 'create',
    component: CreateQuestionComponent
  },
  {
    path: ':id/details',
    component: CreateQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionBuilderRoutingModule { }

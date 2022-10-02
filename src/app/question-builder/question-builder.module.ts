import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionBuilderRoutingModule } from './question-builder-routing.module';
import { RouterModule } from '@angular/router';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { QuestionBuilderComponent } from './question-builder.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [CreateQuestionComponent,
    QuestionBuilderComponent,],
  imports: [
    CommonModule,
    RouterModule,
    QuestionBuilderRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule
  ]
})
export class QuestionBuilderModule { }

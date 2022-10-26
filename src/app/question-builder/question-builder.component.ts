import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '../models/Form';

const FORM_DATA: Form[] = [
  { id: 1, name: "Form 1", description: '', created_on: '10-01-2022', updated_on: '', questions: [] },
  { id: 2, name: "Form 2", description: '', created_on: '11-01-2022', updated_on: '', questions: [] },
  { id: 3, name: "Form 3", description: '', created_on: '12-01-2022', updated_on: '', questions: [] },
  { id: 4, name: "Form 4", description: '', created_on: '13-01-2022', updated_on: '', questions: [] },
  { id: 5, name: "Form 5", description: '', created_on: '14-01-2022', updated_on: '', questions: [] },
  { id: 6, name: "Form 6", description: '', created_on: '15-01-2022', updated_on: '', questions: [] }
];

@Component({
  selector: 'app-question-builder',
  templateUrl: './question-builder.component.html',
  styleUrls: ['./question-builder.component.css']
})

export class QuestionBuilderComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'created_on'];
  dataSource = FORM_DATA;
  
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    try {
      let forms = localStorage.getItem('forms');
      if (!forms) forms = '';
      this.dataSource = JSON.parse(forms);
    } catch (error) {
      console.log(error);
    }
  }

  formClicked(id: number) {
    this.router.navigate([`question-builder/${id}/details`]);
  }

}

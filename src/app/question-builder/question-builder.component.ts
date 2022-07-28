import { Component, OnInit } from '@angular/core';
export interface Form {
  id: number;
  name: string;
  created_on: string;
}

const FORM_DATA: Form[] = [
  {id: 1, name: "Form 1", created_on: '10-01-2022'},
  {id: 2, name: "Form 2", created_on: '11-01-2022'},
  {id: 3, name: "Form 3", created_on: '12-01-2022'},
  {id: 4, name: "Form 4", created_on: '13-01-2022'},
  {id: 5, name: "Form 5", created_on: '14-01-2022'},
  {id: 6, name: "Form 6", created_on: '15-01-2022'}
];

@Component({
  selector: 'app-question-builder',
  templateUrl: './question-builder.component.html',
  styleUrls: ['./question-builder.component.css']
})

export class QuestionBuilderComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'created_on'];
  dataSource = FORM_DATA;
  
  constructor() { }

  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import { Form } from '../models/Form';
import { PeriodicElement } from '../models/PeriodicElement';


const FORM_DATA: Form[] = [
  { id: 1, name: "Form 1", description: '', created_on: '10-01-2022', updated_on: '', questions: [] },
  { id: 2, name: "Form 2", description: '', created_on: '11-01-2022', updated_on: '', questions: [] },
  { id: 3, name: "Form 3", description: '', created_on: '12-01-2022', updated_on: '', questions: [] },
  { id: 4, name: "Form 4", description: '', created_on: '13-01-2022', updated_on: '', questions: [] },
  { id: 5, name: "Form 5", description: '', created_on: '14-01-2022', updated_on: '', questions: [] },
  { id: 6, name: "Form 6", description: '', created_on: '15-01-2022', updated_on: '', questions: [] }
];

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'created_on'];
  dataSource = FORM_DATA;
  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource2 = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

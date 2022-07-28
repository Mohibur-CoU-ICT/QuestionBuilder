import { Input, OnInit, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    // if (this.form.valid) {
      // this.submitEM.emit(this.form.value);
      this._Router.navigate(['question-builder']);
    // }
  }
  // @Input() error: string | null;
  error: string = '';

  @Output() submitEM = new EventEmitter();

  constructor(private _Router: Router) { }

  ngOnInit(): void {
    
  }

}

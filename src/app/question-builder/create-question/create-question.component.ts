import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionForm } from 'src/app/models/QuestionForm';
import { QuestionType } from 'src/app/models/QuestionType';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  maxDescriptionLen: number = 200;
  questionTypes: QuestionType[] = [
    { "value": "radio", "viewValue": "Multiple Choice" },
    { "value": "range", "viewValue": "Linear Scale" },
    { "value": "checkbox", "viewValue": "Checkbox" },
    { "value": "text", "viewValue": "Short Text" },
    { "value": "file", "viewValue": "File Upload" }
  ];
  ranges: number[] = [
    0, 20, 40, 60, 80, 100
  ];
  fileTypes: QuestionType[] = [
    { "value": "document", "viewValue": "DOCUMENT" },
    { "value": "spreadsheet", "viewValue": "SPREADSHEET" },
    { "value": "pdf", "viewValue": "PDF" },
    { "value": "image", "viewValue": "IMAGE" },
  ];
  fileSizes: string[] = [
    '1MB', '5MB', '10MB', '25MB'
  ];
  question: QuestionForm = {
    "name": "New Question",
    "type": "checkbox",
    "active": true,
    "options": [
      'new option'
    ],
    "allowedFileTypes": [],
    "maximumFileSize": "",
    "lowerRange": 0,
    "upperRange": 100,
    "leftLabel": "",
    "rightLabel": ""
  };

  formName: string = '';
  formDescription: string = '';
  questions: QuestionForm[] = [];
  addQuestionBtnClicked: boolean = false;

  constructor(private router: Router) {
    // console.log('inside create question component');
  }

  ngOnInit(): void {
    let qsn = {
      ...this.question,
      'options': [...this.question.options]
    };
    this.questions.push(qsn);
  }

  printQuestions() {
    console.log(this.questions);
  }

  addQuestion(addAt: number) {
    // console.log('addQuestion', addAt);
    this.addQuestionBtnClicked = true;
    this.questions.forEach((q, index) => {
      // q.active = index === addAt;
      q.active = false;
    });
    let qsn = {
      ...this.question,
      'options': [...this.question.options]
    };
    this.questions.splice(addAt, 0, qsn);
    // this.printQuestions();
  }

  copyQuestion(questionIndex: number) {
    // console.log('copyQuestion', questionIndex);
    let newQuestion = {
      ...this.questions[questionIndex]
    };
    newQuestion.active = true;
    this.questions.splice(questionIndex, 0, newQuestion);
    // this.printQuestions();
  }

  questionNameChanged(questionIndex: number, questionName: string) {
    // console.log('questionNameChanged', questionIndex, questionName);
    this.questions[questionIndex].name = questionName;
  }

  questionTypeChanged(questionIndex: number, qtype: any) {
    // console.log('questionTypeChanged', questionIndex, qtype);
    this.questions[questionIndex].type = qtype;
    if (qtype !== 'checkbox' || qtype !== 'radio') {
      // this.questions[questionIndex].options = ['new option'];
    }
    if (qtype === 'file') {
      // this.questions[questionIndex].options = [];
    }
    // this.printQuestions();
  }

  questionClicked(questionIndex: number) {
    // console.log('questionClicked', questionIndex);
    if (this.addQuestionBtnClicked) {
      this.addQuestionBtnClicked = false;
      return;
    }
    this.questions.forEach((qsn, index) => {
      qsn.active = index === questionIndex;
    });
    // this.printQuestions();
  }

  lowerRangeChanged(questionIndex: number, lowerValue: number) {
    // console.log('lowerRangeChanged', questionIndex, lowerValue);
    this.questions[questionIndex].lowerRange = lowerValue;
  }

  upperRangeChanged(questionIndex: number, upperValue: number) {
    // console.log('upperRangeChanged', questionIndex, upperValue);
    this.questions[questionIndex].upperRange = upperValue;
  }

  getRanges(questionIndex: number): number[] {
    // console.log('getRanges', questionIndex);
    let ranges: number[] = [];
    for (let i = this.questions[questionIndex].lowerRange; i <= this.questions[questionIndex].upperRange; i += 20) {
      ranges.push(i);
    }
    return ranges;
  }

  labelChanged(questionIndex: number, pos: string, value: string) {
    // console.log('labelChanged', questionIndex, pos, value);
    if (pos === 'left') {
      this.questions[questionIndex].leftLabel = value;
    }
    else if (pos === 'right') {
      this.questions[questionIndex].rightLabel = value;
    }
  }

  getFileTypes(allowedFileTypes: string[]) {
    // console.log('getFileTypes', allowedFileTypes);
    let ans: string = '';
    for (let i = 0; i < allowedFileTypes.length; i++) {
      if (i > 0) {
        ans += ', ';
      }
      ans += allowedFileTypes[i].toUpperCase();
    }
    return ans;
  }

  fileTypeChanged(questionIndex: number, fileType: string[]) {
    // console.log(questionIndex, fileType);
    this.questions[questionIndex].allowedFileTypes = fileType;
  }

  fileSizeChanged(questionIndex: number, fileSize: string) {
    // console.log(questionIndex, fileSize);
    this.questions[questionIndex].maximumFileSize = fileSize;
  }

  canAddOption(questionIndex: number): boolean {
    // console.log('canAddOption', questionIndex);
    let qt = this.questions[questionIndex].type;
    if (qt === 'checkbox' || qt === 'radio') {
      return this.questions[questionIndex].options.length < 10;
    }
    else {
      return false;
    }
  }

  canRemoveOption(questionIndex: number): boolean {
    // console.log('canRemoveOption', questionIndex);
    return this.questions[questionIndex].options.length > 1;
  }

  addOption(questionIndex: number) {
    // console.log('addOption', questionIndex);
    // method 1
    this.questions[questionIndex].options.push('new option');
    // method 2
    // let modifiedQuestion = {
    //   ...this.questions[questionIndex],
    //   'options': [...this.questions[questionIndex].options]
    // };
    // modifiedQuestion.options.push('new option');
    // this.questions.splice(questionIndex, 1, modifiedQuestion);
  }

  optionChange(questionIndex: number, optionIndex: number, e: any) {
    // console.log('optionChange', questionIndex, optionIndex);
    this.questions[questionIndex].options[optionIndex] = e.target.value;
  }

  removeOption(questionIndex: number, optionIndex: number) {
    // console.log('removeOption', questionIndex, optionIndex);
    // method 1
    this.questions[questionIndex].options.splice(optionIndex, 1);
    // method 2
    // let modifiedQuestion = {
    //   ...this.questions[questionIndex],
    //   'options': [...this.questions[questionIndex].options]
    // };
    // modifiedQuestion.options.splice(optionIndex, 1);
    // this.questions.splice(questionIndex, 1, modifiedQuestion);
    // this.printQuestions();
  }

  canDeleteQuestion(): boolean {
    // console.log('canDeleteQuestion');
    return this.questions.length > 1;
  }

  deleteQuestion(questionIndex: number) {
    // console.log('deleteQuestion');
    this.questions.splice(questionIndex, 1);
  }

  discardClicked() {
    // console.log('discardClicked');
    this.router.navigateByUrl('/question-builder');
  }

  clearIrrelevantFieldsFromQuestions() {
    // console.log('clearIrrelevantFieldsFromQuestions');
    this.questions.forEach((qsn) => {
      qsn.active = false;
      if (qsn.type === 'radio' || qsn.type === 'checkbox') {
        qsn.lowerRange = NaN;
        qsn.upperRange = NaN;
        qsn.leftLabel = '';
        qsn.rightLabel = '';
        qsn.allowedFileTypes = [];
        qsn.maximumFileSize = '';
      }
      else if (qsn.type === 'range') {
        qsn.options = [];
        qsn.allowedFileTypes = [];
        qsn.maximumFileSize = '';
      }
      else if (qsn.type === 'text') {
        qsn.options = [];
        qsn.lowerRange = NaN;
        qsn.upperRange = NaN;
        qsn.leftLabel = '';
        qsn.rightLabel = '';
        qsn.allowedFileTypes = [];
        qsn.maximumFileSize = '';
      }
      else if (qsn.type === 'file') {
        qsn.options = [];
        qsn.lowerRange = NaN;
        qsn.upperRange = NaN;
        qsn.leftLabel = '';
        qsn.rightLabel = '';
      }
    });
  }

  saveClicked() {
    // console.log('saveClicked');
    this.clearIrrelevantFieldsFromQuestions();
    let form: Object = {
      'name': this.formName,
      'description': this.formDescription,
      'questions': this.questions
    };
    localStorage.setItem('form', JSON.stringify(form));
    // this.printQuestions();
  }

  isSaveBtnDisabled(): boolean {
    // console.log('isSaveBtnDisabled');
    return this.formName.length == 0 || this.formDescription.length == 0;
  }

}

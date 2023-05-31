import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent {
  formMain: FormGroup;

  constructor() {
    this.formMain = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      bossname: new FormControl('', [Validators.required]),
      bosscommand: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.formMain.value);
  }

}

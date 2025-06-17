import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-register-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {

  formUtils = FormUtils;

  private fb = inject(FormBuilder);
  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.formUtils.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.formUtils.emailPattern)], [this.formUtils.checkingServerResponse]],
    userName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(this.formUtils.notOnlySpacesPattern),this.formUtils.notName]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [
      this.formUtils.isFieldEqualFieldTwo('password','password2')
    ]
  });

  onSubmit(){
    this.myForm.markAllAsTouched;
  }

}

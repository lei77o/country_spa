import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../../../utils/form-utils';

@Component({
  selector: 'app-switches-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './switches-page.component.html',
  styleUrl: './switches-page.component.css',
})
export class SwitchesPageComponent {

  formUtils= FormUtils;

  private fb = inject(FormBuilder);
  myForm: FormGroup = this.fb.group({
      gender: ['M', Validators.required],
      wantNotifications: [false],
      terms: [false, Validators.requiredTrue],
  });

  onSubmit(event: Event): void {
    this.myForm.markAllAsTouched();
    if (this.myForm.valid) {
      console.log('Form Submitted!', this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}

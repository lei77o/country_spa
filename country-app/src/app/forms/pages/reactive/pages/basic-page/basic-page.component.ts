import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {

  /*myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    inStorage: new FormControl('', [Validators.required]),
  });*/

  private fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', [Validators.required, Validators.min(10)]],
    inStorage: ['', [Validators.required]],
  });

  isValidField(field: string): boolean {
    const control = this.myForm.controls[field].errors;
    return !!this.myForm.controls[field].errors;

  }
}

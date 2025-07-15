import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {

  fb = inject(FormBuilder);
  hasError = signal(false);
  isPosting = signal(false);
  authService = inject(AuthService);
  router = inject(Router);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    this.hasError.set(false);
    this.isPosting.set(true);
    if (this.loginForm.valid) {
      // Simulate a login request
      setTimeout(() => {
        this.isPosting.set(false);
        // Handle successful login here
      }, 2000);
    } else {
      this.hasError.set(true);
      this.isPosting.set(false);
    }
    this.authService.login(this.loginForm.value.email!, this.loginForm.value.password!).subscribe( isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/']);
        return;
      };
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 3000);
    })
  }
}

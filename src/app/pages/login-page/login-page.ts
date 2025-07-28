import { Component, Inject, inject, PLATFORM_ID, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css']
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  
  isLoading = signal(false);
  loginError = signal<string | null>(null);
  showPassword = signal(false);
  
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    
    this.isLoading.set(true);
    this.loginError.set(null);
    
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1500);
    this.router.navigate(['/home']);
  }
  
  togglePasswordVisibility(): void {
    this.showPassword.update(value => !value);
  }
  
  forgotPassword(): void {
    console.log('Forgot password clicked');
  }
  
  register(): void {
    console.log('Register clicked');
  }
}
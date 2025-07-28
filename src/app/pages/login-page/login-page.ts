import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
      
      const { email, password } = this.loginForm.value;
      
      if (email === 'admin@example.com' && password === 'admin123') {
        console.log('Login successful');
      } else {
        this.loginError.set('Invalid email or password');
      }
    }, 1500);
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
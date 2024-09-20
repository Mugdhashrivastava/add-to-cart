import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  confirmPassword: string = '';


  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    this.authService.signup(this.username, this.password).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/login']); // Redirect to login after signup
        } else {
          alert('Signup failed');
        }
      }
    );
  } 
  
  onSubmit() {
    // Handle signup logic here
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  userName: string = '';
  password: string = '';
  email: string = '';
  confirmPassword: string = '';
  contactNo:string='';
  id: any;


  constructor(private authService: AuthService, private router: Router, private http:HttpClient) {}

  signup() {
    this.authService.signup(this.userName, this.password).subscribe(
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
    // Creating the payload
    const payload = {
      id: this.id,
      userName: this.userName,
      contactNo: this.contactNo,
      email: this.email,
    };

    // Console log the payload for debugging
    console.log('Payload:', payload);

    // Send the payload to the backend
    this.http.post('http://localhost:8080/api/user/signUp', payload)
      .subscribe((response: any) => {
        console.log('Response:', response);
        // Handle response here, e.g., display notification or redirect
      }, (error: any) => {
        console.error('Error:', error);
        // Handle error here, e.g., show an error notification
      });
  }

}

import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string ='';
  password: string = '';
  userType: string = 'employee' //Default login type

  constructor(private http: HttpClient, private router: Router){}

  login() {
    let url = this.userType === 'admin' ? 
    'https://localhost:7174/api/Admin/loginAdmin' : 
    'https://localhost:7174/api/employee/login';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    console.log('log in with:', {email: this.email, password: this.password});
    console.log('URL:', url)

    this.http.post(url, {
      Email:this.email,
      Password: this.password
    }, { headers })
      .subscribe(
        response => {
          console.log('Login exitoso, token recibido:', response);
          if (this.userType === 'admin') {
            this.router.navigate(['/homeAdmin']);
          } else {
            this.router.navigate(['/homeUser']);
          }
          
        },
        error => {
          console.error('Error en la solicitud:', error);
        }
      );
  }

}

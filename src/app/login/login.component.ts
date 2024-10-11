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
  emailError: boolean = false;
  passwordError: boolean = false;


  constructor(private http: HttpClient, private router: Router){}

  login() {
    this.emailError = !this.email; //Verificar si el campo email esta vacío.
    this.passwordError = !this.password; // Verificar si el campo password esta vacío.

    if (this.emailError || this.password) {
      return; // Que aparezcan si hay errores.
    }

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
        (response: any) => {
          console.log('Login exitoso, token recibido:', response.token);
          localStorage.setItem('token', response.token); // Almacenar el token en el local storage
          localStorage.setItem('role', this.userType === 'admin' ? 'Admin' : 'Employee'); // Se vérifica por ternario el rol que se seleccionó para guardarlo en el localStorage()
          this.router.navigate([this.userType === 'admin' ? '/homeAdmin': '/homeUser']); // Se vérifica a que ruta redirigir
          
        },
        error => {
          console.error('Error en la solicitud:', error);
          if (error.status === 401) {
            alert('Usuario no existente o credenciales inválidas.');
          }
        }
      );
  }

}

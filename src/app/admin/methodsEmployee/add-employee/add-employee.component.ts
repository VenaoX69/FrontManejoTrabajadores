import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';
import { Employee, EmployeeService } from '../../../employee/service/employee.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [MatIconModule, FormsModule, RouterOutlet],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  newEmployee: Employee = {
    identificacion: 0,
    identificationType: '',
    names: '',
    lastNames: '',
    email: '',
    password: '',
    phone: 0,
    contractNumber: 0,
    cityOfResidence: '',
    technicalRank: '',
    extensionRank: ''
  }

  constructor(private router: Router, private employeeService: EmployeeService) {}

  back(){
    this.router.navigate(['/homeAdmin']);
  }

  addEmployee(){
    console.log('la informacion es', this.newEmployee)
    this.employeeService.addEmployee(this.newEmployee).subscribe({
      next: () => {
        alert('Empleado creado exitosamente');
        this.router.navigate(['/homeAdmin']);
      },
      error: (err) => {
        console.error('Error al crear el empleado', err);
        alert('Hubo un error al crear el empleado');
      }
    });
  }
}

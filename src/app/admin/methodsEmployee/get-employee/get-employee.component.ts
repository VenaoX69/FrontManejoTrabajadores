import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../../employee/service/employee.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-get-employee',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule, RouterOutlet],
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {
  employee: Employee = {} as Employee;

  constructor(private employeeService: EmployeeService, private route:ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getEmployee(Number(id));
    }
  }

  getEmployee(id:number): void {
    this.employeeService.getEmployee(id)
      .subscribe((data: Employee) => {
        this.employee = data
        console.log(this.employee);
      })
  }

  updateEmployee(): void {

    if (this.employee.employeeId !== undefined) {
      console.log("Actualizado empleado:", this.employee);
    this.employeeService.updateEmployee(this.employee.employeeId, this.employee)
      .subscribe({
        next: (response) => {
          console.log("Empleado actualizado correctamente", response);
          alert("Se ha aatualizado correctamente el usuario.");
          this.router.navigate(['/homeAdmin']);
        }, error: (error) => {
          console.log("Error al actualizar el empleado", error.message);  
        }
      })
    } else {
      console.error("Error: El ID del empleado es indefinido.");
    }
    
  }

  back(){
    this.router.navigate(['/homeAdmin']);
  }
}
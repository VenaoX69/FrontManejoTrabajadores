import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../../employee/service/employee.service';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-employee',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {
  employee: Employee = {} as Employee;

  constructor(private employeeService: EmployeeService, private route:ActivatedRoute) {}

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
    this.employeeService.updateEmployee(this.employee.employeeId, this.employee)
      .subscribe({
        next: () => {
          console.log("Empleado actualizado correctamente");
        }, error: (error) => {
          console.log("Error al actualizar el empleado", error);  
        }
      })
  }

  

}

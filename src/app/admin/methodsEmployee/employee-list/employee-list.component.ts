import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../../employee/service/employee.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  //Logic obtener empleados
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe((data: Employee[]) => {
      this.employees = data,
      console.log(data);
    })
  }

  // Tabla Matrail angular
  displayedColumns: string[] = ['employeeId', 'names', 'lastNames', 'email', 'role'];
  dataSource = this.employees;
}

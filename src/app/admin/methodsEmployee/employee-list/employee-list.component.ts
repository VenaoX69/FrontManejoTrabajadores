import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../../employee/service/employee.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { PaginationPipe } from './pagination.pipe';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, PaginationPipe],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  //Logic obtener empleados
  employees: Employee[] = [];

  // Variables para la páginación
  currentPage = 1;
  pageSize = 5;
  totalPages = 0;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe((data: Employee[]) => {
      this.employees = data,
      // Calcular el número total de páginas
      this.totalPages = Math.ceil(this.employees.length / this.pageSize);
      console.log(data);
    })
  }

  //Método para cambiar de página
  changePage(newPage: number): void {
    // Validar que la nueva página está dentro de los límites
   if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
   }
    
  }

  emoployees = this.employees;
}

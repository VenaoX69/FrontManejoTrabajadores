import { Component } from '@angular/core';
import { EmployeeListComponent } from "../methodsEmployee/employee-list/employee-list.component";
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [EmployeeListComponent, CommonModule, MatIconModule, RouterOutlet],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {
  
  constructor(private router: Router) {}

  handleClick(){
    console.log("Hiciste click");
  }

  redirectAddEmployee(){
    console.log("Hiciste click");
    this.router.navigate(['/addEmployee']);
  }
}

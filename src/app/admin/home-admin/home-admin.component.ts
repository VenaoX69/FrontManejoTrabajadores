import { Component } from '@angular/core';
import { EmployeeListComponent } from "../methodsEmployee/employee-list/employee-list.component";
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [EmployeeListComponent, CommonModule, MatIconModule ],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {
  handleClick(){
    console.log("Hiciste click");
  }
}

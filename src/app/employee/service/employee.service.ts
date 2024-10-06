import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiEmployeesUrl = 'https://localhost:7174/api/employee/'; // URL de la API
  constructor(private http: HttpClient) { }

  // Método que retorna un Observable con la lista de empleados
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiEmployeesUrl);
  }

}


export interface Employee{
  identificacion: number;
  identificationType: string;
  names: string;
  lastNames: string;
  email: string;
  password: string;
  phone: string;
  contractNumber: number;
  cityOfResidence: string;
  technicalRank: string;
  role: string;
}
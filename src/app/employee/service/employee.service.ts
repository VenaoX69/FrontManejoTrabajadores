import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiEmployeesUrl = 'https://localhost:7174/api/employee/'; // URL de la API
  private apiEmployeeUrl = 'https://localhost:7174/api/employee/';
  private apiDeleteUrl = 'https://localhost:7174/api/employee/';
 
  constructor(private http: HttpClient) { }

  // Método que retorna un Observable con la lista de empleados
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiEmployeesUrl);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiEmployeeUrl}${id}`);
  }

  deleteEmploye(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiDeleteUrl}${id}`).pipe(
      catchError((error) => {
        console.error("Error en la eliminación:", error);
        throw error;
      })
    );
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiEmployeeUrl}${id}`, employee);
  }

}


export interface Employee{
  employeeId: number;
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
  extensionRank: string;
}
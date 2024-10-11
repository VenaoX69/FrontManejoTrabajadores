import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './employee/home/home.component';
import { NgModule } from '@angular/core';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { EmployeeListComponent } from './admin/methodsEmployee/employee-list/employee-list.component';
import { GetEmployeeComponent } from './admin/methodsEmployee/get-employee/get-employee.component';
import { AddEmployeeComponent } from './admin/methodsEmployee/add-employee/add-employee.component';
import { AuthAdminGuard } from './login/auth-admin.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }, // Login como path
    { path: 'homeUser', component: HomeComponent }, // Ruta para home del user
    { path: 'homeAdmin', component: HomeAdminComponent, canActivate:[AuthAdminGuard] },
    { path: 'list', component: EmployeeListComponent, canActivate:[AuthAdminGuard] },
    { path: 'employeeEdit/:id', component:GetEmployeeComponent, canActivate:[AuthAdminGuard] },
    { path: 'addEmployee', component:AddEmployeeComponent, canActivate:[AuthAdminGuard]},
    { path: '**', redirectTo: '/login' } // Redirige cualquier ruta no encontrada al path
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './employee/home/home.component';
import { NgModule } from '@angular/core';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { EmployeeListComponent } from './admin/methodsEmployee/employee-list/employee-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }, // Login como path
    { path: 'homeUser', component: HomeComponent }, // Ruta para home del user
    { path: 'homeAdmin', component: HomeAdminComponent },
    { path: 'list', component: EmployeeListComponent},
    { path: '**', redirectTo: '/login' } // Redirige cualquier ruta no encontrada al path
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
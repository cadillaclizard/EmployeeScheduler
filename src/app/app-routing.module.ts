import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  { path: '', redirectTo: '/scheduler', pathMatch: 'full' },
  { path: 'scheduler', component: SchedulerComponent },
  { path: 'employees', component: EmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

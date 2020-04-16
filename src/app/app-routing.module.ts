import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent, } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'scheduler', pathMatch: 'full' },
      { path: 'scheduler', loadChildren: () => import('./views/scheduler/scheduler.module').then(m => m.SchedulerModule) },
      { path: 'employees', loadChildren: () => import('./views/employees/employees.module').then(m => m.EmployeesModule) }
    ]
  }
];

@NgModule({
  imports: [
    LayoutModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

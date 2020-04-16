import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulerComponent } from './scheduler.component';

import { SchedulerRoutingModule } from './scheduler-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SchedulerComponent],
  imports: [
    CommonModule,
    SchedulerRoutingModule,
    SharedModule
  ]
})
export class SchedulerModule { }

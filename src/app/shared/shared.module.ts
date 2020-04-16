import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  exports: [
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DetailedMatListItemComponent } from './employee-detailed/detailed-mat-list-item/detailed-mat-list-item.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SortAscendingPipe } from './employees-list/pipes/sort-ascending.pipe';
import { SortDescendingPipe } from './employees-list/pipes/sort-descending.pipe';
import { EmployeeDetailedComponent } from './employee-detailed/employee-detailed.component';

import { AppRoutingModule } from '../../../ui-main/src/lib/app-routing.module';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatButtonModule,
    AppRoutingModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    DetailedMatListItemComponent,
    EmployeesListComponent,
    SortAscendingPipe,
    SortDescendingPipe,
    EmployeeDetailedComponent,
    LoaderComponent
  ],
  exports: [
    DetailedMatListItemComponent,
    EmployeesListComponent,
    EmployeeDetailedComponent,
    AppRoutingModule,
    LoaderComponent
  ]
})
export class UiEmployeesModule {}

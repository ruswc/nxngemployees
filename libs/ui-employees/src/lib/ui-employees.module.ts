import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { SortAscendingPipe } from './employees-list/pipes/sort-ascending.pipe';
import { SortDescendingPipe } from './employees-list/pipes/sort-descending.pipe';
import { EmployeeDetailedComponent } from './employee-detailed/employee-detailed.component';
import { DetailedMatListItemComponent } from './employee-detailed/detailed-mat-list-item/detailed-mat-list-item.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { LoaderComponent } from './loader/loader.component';

import { EmployeesFormsModule } from '@nxngemployees/employees-forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromEmployees from './+state/employees/employees.reducer';
import { EmployeesEffects } from './+state/employees/employees.effects';

const routes: Routes = [
    {
        path: '',
        component: EmployeesListComponent
    },
    { path: ':id', component: EmployeeDetailedComponent }
];

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatListModule,
        HttpClientModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatCardModule,
        MatDividerModule,
        EmployeesFormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(
            fromEmployees.EMPLOYEES_FEATURE_KEY,
            fromEmployees.reducer
        ),
        EffectsModule.forFeature([EmployeesEffects])
    ],
    declarations: [
        DetailedMatListItemComponent,
        EmployeesListComponent,
        SortAscendingPipe,
        SortDescendingPipe,
        EmployeeDetailedComponent,
        LoaderComponent
    ]
})
export class UiEmployeesModule {}

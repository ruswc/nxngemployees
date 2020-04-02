import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { UiHeaderModule } from '@nxngemployees/ui-header';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        loadChildren: () =>
            import('@nxngemployees/ui-employees').then(
                module => module.UiEmployeesModule
            )
    }
];

@NgModule({
    imports: [CommonModule, UiHeaderModule, RouterModule.forChild(routes)],
    declarations: [MainComponent]
})
export class UiMainModule {}

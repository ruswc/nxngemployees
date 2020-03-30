import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { UiHeaderModule } from '@nxngemployees/ui-header';
import { UiEmployeesModule } from '@nxngemployees/ui-employees';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [CommonModule, UiHeaderModule, UiEmployeesModule, AppRoutingModule],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class UiMainModule {}

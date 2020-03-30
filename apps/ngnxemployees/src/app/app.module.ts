import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UiMainModule } from '@nxngemployees/ui-main';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingRootModule } from './app-routing-root.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiMainModule,
    BrowserAnimationsModule,
    AppRoutingRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

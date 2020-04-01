import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, MatToolbarModule, MatIconModule, RouterModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class UiHeaderModule {}

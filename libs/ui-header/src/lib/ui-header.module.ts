import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        RouterModule,
        MatChipsModule,
        MatTooltipModule
    ],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class UiHeaderModule {}

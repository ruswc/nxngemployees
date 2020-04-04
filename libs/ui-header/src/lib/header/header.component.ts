import { Component, OnInit } from '@angular/core';
import { DataTransmissionService } from '@nxngemployees/shared';

@Component({
    selector: 'nxngemployees-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    // path = this.dataTransmissionService.getHistoryPath();

    constructor(public dataTransmissionService: DataTransmissionService) {}

    ngOnInit(): void {
        // this.path = this.dataTransmissionService.getHistoryPath();
    }
}

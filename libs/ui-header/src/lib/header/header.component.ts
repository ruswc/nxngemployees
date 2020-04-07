import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeaderEmployeeNameService } from '@nxngemployees/shared';

@Component({
    selector: 'nxngemployees-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
    constructor(public headerEmployeeNameService: HeaderEmployeeNameService) {}
    ngOnInit(): void {}
}

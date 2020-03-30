import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nxngemployees-detailed-mat-list-item',
  templateUrl: './detailed-mat-list-item.component.html',
  styleUrls: ['./detailed-mat-list-item.component.scss'],
})
export class DetailedMatListItemComponent implements OnInit {
  @Input() subtitle: string;
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}
}

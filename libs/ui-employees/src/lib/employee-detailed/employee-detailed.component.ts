import { Component, OnInit, Input } from '@angular/core';
import { Employees } from '../employees.service';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nxngemployees-employee-detailed',
  templateUrl: './employee-detailed.component.html',
  styleUrls: ['./employee-detailed.component.scss']
})
export class EmployeeDetailedComponent implements OnInit {
  @Input() employee: Employees;
  id: number = +this.route.snapshot.paramMap.get('id');
  loader = false;

  constructor(
    private employeesService: EmployeesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loader = true;
    this.getEmployee();
  }

  getEmployee() {
    this.employeesService.getEmployee(this.id).subscribe(response => {
      this.employee = response;
      this.loader = false;
    });
  }
}

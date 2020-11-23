import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/services/employee.service';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.scss']
})
export class AboutComponentComponent implements OnInit {

  public employees = []

  constructor(private employeeDet: EmployeeService) { }

  ngOnInit(): void {
    this.employeeDet.getEmployess()
      .subscribe(employeeData => this.employees = employeeData);
  }

}

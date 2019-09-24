import { Component, OnInit } from '@angular/core';
import { EmployeeServices } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employee: EmployeeServices) { }

  ngOnInit() {
    this.employeeDetail=this.employee.getEmployee()
  }
  employeeDetail = []
}

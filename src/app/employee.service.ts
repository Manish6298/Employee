import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeServices{
    employee = [
        {id: 1, name: 'ABC' , dept: 'CSE'},
        {id: 2, name: 'XYZ' , dept: 'ECE'},
        {id: 3, name: 'PQR' , dept: 'HR'}
      ]

      getEmployee(){
          return this.employee
      }
       setEmployee(emp){
            this.employee.push(emp)
       }
}
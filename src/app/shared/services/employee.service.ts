import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeUrl: string = "../../../assets/JasonData/employee.json";

  constructor(private http: HttpClient) { }

  getEmployess(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl);
  }
}

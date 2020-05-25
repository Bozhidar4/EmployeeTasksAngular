import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './models/employee.model';
import { TaskService } from './task.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;
  readonly rootURL = 'http://localhost:50326/api';
  employeeList: Employee[];

  constructor(private http: HttpClient, private tasksService: TaskService) { }

  async getEmployees() {
    const res = await this.http.get(`${this.rootURL}/employees`).toPromise();
    return this.employeeList = (res as Employee[]);
  }

  async getTasksForEmployee(id: number) {
    return await this.tasksService.getTasksForEmployee(id);
  }

  getFirstTaskDetails(employeeId: number) {
    return this.tasksService.getFirstTaskDetails(employeeId);
  }
}

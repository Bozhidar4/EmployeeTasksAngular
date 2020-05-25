import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  formData: Task;
  readonly rootURL = 'http://localhost:50326/api/tasks';
  tasksList: Task[];
  taskDetails: Task;
  firstTaskDetails: Task;

  constructor(private http: HttpClient) { }

  async getTasksForEmployee(id: number) {
    const res = await this.http.get(`${this.rootURL}/${id}`).toPromise();
    return this.tasksList = (res as Task[]);
  }

  async getTasksForFirstEmployee() {
    const res = await this.http.get(`${this.rootURL}/firstemployeetasks`).toPromise();
    return this.tasksList = (res as Task[]);
  }

  async getTaskDetails(taskId: number) {
    const res = await this.http.get(`${this.rootURL}/details/${taskId}`).toPromise();
    return this.taskDetails = (res as Task);
  }

  async getFirstTaskDetails(employeeId: number) {
    const res = await this.http.get(`${this.rootURL}/${employeeId}/detail`).toPromise();
    return this.taskDetails = (res as Task);
  }

  async getDetailsForFirstTask() {
    const res = await this.http.get(`${this.rootURL}/details/firsttask`).toPromise();
    return this.taskDetails = (res as Task);
  }
}

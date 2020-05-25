import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styles: []
})
export class TaskListComponent implements OnInit {

  constructor(private service: TaskService) { }

  public currentTask: string;

  async ngOnInit() {
    await this.getTasksForFirstEmployee();
  }

  async getTasksForFirstEmployee() {
      const res = await this.service.getTasksForFirstEmployee();
      return this.currentTask = res[0].title;
  }

  async getTaskDetails(task: { id: number; }) {
      const res = await this.service.getTaskDetails(task.id);
      return res;
  }

  selectTask(task: any) {
    this.currentTask = task.title;
  }
}

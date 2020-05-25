import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../shared/task.service';
import { UpdateTaskModalComponent } from '../modals/update-task-modal.component';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styles: []
})
export class TaskDetailsComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  @ViewChild(UpdateTaskModalComponent) updateTaskModalComponent: UpdateTaskModalComponent;

  async ngOnInit() {
    await this.getDetailsForFirstTask();
  }

  async getDetailsForFirstTask() {
    const task = await this.taskService.getDetailsForFirstTask();
    this.updateTaskModalComponent.selectedTask = task;
    return task;
  }

  showUpdateTaskModal() {
  }
}

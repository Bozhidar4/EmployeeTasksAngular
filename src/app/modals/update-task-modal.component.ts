import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/models/task.model';

declare var $: any;

@Component({
      selector: 'app-update-task-modal',
      templateUrl: './update-task-modal.component.html',
      styles: []
    })
    export class UpdateTaskModalComponent implements OnInit {
      constructor() { }

      public selectedTask: Task;

      ngOnInit() {
      }
      showModal(): void {
        $('#updateTaskModal').modal('show');
      }
      sendModal(): void {
        this.hideModal();
      }
      hideModal(): void {
        document.getElementById('close-modal').click();
      }
    }

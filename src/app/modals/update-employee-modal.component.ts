import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../shared/models/employee.model';

declare var $: any;

@Component({
      selector: 'app-update-employee-modal',
      templateUrl: './update-employee-modal.component.html',
      styles: []
    })
    export class UpdateEmployeeModalComponent implements OnInit {
      constructor() { }

      selectedEmployee: Employee;

      ngOnInit() {
      }
      showModal(): void {
          $('#updateEmployeeModal').modal('show');
      }
      sendModal(): void {
        this.hideModal();
      }
      hideModal(): void {
        document.getElementById('close-modal').click();
      }
    }

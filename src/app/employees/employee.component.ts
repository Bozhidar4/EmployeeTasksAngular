import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { TaskListComponent } from '../task-details/task-list.component';
import { Employee } from '../shared/models/employee.model';
import { UpdateEmployeeModalComponent } from '../modals/update-employee-modal.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  public currentEmployeeFirstName: string;
  public isEmployeeSelected = false;
  public currentEmployee: Employee;
  @ViewChild(TaskListComponent) taskListComponent: TaskListComponent;
  @ViewChild(UpdateEmployeeModalComponent) updateEmployeeModalComponent: UpdateEmployeeModalComponent;

  async ngOnInit() {
    await this.getEmployees();
  }

  async getEmployees() {
    const res = await this.employeeService.getEmployees();
    this.updateEmployeeModalComponent.selectedEmployee = res[0];
    return this.currentEmployeeFirstName = res[0].firstName;
  }

  async getTasks(employee: { id: number; }) {
    this.updateFirstTaskDetails(employee.id);

    return await this.employeeService.getTasksForEmployee(employee.id);
  }

  async updateFirstTaskDetails(employeeId: number) {
    const res = await this.employeeService.getFirstTaskDetails(employeeId);
    return this.taskListComponent.currentTask = res.title;
  }

  public selectEmployee(employee: any) {
    this.currentEmployeeFirstName = employee.firstName;
    this.updateEmployeeModalComponent.selectedEmployee = employee;
  }

  showUpdateEmployeeModal() {
  }
}

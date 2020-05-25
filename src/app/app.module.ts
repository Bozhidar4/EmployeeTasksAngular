import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employees/employee.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { EmployeeService } from './shared/employee.service';
import { TaskService } from './shared/task.service';
import { HttpClientModule } from '@angular/common/http';
import { TaskListComponent } from './task-details/task-list.component';
import { UpdateTaskModalComponent } from './modals/update-task-modal.component';
import { UpdateEmployeeModalComponent } from './modals/update-employee-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TaskListComponent,
    TaskDetailsComponent,
    UpdateTaskModalComponent,
    UpdateEmployeeModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService, TaskService, TaskListComponent, UpdateTaskModalComponent, UpdateEmployeeModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

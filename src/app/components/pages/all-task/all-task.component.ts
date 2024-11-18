import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { DatePipe, SlicePipe } from '@angular/common';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-all-task',
  standalone: true,
  imports: [FormsModule, DatePipe, PageTitleComponent, TaskListComponent],
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.scss',
})
export class AllTaskComponent {
  newTask = '';
  taskList: any[] = [];

  // Inject HttpService via constructor
  constructor(
    private httpService: HttpService,
    private stateService: StateService
  ) {}

  // ngOnInit method to load all tasks initially

  ngOnInit() {
    this.stateService.searchSubject.subscribe((value) => {
      if (value) {
        this.taskList = this.taskList.filter((x) =>
          x.title.toLowerCase().includes(value.toLowerCase())
        );
      }
    });
    this.getAllTasks();
  }

  addTask() {
    console.log('addTask', this.newTask);
    this.httpService.addTask(this.newTask).subscribe(() => {
      this.newTask = '';
      this.getAllTasks();
    });
  }

  getAllTasks() {
    this.httpService.getAllTasks().subscribe((result: any) => {
      this.taskList = result;
    });
  }

  onComplete(task: any) {
    task.completed = true;
    console.log('complete', task);
    this.httpService.updateTask(task).subscribe(() => {});
  }

  onImportant(task: any) {
    task.important = true;
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    });
  }
  search(searchTerm: any) {
    console.log(searchTerm);
  }
}

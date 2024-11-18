import { Component, Inject } from '@angular/core';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-important-task',
  standalone: true,
  imports: [PageTitleComponent, TaskListComponent],
  templateUrl: './important-task.component.html',
  styleUrl: './important-task.component.scss',
})
export class ImportantTaskComponent {
  newTask = '';
  taskList: any[] = [];
  // httpService = Inject(HttpService);

  // Inject HttpService via constructor
  constructor(private httpService: HttpService) {}
  // ngOnInit method to load all tasks initially
  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.httpService.getAllTasks().subscribe((result: any) => {
      this.taskList = result.filter((x: any) => x.important == true);
    });
  }
  onComplete(task: any) {
    task.completed = true;
    console.log('complete', task);
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    });
  }

  onImportant(task: any) {
    task.important = true;
    // console.log('Important', task);
    this.httpService.updateTask(task).subscribe(() => {
      this.getAllTasks();
    });
  }
}

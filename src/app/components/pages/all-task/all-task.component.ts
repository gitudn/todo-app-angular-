import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-all-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.scss',
})
export class AllTaskComponent {
  newTask = '';
  taskList: any[] = [];

  // Inject HttpService via constructor
  constructor(private httpService: HttpService) {}
  // ngOnInit method to load all tasks initially
  ngOnInit() {
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
}

// export class AllTaskComponent {
//   newTask = '';
//   httpService = Inject(HttpService);

//   addTask() {
//     console.log('addTask', this.newTask);
//     this.httpService.addTask(this.newTask).subscribe(() => {
//       console.log('added');
//     });
//   }
// }

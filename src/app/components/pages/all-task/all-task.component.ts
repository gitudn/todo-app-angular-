<<<<<<< HEAD
import { Component, Inject } from '@angular/core';
=======
import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
>>>>>>> 384b87976bdc7dcc8a6a75a4de259decead4f789
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-all-task',
  standalone: true,
<<<<<<< HEAD
  imports: [FormsModule],
=======
  imports: [FormsModule, DatePipe],
>>>>>>> 384b87976bdc7dcc8a6a75a4de259decead4f789
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.scss',
})
export class AllTaskComponent {
<<<<<<< HEAD
  newTask = '';
  taskList: any[] = [];

  // Inject HttpService via constructor
  constructor(private httpService: HttpService) {}
  // ngOnInit method to load all tasks initially
=======
  today = new Date();

  newTask = '';
  taskList: any[] = [];

  httpService = inject(HttpService);
>>>>>>> 384b87976bdc7dcc8a6a75a4de259decead4f789
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

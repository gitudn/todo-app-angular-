import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-completed-task',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './completed-task.component.html',
  styleUrl: './completed-task.component.scss',
})
export class CompletedTaskComponent {}

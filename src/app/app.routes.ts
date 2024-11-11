import { Routes } from '@angular/router';
import { AllTaskComponent } from './components/pages/all-task/all-task.component';
import { ImportantTaskComponent } from './components/pages/important-task/important-task.component';
import { CompletedTaskComponent } from './components/pages/completed-task/completed-task.component';

export const routes: Routes = [
  {
    path: '',
    component: AllTaskComponent,
  },
  {
    path: 'Important',
    component: ImportantTaskComponent,
  },
  {
    path: 'Completed',
    component: CompletedTaskComponent,
  },
];

import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { Injectable, inject } from '@angular/core';
=======
import { inject, Injectable } from '@angular/core';
>>>>>>> 384b87976bdc7dcc8a6a75a4de259decead4f789

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  httpClient = inject(HttpClient);
  constructor() {}

  addTask(task: string) {
    return this.httpClient.post('http://localhost:3000/tasks', {
      title: task,
    });
  }
<<<<<<< HEAD
=======

>>>>>>> 384b87976bdc7dcc8a6a75a4de259decead4f789
  getAllTasks() {
    return this.httpClient.get('http://localhost:3000/tasks');
  }
}

import { Component, EventEmitter, Inject, Output } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  ValueChangeEvent,
} from '@angular/forms';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private stateService: StateService) {}
  //stateService = Inject(StateService);""
  searchControl = new FormControl('');

  ngOnInit() {
    this.searchControl.valueChanges.subscribe((value) => {
      this.stateService.searchSubject.next(value || '');
    });
  }
}

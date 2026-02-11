import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.css']
})
export class WorkInProgressComponent {

  @Input() title: string = 'Work In Progress';
  @Input() message: string = 'We apologize for the inconvenience. This section is currently under development.';
}

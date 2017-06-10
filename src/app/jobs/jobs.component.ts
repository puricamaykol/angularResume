import { Component, Input } from '@angular/core';

@Component({
  selector: 'jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent{

  constructor() { }

  @Input() experiences: {};

}

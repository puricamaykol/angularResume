import { Component, Input } from '@angular/core';

@Component({
  selector: 'languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {

  constructor() { }

  @Input() languages: {}[];
  

}

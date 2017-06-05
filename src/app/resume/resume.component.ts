import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { JobsComponent } from '../jobs/jobs.component';
import { SkillsComponent } from '../skills/skills.component';
import { EducationComponent } from '../education/education.component';
import { LanguagesComponent } from '../languages/languages.component';
@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  constructor() { }

  tiles = [
	  { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
	  { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
	  { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
	  { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

}

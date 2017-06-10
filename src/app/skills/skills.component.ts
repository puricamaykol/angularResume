import { Component, Input } from '@angular/core';

@Component({
	selector: 'skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

	constructor() { }
	progressBar =  {
	  	color: 'primary',
		mode: 'determinate'
	};
  @Input() skills: { skill: string, level: number };
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor() { }
  _link: { title: string, url: string } = { title: "", url: "" }; 

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() description: string;
  @Input() email: string;
  @Input() phone: string;
  @Input() linkedin: string;
  @Input() github: string;
  @Input()
  set link(link: {title: string, url: string}) {
	  this._link.title = link.title;
	  this._link.url = link.url;
  }

}

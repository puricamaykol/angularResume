import { Component, Input } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { JobsComponent } from '../jobs/jobs.component';
import { SkillsComponent } from '../skills/skills.component';
import { EducationComponent } from '../education/education.component';
import { LanguagesComponent } from '../languages/languages.component';
import { IResume, IProfile, IEducation, ILanguages, ISkills, IJobs } from './resume.interface';
@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {


  public _yourResume: IResume = new IResume();

  public _profile: IProfile;
  public _education: IEducation;
  public _languages: ILanguages;
  public _skills: ISkills;
  public _jobs: IJobs;

  constructor() { }

  @Input()
  set yourResume(yourResume: IResume) {
    this._yourResume.profile = yourResume.profile;
    this._yourResume.education = yourResume.education;
    this._yourResume.languages = yourResume.languages;
    this._yourResume.skills = yourResume.skills;
    this._yourResume.jobs = yourResume.jobs;

  }
}



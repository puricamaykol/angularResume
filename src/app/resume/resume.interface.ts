export class IResume {
	profile: IProfile;
	education: IEducation;
	languages: ILanguages;
	skills: ISkills;
	jobs: IJobs;
};
/**
 * 
 */
export class IProfile {
	firstName: string;
	lastName: string;
	description: string;
	email: string;
	phone: string;
	linkedin: string;
	github: string;
	link: { title: string; url: string; };
}
/**
 * 
 */
export class IEducation {
	institute: string;
	degree: string;
	country: string;
	timeToComplete: string;
}[];

export class ILanguages {
	language: string;
	level: string;
}[];

export class ISkills {
	skill: string;
	level: number;
}[];

export class IJobs {
	company: string;
	position: string;
	remarkableAchievement: string;
}[];

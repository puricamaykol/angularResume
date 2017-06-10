
[Live Demo Here!](https://puricamaykol.github.io/angularResume/dist)

What's this about?
------------------

This Angular 4 app, features my résumé in material design. There's a component called resume: 

```javascript
    resumeObject = {
	  profile: {
		  firstName: "Maykol",
		  lastName: "Purica",
		  description: "Ingeniero de sistemas - Desarrollador de Soluciones de Software",
		  email: "puricamaykol@gmail.com",
		  phone: "+58 4242817702",
		  linkedin: "https://www.linkedin.com/in/maykolpurica/",
		  github: "https://github.com/puricamaykol?tab=repositories",
		  link: { title: "Obtener mi CV en PDF", 
		  url: "https://drive.google.com/open?id=0B3urn8O150VwbV9RLUNmYlUyb2M" },
	  },
	  education: [{
		  institute: "UNEXPO",
		  degree: "Ingeniero civil en informática (Ingeniero de sistemas)",
		  country: "Venezuela",
		  timeToComplete: "6 años",
	  }],
	  languages: [{
		  language: "Español",
		  level: "Nativo"
	  },
	  {
		  language: "Inglés",
		  level: "Avanzado Intermedio"
	  }],
	  skills: [
		  { skill: "Diseño de sistemas de información.", level: 100 },
		  ...
	  ],

	  jobs: [
		  { company: "Soluciones Integrales GIS (Septiembre 2016 - Actualidad)", position: "Desarrollador Web Full Stack.", remarkableAchievement: "Sistemas de geolocalización. Implementación de TDD." },
		  ...
	  ]
  };
```

```html
    <resume [yourResume]="resumeObject"></resume>
```

 Lets take a look inside <resume> component's template:

```html
    <md-toolbar color="primary">
  		<span>Mi hoja de vida</span>
	</md-toolbar>
<md-card>
	<profile
	 [firstName]="_yourResume.profile.firstName"
	 [lastName]="_yourResume.profile.lastName"
	 [description]="_yourResume.profile.description"
	 [email]="_yourResume.profile.email"
	 [phone]="_yourResume.profile.phone"
	 [linkedin]="_yourResume.profile.linkedin"
	 [github]="_yourResume.profile.github"
	 [link]="_yourResume.profile.link"
	 ></profile>
	<skills [skills]="_yourResume.skills"></skills>
	<education [experiences]="_yourResume.education"></education>
	<languages [languages]="_yourResume.languages"></languages>
	<jobs [experiences]="_yourResume.jobs"></jobs>
</md-card>
```

So as you can see, I've created a component for each section in my résumé. 

Just go around and take a look and check my github projects and linkedin,

The road ahead
--------------

 - ~~Parse all data from an Object Literal~~
 - Allow the readers to switch between English and Spanish
 - ~~Add Bar representing level of expertise to skills component~~ 
 - Add animations to section cards when they load 



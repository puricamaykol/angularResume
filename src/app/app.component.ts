import { Component } from '@angular/core';
import { ResumeComponent } from './resume/resume.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
			  url: "https://drive.google.com/open?id=0B3urn8O150VwTTUtcDdmUzBtem8"
		  },
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
		  { skill: "Diseño y normalización de Bases de datos.", level: 100 },
		  { skill: "Programación orientada a objetos.", level: 90 },
		  { skill: "Patrones de diseño de software.", level: 100 },
		  { skill: "Arquitectura de Software", level: 80 },
		  { skill: "Principios SOLID.", level: 70 },
		  { skill: "Desarrollo orientado a pruebas.", level: 100 },
		  { skill: "PHP", level: 100 },
		  { skill: "Laravel 5", level: 75 },
		  { skill: "Web Services API REST API JSON.", level: 100 },
		  { skill: "Uso de Redis y Memcached como motor de caché.", level: 75 },
		  { skill: "Bases de datos: MySQL, PostgreSQL.", level: 75 },
		  { skill: "JavaScript, Jquery, AJAX.", level: 100 },
		  { skill: "AngularJs (directivas/componentes)", level: 75 },
		  { skill: "Angular 4 ",level: 70 },
		  { skill: "Polymer ", level: 100 },
		  { skill: "NodeJs,  NPM, Bower,Gulp.", level: 100 },
		  { skill: "Aplicaciones móviles empaquetadas/híbridas: Ionic Framework.", level: 100 },
		  { skill: "GIT y SVN: integraciones, resolución de conflictos.", level: 100 },
		  { skill: "Proactividad.", level: 80 },
		  { skill: "Autodidacta. Disponibilidad para aprender nuevas cosas y emprender retos.", level: 100 },
		  { skill: "CSS", level: 70 }
	  ],

	  jobs: [
		  { company: "Soluciones Integrales GIS (Septiembre 2016 - Actualidad)", position: "Desarrollador Web Full Stack.", remarkableAchievement: "Sistemas de geolocalización. Implementación de TDD." },
		  { company: "Soluciones AST (Febrero 2015 – Septiembre 2016)", position: "Desarrollador Web y Móvil. Líder de proyectos", remarkableAchievement: "Desarrollo del Sistema de Gestión y App de pagos de RouteEnjoy (Servicios de seguridad). Implementación de una arquitectura basada en la Hexagonal para desacoplar la lógica de negocio de los desarrollos." },
		  { company: "Consultores Micorp. (Noviembre 2014 - Febrero 2015)", position: "Desarrollador Web Full Stack", remarkableAchievement: "Sistema de Cotizaciones de la empresa PDVSA" },
		  { company: "IT Media Comtech C.A. (Julio 2014 - Noviembre 2014)", position: "Desarrollador Web", remarkableAchievement: "Sistema de registro de Instituo Nacional de Hipismo" },
		  { company: "Prácticas Universitarias (Febrero 2014- Julio 2014)", position: "Desarrollador Web", remarkableAchievement: "Sistema de Tickets / Workbench" },
		  { company: "Corporación KCP S.A (Julio 2013 - Octubre 2013)", position: "Desarrollador Web", remarkableAchievement: "Intranet Corporativa" },
		  { company: "Trabajo Freelancer Empresa Ventas Center Point (Junio 2012 - Diciembre 2012)", position: " Desarrollador Web", remarkableAchievement: "Sistema de validación de pagos." }

	  ]
  };
}

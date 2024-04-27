import { Component } from '@angular/core';

@Component({
  selector: 'app-service-practice',
  templateUrl: './service-practice.component.html',
  styleUrl: './service-practice.component.css'
})
export class ServicePracticeComponent {

  studentData=[

      {name:'ravi kumar',age:23,gender:'male'},
      {name:'ram kumar',age:24,gender:'male'},
      {name:'neha kumari',age:34,gender:'female'}
    

  ]

}

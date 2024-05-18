import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  emp_details=[

     {
        sr_number:1,
        first_name:'ravi',
        middle_name:'kumar',
        last_name:'lodhi',
        emp_id:9991990,
        designation:'QA',

     },


     {
      sr_number:2,
      first_name:'ram',
      middle_name:'kumar',
      last_name:'lodhi',
      emp_id:9991991,
      designation:'System engineer',

   },

   {
    sr_number:3,
    first_name:'Anil ',
    middle_name:'kumar',
    last_name:'Gangwar',
    emp_id:9991992,
    designation:'Frontend Developer',

 },

 {
  sr_number:4,
  first_name:'Sunil ',
  middle_name:'kumar',
  last_name:'Singh',
  emp_id:9991993,
  designation:'Backend Developer',

},

{
  sr_number:5,
  first_name:'Satyma ',
  middle_name:'kumar',
  last_name:'Baghel',
  emp_id:9991995,
  designation:'Networking',

}


  ]

}

import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  Name:'';
  surname:'';
  age:'';
  date:'';

  
  pages =[
    {name:'view',page:'view'},
    {name:'event',page:'event'}
    
   ];


  constructor(private route:ActivatedRoute){}

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.Name=params['Name'];
      this.surname=params['surname'];
      this.age=params['age'];
      this.date=params['date'];
      
      console.log(this.Name);
      console.log(this.surname);
      console.log(this.age);
      console.log(this.date);
      
      });
      }
    }
 
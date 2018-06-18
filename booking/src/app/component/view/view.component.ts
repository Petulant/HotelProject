import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  Name:'';
  surname:'';
  age:'';
  date:'';

  constructor(private route:ActivatedRoute) { }

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

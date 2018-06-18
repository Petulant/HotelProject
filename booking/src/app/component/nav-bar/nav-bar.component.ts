import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

     @Input() name;
     @Input() page;

  @Input() Name;
  @Input() surname;
  @Input() age;
  @Input() date;

     
  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigator(){
  if (this.name==='event'){
      this.router.navigate(['details/event']);
      
      
  }else if(this.name==='view'){
        //this.router.navigate(['details/view']);
        this.router.navigate(['details/view'],{queryParams:{Name:this.Name,surname:this.surname,age:this.age,date:this.date}});
      }
      

  }
  

  }




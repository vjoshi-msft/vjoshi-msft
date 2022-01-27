import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countfive',
  templateUrl: './countfive.component.html',
  styleUrls: ['./countfive.component.css']
})
export class CountfiveComponent implements OnInit {
  name="";
  users=['Vinu','RKO',"RAJ"];
  sharks=[{
    name:"",
    age:0
  }];

  age:number;
  constructor() { 
    this.name="";
    this.age=0;
  }
  sharksAdd(name:string,age:string){
    let x=parseInt(age);
    let shark={name:name,age:x};
    this.sharks.push(shark);
  }
 display(name:string,val:string){
   this.name=name;
   let x=parseInt(val);
   this.age=x;
 }

  ngOnInit(): void {
  }

}

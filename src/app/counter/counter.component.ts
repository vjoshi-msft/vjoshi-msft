import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  countval=0;
  Increment(){
    this.countval++;
    console.log(this.countval);

  }
  Decrement(){
    this.countval--;

  }
  constructor() { }

  ngOnInit(): void {
  }

}

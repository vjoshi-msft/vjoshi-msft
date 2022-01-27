import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vinayak App';
  displayval="";
  tasks:any[]=[];


  userdetails=[{
    name:"John",
    age:40
  },
{
  name:"Paul",
  age:50
},
{
  name:"Shawn",age:60
}]

  getValue(val:string){
    this.displayval=val;
  }

  getNames(){
    return 5+6==11;

  }

  Submit(name:string){
    console.log(name);


  }

  DisplayMessage(val:string){
    this.displayval=val;
  }
  wwe(){
    return false;
  }

    addItem(item:string)
    {
      this.tasks.push({id:this.tasks.length,name:item});

    }
    removeItem(name:string){
      this.tasks= this.tasks.filter(item=>item.name!=name)
    }

    logindisplay(item:any)
    {
      console.warn(item);

    }

}

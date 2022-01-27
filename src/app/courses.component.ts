import { Component } from "@angular/core";
import { CourseService } from "./courses.service";

@Component({
    selector:"courses",
    template:`
    <h1>Vinayak angular Course</h1>
     <ul>
      <li *ngFor="let x of courses">
        {{x}}   
    </li>
    </ul>
    
    `,


})

export class CoursesCompnent{
    title="My courses";
    courses;

    constructor(){
        let courseservice=new CourseService();
        this.courses=courseservice.getCourse();

    }
}
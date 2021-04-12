import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private service:CourseService) { }

  cos:any=[]
  courses1=[]
  length:boolean=false

  ngOnInit(): void {
    this.getAllCourses()
  }

  getAllCourses(){
    this.service.getAllCourses().subscribe(data =>{
      this.cos=data
      if(data.length<=0){
        this.length=true
      }
      
    },
    error=>{
      console.log(error)
    }
    )
  }

  courses=[
    {'id':1, 'name':'Angular','desc':'rb hwbchwc jhcw cjhbcw cbc ccwb cjh','image':'assets/OIP (3).jpg'},
    {'id':2, 'name':'React','desc':'rb hwbchwc jhcw cjhbcw cbc ccwb cjh','image':'assets/OIP (3).jpg'},
    {'id':3, 'name':'Viw','desc':'rb hwbchwc jhcw cjhbcw cbc ccwb cjh','image':'assets/OIP (3).jpg'},
    {'id':4, 'name':'Django','desc':'rb hwbchwc jhcw cjhbcw cbc ccwb cjh','image':'assets/OIP (3).jpg'}

  ]
}

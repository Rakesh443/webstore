import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl = 'http://localhost:8000/'
  httpHeader = new HttpHeaders({'Content-type' : 'application/json'})
  constructor(private http: HttpClient) { }

  getAllCourses():Observable<any>{
   return this.http.get(this.baseUrl+'courses',{headers:this.httpHeader})
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getDataAPIURL: string='https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }
  getdata(b: number){
   this.http.get(this.getDataAPIURL).pipe();
   if (b<2){
    console.log("number is neither prime nor composite");
   }
   for(let i=2; i<b; i++){
    if (b%i===0){
       console.log("Number is not prime");
    }
   }
  
    console.log('Number is prime');
  }

  firstApiCall() {
  return  this.http.get(this.getDataAPIURL)
    .pipe()
  }
}
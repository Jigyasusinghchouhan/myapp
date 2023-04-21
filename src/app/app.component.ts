import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from './model/employee'
import { Emp } from './model/emp'
import { Notifications } from './model/notifications'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';
  notificationType = Notifications;
  employeeList!: any;
  showNotificationContent: any;
  constructor() { }
  showTable: boolean = false;
  ngOnInit() {
      this.employeeList = [
        {age: 1, DOB: new Date(), dep: 'red', name: 'jayant', contact: 123456789, address: 'MIT'},
        {age: 2, DOB: new Date(), dep: 'green', name: 'jayant', contact: 123456789, address: 'MIT'},
        {age: 3, DOB: new Date(), dep: 'blue', name: 'jayant', contact: 123456789, address: 'MIT'}
      ];
      const orignalData = this.employeeList
    console.log('Before changes', orignalData)

  }
 
  
}

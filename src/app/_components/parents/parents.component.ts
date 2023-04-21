import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {
  @ViewChild(ChildComponent) childComponent: ChildComponent | undefined
  property: any[] = [];
  ChildData: any;
  constructor(private service : EmployeeService) { }
  xyzProperty: any[]= [];
  ngOnInit(): void {
    this.service.firstApiCall().subscribe(
      (res:any)=> {
        console.log(res);
      },(error:any)=>{
        console.log('error',error);
      }
    )
    
    this.childComponent?.passGiftToParent();
    this.property = [
      {cost: 1, name: 'House'},
      {cost: 2, name: 'Land'},
      {cost: 3,  name: 'Car'}
    ];
    this.xyzProperty = [
      {cost: 1, name: 'xyz'},
      {cost: 2, name: 'abc'},
      {cost: 3,  name: 'mnp'}
    ];
  }
  dataFromChild(data: any) {
    this.ChildData =  data
    console.log(data);
  }
}
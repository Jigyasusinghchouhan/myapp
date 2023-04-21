import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() propFromDad: any;
@Output() gift: EventEmitter<any> = new EventEmitter()
  ngOnInit() {
      console.log(this.propFromDad);
      
  }

  passGiftToParent() {
    this.gift.emit('gift from child');
  }
  

}

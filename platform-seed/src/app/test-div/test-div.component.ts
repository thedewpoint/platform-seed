import { Component, OnInit } from '@angular/core';
import { IntlComponent } from '../toggle-component';
@IntlComponent({
  toggles:["test-div"]
})
@Component({
  selector: 'test-div',
  templateUrl: './test-div.component.html',
  styleUrls: ['./test-div.component.css']
})
export class TestDivComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

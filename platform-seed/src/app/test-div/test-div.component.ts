import { Component, OnInit } from '@angular/core';
import { Feature } from '../toggle.decorator';
@Feature({
  toggles:["testToggle"]
})
@Component({
  selector: 'test-div',
  templateUrl: './test-div.component.html',
  styleUrls: ['./test-div.component.css']
})
export class TestDivComponent implements OnInit {

  testToggle;
  constructor() { }

  ngOnInit() {
  }

}

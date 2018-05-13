import { Component, OnInit, Inject } from '@angular/core';
import {Toggle} from '../gatekeeper/toggle.decorator';
import { Config } from '../config/config.decorator';

@Component({
  selector: 'test-div',
  templateUrl: './test-div.component.html',
  styleUrls: ['./test-div.component.css']
})
export class TestDivComponent implements OnInit {
  @Toggle()
  testToggle;

  @Config()
  dropDowns;
  
  constructor() {}
  ngOnInit() {}

}

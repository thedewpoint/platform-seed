import { Component, OnInit, Inject } from '@angular/core';
import { Feature } from '../gatekeeper/toggle.decorator';
import { REQUEST } from '@nguniversal/express-engine/tokens';

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
  constructor( ) {
    // console.log("countrycode", req.countryCode);
   }

  ngOnInit() {
  }

}

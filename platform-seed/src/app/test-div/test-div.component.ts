import { Component, OnInit, Inject } from '@angular/core';
import { Feature } from '../gatekeeper/toggle.decorator';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { ConfigService } from '../config/config.service';
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
  dropDowns;
  constructor(private _configService: ConfigService ) {
   }

  ngOnInit() {
    this._configService.getConfig().subscribe(config=>{
      this.dropDowns = config.dropDowns;
    });
  }

}

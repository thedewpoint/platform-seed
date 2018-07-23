import { Component, OnInit, Inject } from '@angular/core';
import {Toggle} from '../gatekeeper/toggle.decorator';
import { Config } from '../config/config.decorator';
import {WeatherService} from '../weather/weather.service';
import {WeatherTestModel} from 'weather';
import { Angulartics2 } from 'angulartics2';

@Component({
  selector: 'test-div',
  templateUrl: './test-div.component.html',
  styleUrls: ['./test-div.component.css']
})
export class TestDivComponent implements OnInit {
  @Toggle('${countryCode}.showHumidity')
  showHumidity;
 @Config()
  locationCode;

  weather;
  constructor(private _weatherService: WeatherService, private angulartics2: Angulartics2) {}
  ngOnInit() {
    let test: WeatherTestModel;
    this._weatherService.getWeather(this.locationCode).subscribe((weather)=>{
      this.weather = weather;
    });
    
    this.angulartics2.pageTrack.next({ path: '/your-path/' });
  }
}

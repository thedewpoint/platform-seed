import { Component, OnInit, Inject } from '@angular/core';
import {Toggle} from '../gatekeeper/toggle.decorator';
import { Config } from '../config/config.decorator';
import {WeatherService} from '../weather/weather.service';
@Component({
  selector: 'test-div',
  templateUrl: './test-div.component.html',
  styleUrls: ['./test-div.component.css']
})
export class TestDivComponent implements OnInit {
  @Toggle()
  testToggle;

  @Config()
  locationCode;
  
  weather;
  
  constructor(private _weatherService: WeatherService) {}
  ngOnInit() {
    this._weatherService.getWeather(this.locationCode).subscribe((weather)=>{
      console.log("weather data", weather);
      this.weather = weather;
    });
  }

}

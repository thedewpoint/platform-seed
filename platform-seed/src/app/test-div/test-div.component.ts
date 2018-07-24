import { Component, OnInit, Inject , ViewChild, ComponentFactoryResolver} from '@angular/core';
import {Toggle} from '../gatekeeper/toggle.decorator';
import { Config } from '../config/config.decorator';
import {WeatherService} from '../weather/weather.service';
import {WeatherTestModel} from 'weather';
import { Angulartics2 } from 'angulartics2';
import { CompHostDirective } from '../comp-host.directive';

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
  @ViewChild(CompHostDirective) compHost: CompHostDirective;

  weather;
  constructor(private _weatherService: WeatherService,
    private angulartics2: Angulartics2, private componentFactoryResolver: ComponentFactoryResolver) {

  }
  // https://angular.io/guide/dynamic-component-loader
  ngOnInit() {
    this.loadComponent();
    this._weatherService.getWeather(this.locationCode).subscribe((weather) => {
      this.weather = weather;
    });
    this.angulartics2.pageTrack.next({ path: '/your-path/' });
  }
  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

  }
}

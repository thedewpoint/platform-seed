import { DomSanitizer } from '@angular/platform-browser';
import { NgModule, Inject, PLATFORM_ID, APP_ID, Component, OnInit, Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {Config} from './config/config.decorator';
import { Angulartics2AdobeAnalytics } from 'angulartics2/adobeanalytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnInit {
  title = 'app';
  cssUrl;
  platform;
  @Config()
  countryCode: string;
  constructor(
    private angulartics2adobe: Angulartics2AdobeAnalytics,
    public sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
    this.platform = platformId;
  }
  ngOnInit () {
    this.cssUrl = `./${this.countryCode}.css`;
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, PLATFORM_ID, APP_ID, Component, Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {GatekeeperService} from './gatekeeper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'app';
  platform;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
    this.platform = platformId;
  }
}

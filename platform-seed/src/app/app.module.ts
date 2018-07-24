import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule, Injector} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InjectorModule } from './injector/injector.module';
import {GatekeeperService} from './gatekeeper/gatekeeper.service';
import {ConfigService} from './config/config.service';
import {WeatherService} from './weather/weather.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TestDivComponent } from './test-div/test-div.component';
import {MatButtonModule, MatCheckboxModule, MatCardModule} from '@angular/material';
import { WeatherModule } from 'weather';
import { Angulartics2RouterlessModule } from 'angulartics2/routerlessmodule';
import { Angulartics2AdobeAnalytics } from 'angulartics2/adobeanalytics';
import {Location} from '@angular/common';
import {RouterModule} from '@angular/router';
import { CompHostDirective } from './comp-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestDivComponent,
    CompHostDirective
  ],
  imports: [
  BrowserModule.withServerTransition({ appId: 'platform-seed' }),
    BrowserTransferStateModule,
    InjectorModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    WeatherModule,
    Angulartics2RouterlessModule.forRoot([Angulartics2AdobeAnalytics]),
    RouterModule.forRoot([])
  ],
  providers: [GatekeeperService, ConfigService, WeatherService, Location],
  bootstrap: [AppComponent]
})
export class AppModule {
  static injector: Injector;
  constructor(injector: Injector) {
    InjectorModule.injector = injector;
  }
}

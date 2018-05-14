import { BrowserModule,BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule, Injector} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InjectorModule } from './injector/injector.module';
import {GatekeeperService} from './gatekeeper/gatekeeper.service';
import {ConfigService} from './config/config.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TestDivComponent } from './test-div/test-div.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    TestDivComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'platform-seed' }),
    BrowserTransferStateModule,
    InjectorModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [GatekeeperService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
  static injector: Injector;
  
  constructor(injector: Injector) {
    InjectorModule.injector = injector;
  }
}

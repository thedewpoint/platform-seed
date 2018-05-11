import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InjectorModule } from './injector/injector.module';
import {GatekeeperService} from './gatekeeper.service';
import { TestDivComponent } from './test-div/test-div.component';


@NgModule({
  declarations: [
    AppComponent,
    TestDivComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'platform-seed' }),
    InjectorModule,
    HttpClientModule,
  ],
  providers: [GatekeeperService],
  bootstrap: [AppComponent]
})
export class AppModule {
  static injector: Injector;
  
  constructor(injector: Injector) {
    InjectorModule.injector = injector;
  }
}

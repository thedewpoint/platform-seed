import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class InjectorModule { 
  static injector: Injector;
  constructor(injector: Injector) {
    InjectorModule.injector = injector;
  }
}

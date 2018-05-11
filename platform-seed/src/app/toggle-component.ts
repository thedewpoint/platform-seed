import {Component} from '@angular/core';
import {GatekeeperService} from './gatekeeper.service';
import {TypeDecorator} from '@angular/core';
import {InjectorModule} from './injector/injector.module';


export function IntlComponent( properties: any): Function {
  return (constructor)=>{
    const original = constructor.prototype.ngOnInit;
      constructor.prototype.ngOnInit = function(args) {
          const gateKeeperService = InjectorModule.injector.get(GatekeeperService);
          gateKeeperService.isToggled("test-toggle").subscribe(isToggled=>{
            console.log("wow you got a toggle " + isToggled);
            constructor.prototype.toggled = isToggled;
          });
          if (original) {
            original.apply(this, args);
          }
      }
      // const gatekeeperService = InjectorModule.injector.get(GatekeeperService);

  }
    // try {
    //   console.log("inside intl component");
    //   console.log(InjectorModule.injector);
    //   const gatekeeperService = InjectorModule.injector.get(GatekeeperService);

    //     console.log(gatekeeperService);
    //   } catch (err) {
    //     console.warn(err)
    //   }

    // return Component( properties );
  }

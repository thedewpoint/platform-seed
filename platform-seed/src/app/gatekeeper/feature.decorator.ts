// import {Component} from '@angular/core';
// import {GatekeeperService} from './gatekeeper.service';
// import {TypeDecorator} from '@angular/core';
// import {InjectorModule} from '../injector/injector.module';


// export function Feature( properties: any): Function {
//   return (constructor)=>{
//     const original = constructor.prototype.ngOnInit;
//       constructor.prototype.ngOnInit = function(args) {
//           const gateKeeperService = InjectorModule.injector.get(GatekeeperService);
//           gateKeeperService.isToggled(properties.toggles).subscribe(toggles=>{
//             toggles.forEach(toggle => {
//               constructor.prototype[toggle.name] = toggle.toggled;
//             });
//           });
//           if (original) {
//             original.apply(this, args);
//           }
//       }
//   }
//   }

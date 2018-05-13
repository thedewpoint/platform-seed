import { GatekeeperService } from './gatekeeper.service';
import { InjectorModule } from '../injector/injector.module';


export function Toggle(toggleName?: string): Function {
  return (target: any, key: string) => {
    const original = target.ngOnInit;
    target.ngOnInit = function (args) {
      const gateKeeperService = InjectorModule.injector.get(GatekeeperService);
      gateKeeperService.isToggled(toggleName ? toggleName : key).subscribe(toggles => {
        toggles.forEach(toggle => {
          target[key] = toggle.toggled;
        });
      });
      if (original) {
        original.apply(this, args);
      }
    }
  }
}


import { ConfigService } from './config.service';
import { InjectorModule } from '../injector/injector.module';


export function Config(configName?: string): Function {
  return (target: any, key: string) => {
    const original = target.ngOnInit;
    target.ngOnInit = function (args) {
      const configService = InjectorModule.injector.get(ConfigService);
      configService.getConfig().subscribe(config => {
        if(configName) {
          target[key] = config[configName];
        } else {
          target[key] = config[key];
        }
        if (original) {
          original.apply(this, args);
        }
      });
     
    }
  }
}


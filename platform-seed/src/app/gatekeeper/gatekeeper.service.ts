import { Injectable, Injector, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import {HttpClient, HttpParams} from "@angular/common/http";
import { makeStateKey, TransferState } from '@angular/platform-browser';
import {Toggle} from './toggle'
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import "rxjs/add/operator/map";
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/do';


export interface FeatureToggle {
  name: string,
  toggled: boolean
}

@Injectable()
export class GatekeeperService {
  BASE_URL = "/gatekeeper/";
  constructor(@Inject(PLATFORM_ID) private _platformId, private _http:HttpClient, private _transferState: TransferState, private _injector: Injector) { 
    if(isPlatformServer(_platformId)) {
      let req = _injector.get(REQUEST);
      this.BASE_URL = `${req.protocol}://${req.headers.host}${this.BASE_URL}`;
    }
  }

  public isToggled (toggleNames: string | string[]): Observable<FeatureToggle[]>{
    if(!Array.isArray(toggleNames)) {
      toggleNames = [toggleNames];
    }
   let toggleRequests = toggleNames.map(toggle =>{
    const RESULT_KEY = makeStateKey<FeatureToggle>(toggle);
    const found = this._transferState.hasKey(RESULT_KEY);
    if(found) {
     return Observable.of(this._transferState.get<FeatureToggle>(RESULT_KEY,null));
    } else {
      return this._http.get<Toggle[]>(`${this.BASE_URL}${toggle}`)
      .map(toggle=>{
          const {toggled, name} = toggle[0];
          const returnObj = {toggled, name};
          this._transferState.set(RESULT_KEY, returnObj);
          return returnObj;
      });
    }
    });
    return Observable.forkJoin(toggleRequests);
  }

}

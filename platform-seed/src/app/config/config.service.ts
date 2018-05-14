import { Injectable, Injector, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import {HttpClient, HttpParams} from "@angular/common/http";
import { makeStateKey, TransferState } from '@angular/platform-browser';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/do';


@Injectable()
export class ConfigService {
  BASE_URL: string = "http://weathergermany.local:4000/config";
  static config;
  constructor( @Inject(PLATFORM_ID) private _platformId, private _http:HttpClient, private _transferState: TransferState, private _injector: Injector) {
    if(isPlatformServer(_platformId)) {
      let req = _injector.get(REQUEST);
      this.BASE_URL = `${req.protocol}://${req.headers.host}${this.BASE_URL}`;
    }
  }
  getConfig(){
    const RESULT_KEY = makeStateKey<any>("config");
    if(this._transferState.hasKey(RESULT_KEY)) {
      return Observable.of(this._transferState.get<any>(RESULT_KEY,null));
    } else {
      return this._http.get<any>(this.BASE_URL)
      .do(config=> {
        this._transferState.set(RESULT_KEY, config);
      });
    }
  }
}

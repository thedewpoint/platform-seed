
import {of as observableOf, Observable} from 'rxjs';

import {tap} from 'rxjs/operators';
import { Injectable, Injector, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import {HttpClient, HttpParams} from "@angular/common/http";
import { makeStateKey, TransferState } from '@angular/platform-browser';

import "rxjs/add/operator/map";



@Injectable()
export class ConfigService {
  BASE_URL: string = "/config";
  constructor( @Inject(PLATFORM_ID) private _platformId, private _http:HttpClient, private _transferState: TransferState, private _injector: Injector) {
    if(isPlatformServer(_platformId)) {
      let req = _injector.get(REQUEST);
      this.BASE_URL = `${req.protocol}://${req.headers.host}${this.BASE_URL}`;
    }
  }
  getConfig(){
    const RESULT_KEY = makeStateKey<any>("config");
    if(this._transferState.hasKey(RESULT_KEY)) {
      return observableOf(this._transferState.get<any>(RESULT_KEY,null));
    } else {
      return this._http.get<any>(this.BASE_URL).pipe(
      tap(config=> {
        this._transferState.set(RESULT_KEY, config);
      }));
    }
  }
}

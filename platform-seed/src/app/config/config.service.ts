import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { makeStateKey, TransferState } from '@angular/platform-browser';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/do';


@Injectable()
export class ConfigService {
  BASE_URL = "/config";
  constructor(private _http:HttpClient, private _transferState: TransferState) {}
  getConfig(){
    const RESULT_KEY = makeStateKey<any>("config");
    console.log("key found", this._transferState.hasKey(RESULT_KEY));

    if(this._transferState.hasKey(RESULT_KEY)) {
      console.log("key found", this._transferState.hasKey(RESULT_KEY));
      return Observable.of(this._transferState.get<any>(RESULT_KEY,null));
    } else {
      return this._http.get<any>(this.BASE_URL)
      .do(config=> {
        this._transferState.set(RESULT_KEY, config);
        console.log("key found", this._transferState.hasKey(RESULT_KEY));
      });
    }
  }
}

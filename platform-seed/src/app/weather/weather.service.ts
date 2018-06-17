import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { makeStateKey, TransferState } from '@angular/platform-browser';
import {Observable} from "rxjs";
import {Weather} from './weather';

import "rxjs/add/operator/map";


@Injectable()
export class WeatherService {
  private BASE_URL = "/weather/"
  constructor(private _http: HttpClient, private _transferState: TransferState) { }
  getWeather(locationCode: string): Observable<Weather>{
    console.log("calling weather service with location code " + locationCode);
    return this._http.get<Weather>(`${this.BASE_URL}${locationCode}`);
  }

}

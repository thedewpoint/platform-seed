import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { makeStateKey, TransferState } from '@angular/platform-browser';
import {Observable} from "rxjs/Observable";
import {Weather} from './weather';
import 'rxjs/add/observable/of';
import "rxjs/add/operator/map";
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/do';
@Injectable()
export class WeatherService {
  private BASE_URL = "/weather/"
  constructor(private _http: HttpClient, private _transferState: TransferState) { }
  getWeather(locationCode: string): Observable<Weather>{
    console.log("calling weather service with code " + locationCode);
    return this._http.get<Weather>(`${this.BASE_URL}${locationCode}`);
  }

}

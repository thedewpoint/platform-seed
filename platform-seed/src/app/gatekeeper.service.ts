import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import 'rxjs/add/observable/forkJoin';


@Injectable()
export class GatekeeperService {
  BASE_URL = "http://localhost:1337/toggle";
  constructor(private _http:HttpClient) { }

  public isToggled (toggleNames: string | string[]): Observable<any>{
    if(!Array.isArray(toggleNames)) {
      toggleNames = [toggleNames];
    }
   let toggleRequests = toggleNames.map(toggle =>{
    const params = new HttpParams({
      fromObject: {
        name: toggle
      }
    });
      return this._http.get<any>(this.BASE_URL, {params})
      .map(toggle=>{
          const {toggled, name} = toggle[0];
          return {toggled, name};
      });
    });
    return Observable.forkJoin(toggleRequests);
  }

}

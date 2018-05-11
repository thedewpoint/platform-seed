import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import 'rxjs/add/observable/forkJoin';


@Injectable()
export class GatekeeperService {

  constructor(private _http:HttpClient) { }

  public isToggled (toggleName: string | string[]): Observable<boolean>{
    return this._http.get<any[]>("http://localhost:1337/toggle")
    .map((res:any[])=>{
      let found = res.find((toggle)=>{
        return toggle.name === toggleName && toggle.toggled;
      });
      return !!found;
    });
  }

}

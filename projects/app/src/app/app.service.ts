import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilities } from 'projects/mtl/d3/src/lib/utilities';
import { Observable } from 'rxjs';

import { map, catchError, share, debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }

  getData(): Observable<any> {
    //http://18.191.100.112:30067/matilda/application/topology?applicationId=5zC0R6ma5bdgAxihqHElCr98zBjhjy
    return this._http.get('http://18.191.100.112:30067/matilda/cmdb/topology/service?assetId=n6nSeWfL5vLptKXbweAi97viQc4Nyw')
    .pipe(map((data: any) => Utilities._mapData([data])));
  }
}

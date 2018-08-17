import { Injectable } from '@angular/core';
import { Stiri } from '../shared/stiri';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

@Injectable()
export class StiriService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  submitStiri(stire: Stiri): Observable<Stiri> {
  	return this.http.post(baseURL + 'stiri', stire)
  	.catch(error => {return this.processHTTPMsgService.handleError(error);});
  }
  getStiri(): Observable<Stiri[]> {
  	return this.http.get(baseURL + 'stiri')
  	.catch(error => { return this.processHTTPMsgService.handleError(error);});
  }

}

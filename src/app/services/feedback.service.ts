import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

@Injectable()
export class FeedbackService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  submitFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post(baseURL + 'feedback', feedback)
    .catch(error => { return this.processHTTPMsgService.handleError(error); });

  }

  getFeedback(): Observable<Feedback[]> {
    return this.http.get(baseURL + 'feedback')
    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }
}
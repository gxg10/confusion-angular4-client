import { Component, OnInit} from '@angular/core';
import { FeedbackService } from '../services/feedback.service';
import { Feedback, ContactType } from '../shared/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

	feedback : Feedback[];

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
  this.feedbackService.getFeedback()
  .subscribe(feedback => this.feedback = feedback);
  }



}

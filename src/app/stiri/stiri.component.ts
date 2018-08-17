import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StiriService } from '../services/stiri.service';

import { Stiri } from '../shared/stiri';

@Component({
  selector: 'app-stiri',
  templateUrl: './stiri.component.html',
  styleUrls: ['./stiri.component.scss']
})
export class StiriComponent implements OnInit {

	@ViewChild('modstiri') feedbackFormDirective;
	stiri : FormGroup;
	stire: Stiri;
	submitted= null;
	showForm = true;

  constructor(private fb: FormBuilder,
  private stiriservice: StiriService) { }

  ngOnInit() {
  this.createForm();
  }

 createForm() {
 	this.stiri = this.fb.group({
		titlu: '',
  		continut: ''
 	});

 }

  onSubmit() {
  	this.stire = this.stiri.value;
  	console.log(this.stire);
  	this.showForm = false;
  	this.stiriservice.submitStiri(this.stire)
  		.subscribe(stire =>{
  			this.submitted = stire;
  			this.stire = null;
  	},  error => console.log(error.status, error.message));
  	this.stiri.reset({
  		titlu: '',
  		continut: ''
  	});
  	this.feedbackFormDirective.resetForm();
  }

}

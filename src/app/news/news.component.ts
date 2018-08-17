import { Component, OnInit } from '@angular/core';
import { Stiri } from '../shared/stiri';
import { StiriService } from '../services/stiri.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

	stiri: Stiri[];
	
  constructor(private stiriService: StiriService) { }

  ngOnInit() {
  this.stiriService.getStiri()
  .subscribe(stiri=> this.stiri = stiri);
  }

}

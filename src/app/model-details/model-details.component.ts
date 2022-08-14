import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-details',
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.scss']
})
export class ModelDetailsComponent implements OnInit {
rateValue:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}

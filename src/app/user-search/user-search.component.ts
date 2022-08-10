import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
  modelkeyWord:any;
  constructor(private activatedroute:ActivatedRoute) {
    // get active url params
    this.activatedroute.paramMap.subscribe((params:ParamMap)=>
    {

      this.modelkeyWord=params.get('keyword');

      // this.getModelById(this.modelkeyWord)

    })
  }

  ngOnInit(): void {
  }
}

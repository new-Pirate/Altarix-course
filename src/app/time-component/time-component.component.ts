import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-component',
  templateUrl: './time-component.component.html',
  styleUrls: ['./time-component.component.less']
})
export class TimeComponentComponent implements OnInit {

  arrTimeZone: Date[] = [new Date(2012, 1, 20, 3, 12), new Date(), new Date(2012, 0, 3), new Date(), new Date()];

}

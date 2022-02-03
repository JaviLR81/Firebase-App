import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar-graph',
  templateUrl: './horizontal-bar-graph.component.html',
  styleUrls: ['./horizontal-bar-graph.component.css']
})
export class HorizontalBarGraphComponent  {

  results: any[] = [
      {
        "name": "Game 1",
        "value": 8940000
      },
      {
        "name": "Game 2",
        "value": 5000000
      },
      {
        "name": "Game 3",
        "value": 7200000
      },
      {
        "name": "Game 4",
        "value": 433000
      }
  ];



  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = 'nightLights';

  constructor() {}

  onSelect(event: any) {
    console.log(event);
  }


}

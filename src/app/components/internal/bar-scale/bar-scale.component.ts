import { AfterContentInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-scale',
  templateUrl: './bar-scale.component.html',
  styleUrls: ['./bar-scale.component.scss']
})
export class BarScaleComponent implements AfterContentInit {
  @Input() ranges!: BarScaleRange[];
  @Input() value!: number;
  markerPos!: number;

  totalWidths = 0;


  constructor() { }

  ngAfterContentInit(): void {
    for (const range of this.ranges) {
      this.totalWidths += range.width;
    }

    this.markerPos = this.calculateMarkerPos();
  }
  calculateMarkerPos(): number {
    let v = this.value; //short for value
    if (!v) return 0;
    
    if (v < this.ranges[0].low) return 0;

    let widthSum = 0;
    for (const range of this.ranges) {
      if (v > range.high) {
        widthSum += range.width;
        continue;
      }
      return widthSum + (v - range.low) / (range.high - range.low) * range.width;
    }
    return widthSum;
  }
}

export type BarScaleRange = {
  low: number;
  high: number;
  width: number;
  color: string;
  nameString?: string;
  rangeString?: string
}
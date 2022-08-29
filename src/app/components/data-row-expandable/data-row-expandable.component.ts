import { Component, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-data-row-expandable',
  templateUrl: './data-row-expandable.component.html',
  styleUrls: ['./data-row-expandable.component.scss']
})
export class DataRowExpandableComponent implements AfterContentInit {
  @Input() gap?: boolean;
  @Input('hide-arrow') hideArrow: boolean = false;
  @Input() title!: string;

  @Input() value?: any;
  @Input('default-value') defaultValue?: any;
  @Input() subvalue?: any;
  @Input('subvalue-opacity') subvalueOpacity?: any;
  @Input('subvalue-color') subvalueColor?: any;
  @Input('subvalue-font-weight') subvalueFontWeight?: any;

  @Input('more-data') moreData?: MoreDataObject;

  @Input() expanded: boolean = false;
  @Output() expandedChange = new EventEmitter<boolean>();
  
  expandData() {
    this.expanded = !this.expanded;
    this.expandedChange.emit(this.expanded);
  }
  ngAfterContentInit(): void {
    if (!this.moreData) return;
    for (const group of this.moreData) {
      group.columns = '';
      for (const item of group.items) {
        group.columns += (item.width ?? 1) + 'fr ';
      }
    }
  }
}

export type MoreDataObject = { groupLabel: string, columns?: string, items: Array<{ label?: string | null, value: any, color?: string, width?: number }> }[];
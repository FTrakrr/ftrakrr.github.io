import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-row-expandable',
  templateUrl: './data-row-expandable.component.html',
  styleUrls: ['./data-row-expandable.component.scss']
})
export class DataRowExpandableComponent {
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
}

export type MoreDataObject = { groupLabel: string, items: { label?: string | null, value: any, color?: string }[] }[];
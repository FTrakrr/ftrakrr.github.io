import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { WEEKDAY_MAP } from 'src/app/scripts/constants';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnChanges {
  readonly firstWeekdaySetting = this.settingsService.loadSettings().first_weekday;
  readonly currentDate = new Date();

  // basic data
  @Input() year: number = new Date().getFullYear();
  @Input() month: number = new Date().getMonth();
  date!: Date;

  // day options
  @Input() enabledDays: boolean[] = new Array(31).fill(true);
  @Input() activeDate?: Date;
  @Output() activeDateChange = new EventEmitter<Date>();
  selectedDate?: Date;

  // view options
  @Input() hideHeading?: boolean;
  @Input() hideLabels?: boolean;
  @Input() hideBackToPresent?: boolean;
  @Input() fixedHeight?: boolean = true;

  calendarArray: CalendarArrayItem[] = [];
  dayArray: string[] = [];


  constructor(
    private settingsService: SettingsService,
  ) { }

  changeMonthDown() {
    if (!this.month) {
      this.month = 11;
      this.year--;
      return;
    }
    this.month--;
    this.drawCalendar();
  }
  changeMonthUp() {
    if (this.month == 11) {
      this.month = 0;
      this.year++;
      return;
    }
    this.month++;
    this.drawCalendar();
  }
  changeYearDown() {
    this.year--;
    this.drawCalendar();
  }
  changeYearUp() {
    this.year++;
    this.drawCalendar();
  }
  setDatePresent() {
    let date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth();
    this.drawCalendar();
  }

  ngOnInit(): void {
    this.drawCalendar();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['activeDate']) {
      this.drawCalendar();
    }
  }

  drawCalendar() {
    this.date = new Date(this.year, this.month, 1);

    // reset last index for the new calendar
    this.lastClickedIndex = -1;

    if (!this.hideLabels) {
      // reset the day array
      this.dayArray = [
        WEEKDAY_MAP[0][1],
        WEEKDAY_MAP[1][1],
        WEEKDAY_MAP[2][1],
        WEEKDAY_MAP[3][1],
        WEEKDAY_MAP[4][1],
        WEEKDAY_MAP[5][1],
        WEEKDAY_MAP[6][1],
        WEEKDAY_MAP[0][1],
      ];
      // dayArray has one extra Sunday, and one is removed, depending on the user's settings
      if (this.firstWeekdaySetting == 1) this.dayArray.shift();
      else this.dayArray.pop();
      // dayArray is mapped and included in the calendarArray
      this.calendarArray = this.dayArray.map(v => ({ type: 'day', date: v } as CalendarArrayItem));
    }

    // determine how many spaces should there be before the first day of the month
    let i = -(this.date.getDay() - this.firstWeekdaySetting);
    // for a case when the month starts with a Sunday (indexed as 0 by Date class)
    if (i == 1) i -= 7;

    // create the rest of calendar items
    for (null; i < determineMaxDay(this.year, this.month); i++) {
      // add spaces before the first day
      if (i < 0) {
        this.calendarArray.push({ type: 'space' });
        continue;
      }
      // add standard calendar days
      let obj: CalendarArrayItem = {
        type: 'disabled',
        date: i + 1,
      }
      if (this.enabledDays[i]) {
        obj.type = 'enabled';
        //set return value
        obj.returnValue = new Date(this.year, this.month, Number(obj.date));

        //check if is the present day
        if (this.year == this.currentDate?.getFullYear() && this.month == this.currentDate?.getMonth() && i + 1 == this.currentDate?.getDate()) {
          obj.today = true;
        }
        //check if is selected
        if (this.year == this.activeDate?.getFullYear() && this.month == this.activeDate?.getMonth() && i + 1 == this.activeDate?.getDate()) {
          obj.type = 'active';
          this._emit(obj.returnValue)
        }
      }

      this.calendarArray.push(obj);
    }
  }

  lastClickedIndex?: number;
  onItemClick(index: number, date?: Date) {
    if (!date) return;
    // check for when the user clicks the same items multiple times in a row
    if (this.lastClickedIndex == index) return;

    //remove 'selected' flag from all other things
    this.calendarArray = this.calendarArray.map(v => {
      v.selected = false;
      return v;
    });
    //mark this item as selected
    this.calendarArray[index].selected = true;
    this.selectedDate = date;
    //update last selected index
    this.lastClickedIndex = index;
    //emit event
    this._emit(date);
  }

  private _emit(date: Date) {
    this.activeDateChange.emit(date);
  }
}

type CalendarArrayItem = {
  type: 'space' | 'disabled' | 'enabled' | 'active' | 'selected' | 'day';
  date?: number | string;
  returnValue?: Date;
  selected?: boolean;
  today?: boolean;
}

function determineMaxDay(year: number, month: number) {
  if (month == 1) {
    if (leapYear(year)) return 29;
    return 28;
  }
  if (month == 3 || month == 5 || month == 8 || month == 10) return 30;
  return 31;
}
function leapYear(year: number) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
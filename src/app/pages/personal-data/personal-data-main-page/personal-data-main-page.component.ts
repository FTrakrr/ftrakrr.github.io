import { Component, OnInit } from '@angular/core';
import { PersonalDataService } from 'src/app/services/personal-data.service';
import { PERSONAL_DATA } from 'src/app/scripts/constants';

@Component({
  templateUrl: './personal-data-main-page.component.html',
  styleUrls: ['./personal-data-main-page.component.scss']
})
export class PersonalDataMainPageComponent implements OnInit {
  personalData = this.personalDataService.getDataForDisplay();
  personalDataConstant = PERSONAL_DATA;

  constructor(
    private personalDataService: PersonalDataService
  ) { }

  ngOnInit(): void {
  }
}
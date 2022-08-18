import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { LocalStorageService } from './../../../services/local-storage.service';
import { TakeChance } from 'take-chance';

@Component({
  templateUrl: './settings-download-data.component.html',
  styleUrls: ['./settings-download-data.component.scss']
})
export class SettingsDownloadDataPage {
  isProcessing = false;

  processingMessage = '';
  processingClass = '';

  dots = '...';
  useDots = true;

  fileContent!: string;
  showDownload = false;

  constructor(
    private localStorageSerice: LocalStorageService,
  ) { }

  onExportButtonClick() {
    this.isProcessing = true;
    this.fileContent = this.localStorageSerice.exportAllData();

    setInterval(() => {
      if (this.dots == '...') return (this.dots = '');
      this.dots += '.';
      return;
    }, 400);

    this.processingMessage = 'Fetching data';
    this.useDots = true;
    setTimeout(() => {
      this.processingMessage = 'Sealing';

      setTimeout(() => {
        this.processingMessage = 'Creating file';

        setTimeout(() => {
          this.processingMessage = 'Complete!'
          this.useDots = false;

          this.showDownload = true;
        }, TakeChance.int(1200, 800));
      }, TakeChance.int(700, 500));
    }, TakeChance.int(2100, 1250));
  }

  onDownloadButtonClick() {
    this.showDownload = false;
    
    let file = new File([this.fileContent], `FTrakrr-data-export_${new Date().toLocaleDateString('en-US').replace(/\//g, '-')}.json`)
    saveAs(file);

    this.fileContent = '';
    this.isProcessing = false;
  }
}
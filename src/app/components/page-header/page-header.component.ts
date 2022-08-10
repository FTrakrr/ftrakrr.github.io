import { Component, Input } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  @Input() header!: string;
  @Input() confirmation?: boolean = false;

  constructor(
    private urlService: UrlService
  ) { }

  onArrowClick() {
    if (this.confirmation) {
      if (!confirm('Are you sure want to exit?')) return;
    }
    
    this.urlService.navigateToPreviousUrl();
  }
}

import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  url_history: string[][] = [];

  constructor(
    private router: Router
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let url = this._urlStringToUrlArray(event.urlAfterRedirects);
        this.url_history.unshift(url);
        if (this.url_history.length > 5) this.url_history.pop();
      }
    })
  }

  getRoute() {
    let url = this.router.url;
    return this._urlStringToUrlArray(url);
  }
  navigateTo(url: string | string[]) {
    if (Array.isArray(url)) {
      url = this._urlArrayToUrlString(url);
    }
    this.router.navigateByUrl(url);
  }
  navigateToPreviousUrl() {
    let url = this.url_history[1];
    if (url == undefined) {
      url = this.url_history[0];
      url.pop();
    }
    
    this.navigateTo(url);
    this.url_history.shift();
    this.url_history.shift();
  }
  private _urlStringToUrlArray(url: string) {
    url = url.substring(1);
    url = url.trim();
    if (!url.length) return [] as string[];
    return url.split('/');
  }
  private _urlArrayToUrlString(arr: string[]) {
    return arr.join('/');
  }
}

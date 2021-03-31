import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkMode: boolean = false;

  constructor() {
    if (this.getDarkmode() == '') {
      this.setDarkmode('false');
    }
    if (this.isDarkmode()) {
      window.document.body.classList.toggle('darkmode');
    }
  }

  ngOnInit() {}

  toggle() {
    if (!this.isDarkmode()) {
      window.document.body.classList.toggle('darkmode');
      this.setDarkmode('true');
    } else {
      window.document.body.classList.toggle('darkmode');
      this.setDarkmode('false');
    }
  }

  setDarkmode(status: string) {
    window.localStorage.setItem('darkmode', status);
  }

  getDarkmode(): string {
    const darkmode = window.localStorage.getItem('darkmode');
    return darkmode == null ? '' : darkmode;
  }

  isDarkmode() {
    return this.getDarkmode() == 'true' ? true : false;
  }
}

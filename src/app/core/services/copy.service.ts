import { Injectable } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Injectable({
  providedIn: 'root'
})
export class CopyService {

  constructor(private clipboardService: ClipboardService) { }

  copy([text1 = '', text2 = '']) {
    this.clipboardService.copy(`
    ${text1}
    ${text2}
    `);
  }

  copyAnimation(id: string) {
    document.getElementById(id).style.opacity = '1';
    setTimeout(() => {
      document.getElementById(id).style.opacity = '0';
    }, 1500);
  }
}

import { DomService } from './dom.service';
import { Injectable } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Injectable({
  providedIn: 'root'
})
export class CopyService {

  constructor(private clipboardService: ClipboardService, private dom: DomService) { }

  copy([text1 = '', text2 = '']) {
    text1 != '' && text2 != '' ? this.clipboardService.copy(`${text1}
    ${text2}`) : this.clipboardService.copy(`${text1}`);
  }

  copyAnimation(id: string) {
    this.dom.getStyle(id).opacity = '1';
    setTimeout(() => { this.dom.getStyle(id).opacity = '0'; }, 1500);
  }
}

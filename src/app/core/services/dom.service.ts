import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomService {

  constructor() { }

  getElementById(id: string) {
    return document.getElementById(id);
  }

  getStyle(id: string) {
    return this.getElementById(id).style;
  }
}

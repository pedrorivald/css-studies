import { DomService } from './dom.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BorderImageService {
  code = ''; codeHTML = ''; codeId = 'border-image-code';
  gradientAngle = 0; slice = 30; width = 20; linearRepeating = 0;
  repeat = 'round'; resultId = 'result-border-image';
  borderImageURL = ''; borderImageURLBoolean = true;

  public ctrlColors = [
    { control: 'First', color: '#b833ff' },
    { control: 'Second', color: '#29a7d1' },
  ];

  constructor(private dom : DomService) {}

  setColors() {
    if (this.isBorderURL()) {
      this.dom.getStyle(this.resultId).borderImage = this.getStyle('image');
      this.setCodeURLCopy();
      this.setCodeURLHTML();
    } else if (this.linearRepeating > 0 && this.ctrlColors.length == 3) {
      this.dom.getStyle(this.resultId).borderImage = this.getStyle('repeating');
      this.setCodeCopyRepeating();
      this.setCodeHTMLRepeating();
    } else if (this.ctrlColors.length < 3) {
      this.dom.getStyle(this.resultId).borderImage = this.getStyle('two-colors');
      this.setCodeCopy();
      this.setCodeHTML();
    } else {
      this.dom.getStyle(this.resultId).borderImage = this.getStyle('three-colors');
      this.setCodeCopyForThird();
      this.setCodeHTMLForThird();
    }
  }

  setCodeURLCopy() {
    this.code = `border-image: url(${this.borderImageURL}) ${this.slice} / ${this.width}% / 0 ${this.repeat};`;
  }

  setCodeURLHTML() {
    this.codeHTML = `<span class="code-property">border-image:</span>
      url (${this.borderImageURL}) ${this.slice} / ${this.width}% / 0 ${this.repeat};`;
    this.dom.getElementById(this.codeId).innerHTML = this.codeHTML;
  }

  setCodeCopyForThird() {
    this.code = `border-image: linear-gradient(${this.gradientAngle}deg, ${this.ctrlColors[0].color}, ${this.ctrlColors[1].color}, ${this.ctrlColors[2].color}) ${this.slice}% / ${this.width}% / 0 ${this.repeat};`;
  }

  setCodeCopy() {
    this.code = `border-image: linear-gradient(${this.gradientAngle}deg, ${this.ctrlColors[0].color}, ${this.ctrlColors[1].color}) ${this.slice}% / ${this.width}% / 0 ${this.repeat};`;
  }

  setCodeHTML() {
    this.codeHTML = `<span class="code-property">border-image:</span>
      <span class="code-gradient">linear-gradient</span>(${this.gradientAngle}deg,
      <span class="code-weight" style="color: ${this.ctrlColors[0].color}">${this.ctrlColors[0].color}</span>,
      <span class="code-weight" style="color: ${this.ctrlColors[1].color}">${this.ctrlColors[1].color}</span>) ${this.slice}% / ${this.width}% / 0 ${this.repeat};`;
    this.dom.getElementById(this.codeId).innerHTML = this.codeHTML;
  }

  setCodeHTMLForThird() {
    this.codeHTML = `<span class="code-property">border-image:</span>
      <span class="code-gradient">linear-gradient</span>(${this.gradientAngle}deg,
      <span class="code-weight" style="color: ${this.ctrlColors[0].color}">${this.ctrlColors[0].color}</span>,
      <span class="code-weight" style="color: ${this.ctrlColors[1].color}">${this.ctrlColors[1].color}</span>,
      <span class="code-weight" style="color: ${this.ctrlColors[2].color}">${this.ctrlColors[2].color}</span>) ${this.slice}% / ${this.width}% / 0 ${this.repeat};`;
    this.dom.getElementById(this.codeId).innerHTML = this.codeHTML;
  }

  setCodeCopyRepeating() {
    this.code = `border-image: repeating-linear-gradient(${this.gradientAngle}deg, ${this.ctrlColors[0].color}, ${this.ctrlColors[1].color}, ${this.ctrlColors[2].color} ${this.linearRepeating}px) ${this.slice}% / ${this.width}% / 0 ${this.repeat};`;
  }

  setCodeHTMLRepeating() {
    this.codeHTML = `<span class="code-property">border-image:</span>
      <span class="code-gradient">repeating-linear-gradient</span>(${this.gradientAngle}deg,
      <span class="code-weight" style="color: ${this.ctrlColors[0].color}">${this.ctrlColors[0].color}</span>,
      <span class="code-weight" style="color: ${this.ctrlColors[1].color}">${this.ctrlColors[1].color}</span>,
      <span class="code-weight" style="color: ${this.ctrlColors[2].color}">${this.ctrlColors[2].color}</span> ${this.linearRepeating}px) ${this.slice}% / ${this.width}% / 0 ${this.repeat};`;
    this.dom.getElementById(this.codeId).innerHTML = this.codeHTML;
  }

  setImageURL() { this.borderImageURLBoolean = false; }

  getStyle(type: string) {
    switch (type) {
      case 'image':
        return `url(${this.borderImageURL}) ${this.slice}% / ${this.width}% / 0 ${this.repeat}`;
      case 'repeating':
        return `repeating-linear-gradient(${this.gradientAngle}deg, ${this.ctrlColors[0].color},
          ${this.ctrlColors[1].color}, ${this.ctrlColors[2].color}
          ${this.linearRepeating}px) ${this.slice}% / ${this.width}% / 0 ${this.repeat}`;
      case 'two-colors':
        return `linear-gradient(
          ${this.gradientAngle}deg, ${this.ctrlColors[0].color},
          ${this.ctrlColors[1].color}) ${this.slice}% / ${this.width}% / 0 ${this.repeat}`;
      case 'three-colors':
        return `linear-gradient(${this.gradientAngle}deg, ${this.ctrlColors[0].color}, ${this.ctrlColors[1].color},
          ${this.ctrlColors[2].color}) ${this.slice}% / ${this.width}% / 0 ${this.repeat}`;
      default:
        return '';
    }
  }

  removeImageURL() {
    this.borderImageURLBoolean = true;
    this.borderImageURL = '';
  }

  addColor() { this.ctrlColors.push({ control: 'Third', color: '#ff2eb2' }); }

  removeColor() { this.ctrlColors.pop(); }

  isBorderURL() {
    return (!this.borderImageURLBoolean && !(this.borderImageURL == '')) ? true : false;
  }
}

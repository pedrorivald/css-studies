import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BorderImageService {
  code: string = '';
  codeHTML: string = '';
  gradientAngle: number = 0;
  slice: number = 30;
  width: number = 20;
  repeat: string = 'round';
  borderImageURL: string = '';
  borderImageURLBoolean: boolean = true;

  public ctrlColors = [
    { control: 'First', color: '#b833ff' },
    { control: 'Second', color: '#29a7d1' },
  ];

  constructor() {}

  setColors() {
    if (this.isBorderURL()) {
      this.getElementById(
        'result-border-image'
      ).style.borderImage = `url(${this.borderImageURL}) ${this.slice} / ${this.width}px ${this.repeat}`;

      this.setCodeURLCopy();
      this.setCodeURLHTML();
    } else if (this.ctrlColors.length < 3) {
      this.getElementById(
        'result-border-image'
      ).style.borderImage = `linear-gradient(
        ${this.gradientAngle}deg,
        ${this.ctrlColors[0].color},
        ${this.ctrlColors[1].color}) ${this.slice}`;

      this.setCodeCopy();
      this.setCodeHTML();
    } else {
      this.getElementById(
        'result-border-image'
      ).style.borderImage = `linear-gradient(
        ${this.gradientAngle}deg,
        ${this.ctrlColors[0].color},
        ${this.ctrlColors[1].color},
        ${this.ctrlColors[2].color}) ${this.slice}`;

      this.setCodeCopyForThird();
      this.setCodeHTMLForThird()
    }
  }

  addColor() {
    this.ctrlColors.push({
      control: 'Third',
      color: '#ff2eb2',
    });
  }

  removeColor() {
    this.ctrlColors.pop();
  }

  setCodeURLCopy() {
    this.code = `border-image: url(${this.borderImageURL}) ${this.slice} / ${this.width}px ${this.repeat};`;
  }

  setCodeURLHTML() {
    this.codeHTML = `
      <span class="code-property">border-image:</span>
      url (${this.borderImageURL}) ${this.slice} / ${this.width}px ${this.repeat};
    `;
    this.getElementById('border-image-code').innerHTML = this.codeHTML;
  }

  setCodeCopyForThird() {
    this.code = `border-image: linear-gradient(${this.gradientAngle}deg, ${this.ctrlColors[0].color}, ${this.ctrlColors[1].color}, ${this.ctrlColors[2].color} ${this.slice});`;
  }

  setCodeCopy() {
    this.code = `border-image: linear-gradient(${this.gradientAngle}deg, ${this.ctrlColors[0].color}, ${this.ctrlColors[1].color} ${this.slice});`;
  }

  setCodeHTML() {
    this.codeHTML = `
      <span class="code-property">border-image:</span>
      <span class="code-gradient">linear-gradient</span>
        (${this.gradientAngle}deg,
        <span class="code-weight" style="color: ${this.ctrlColors[0].color}">${this.ctrlColors[0].color}</span>,
        <span class="code-weight" style="color: ${this.ctrlColors[1].color}">${this.ctrlColors[1].color}</span> ${this.slice});
    `;
    this.getElementById('border-image-code').innerHTML = this.codeHTML;
  }

  setCodeHTMLForThird() {
    this.codeHTML = `
      <span class="code-property">border-image:</span>
      <span class="code-gradient">linear-gradient</span>
        (${this.gradientAngle}deg,
        <span class="code-weight" style="color: ${this.ctrlColors[0].color}">${this.ctrlColors[0].color}</span>,
        <span class="code-weight" style="color: ${this.ctrlColors[1].color}">${this.ctrlColors[1].color}</span>,
        <span class="code-weight" style="color: ${this.ctrlColors[2].color}">${this.ctrlColors[2].color}</span> ${this.slice});
    `;
    this.getElementById('border-image-code').innerHTML = this.codeHTML;
  }

  setImageURL() {
    this.borderImageURLBoolean = false;
  }

  removeImageURL() {
    this.borderImageURLBoolean = true;
    this.borderImageURL = '';
  }

  getElementById(id: string) {
    return document.getElementById(id);
  }

  isBorderURL() {
    return (!this.borderImageURLBoolean && !(this.borderImageURL == '')) ? true : false;
  }
}

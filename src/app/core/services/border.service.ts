import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BorderService {
  borderColor: string = '#666666';
  borderRadiusAll: number = 0;
  borderRadiusTop: number = 0;
  borderRadiusBottom: number = 0;
  borderRadiusLeft: number = 0;
  borderRadiusRight: number = 0;
  borderWidth: number = 10;
  borderPosition: string = '';
  borderStyle: string = 'solid';
  borderTop: boolean = true;
  borderBottom: boolean = true;
  borderLeft: boolean = true;
  borderRight: boolean = true;
  borderPositionAll = true;
  borderRadiusPositionAll = false;
  codeBorder: string = '';
  codeBorderRadius: string = '';
  borderDom: HTMLElement = document.getElementById('border-result');

  constructor() {}

  setBorderAll() {
    this.borderDom.style.border = `${this.borderWidth}px ${this.borderStyle} ${this.borderColor}`;
  }

  setBorderRadiusAll() {
    this.borderDom.style.borderRadius = `${this.borderRadiusAll}px`;
  }

  setBorderRadius() {
    this.borderDom.style.borderRadius = `
      ${this.borderRadiusTop}px
      ${this.borderRadiusLeft}px
      ${this.borderRadiusBottom}px
      ${this.borderRadiusRight}px`;
  }

  setBorderByPosition() {
    this.borderDom.style.border = 'none';

    if (this.borderTop) {
      this.borderDom.style.borderTop = `${this.borderWidth}px ${this.borderStyle} ${this.borderColor}`;
    }

    if (this.borderBottom) {
      this.borderDom.style.borderBottom = `${this.borderWidth}px ${this.borderStyle} ${this.borderColor}`;
    }

    if (this.borderLeft) {
      this.borderDom.style.borderLeft = `${this.borderWidth}px ${this.borderStyle} ${this.borderColor}`;
    }

    if (this.borderRight) {
      this.borderDom.style.borderRight = `${this.borderWidth}px ${this.borderStyle} ${this.borderColor}`;
    }
  }

  setBorder() {
    if (this.isBorderPositionAll()) {
      this.setBorderAll();
    } else {
      this.setBorderByPosition();
    }

    if (this.borderRadiusPositionAll) {
      this.setBorderRadiusAll();
    } else {
      this.setBorderRadius();
    }
  }

  isBorderPositionAll() {
    return this.borderTop &&
      this.borderBottom &&
      this.borderLeft &&
      this.borderRight
      ? true
      : false;
  }

  toggleBorderTop() {
    this.borderTop = !this.borderTop;
  }

  toggleBorderBottom() {
    this.borderBottom = !this.borderBottom;
  }

  toggleBorderLeft() {
    this.borderLeft = !this.borderLeft;
  }

  toggleBorderRight() {
    this.borderRight = !this.borderRight;
  }

  setCode() {
    this.setCodeBorder();
    this.setCodeBorderRadius();
  }

  setCodeBorder() {
    if (this.isBorderPositionAll()) {
      this.codeBorder = `border: ${this.borderWidth}px ${this.borderStyle} ${this.borderColor};`;
    } else {
      this.codeBorder = '';
      if (this.borderTop) {
        this.codeBorder += `
          border-top: ${this.borderWidth}px ${this.borderStyle} ${this.borderColor};
        `;
      }

      if (this.borderLeft) {
        this.codeBorder += `
          border-left: ${this.borderWidth}px ${this.borderStyle} ${this.borderColor};
        `;
      }

      if (this.borderBottom) {
        this.codeBorder += `
          border-bottom: ${this.borderWidth}px ${this.borderStyle} ${this.borderColor};
        `;
      }

      if (this.borderRight) {
        this.codeBorder += `
          border-right: ${this.borderWidth}px ${this.borderStyle} ${this.borderColor};
        `;
      }
    }
  }

  setCodeBorderRadius() {
    if (this.borderRadiusPositionAll) {
      this.codeBorderRadius = `border-radius: ${this.borderRadiusAll}px;`;
    } else {
      if(this.isBorderRadiusGreaterThanZero()) {
        this.codeBorderRadius = `border-radius: ${this.borderRadiusTop}px ${this.borderRadiusLeft}px ${this.borderRadiusBottom}px ${this.borderRadiusRight}px;`;
      }
    }
  }

  isBorderRadiusGreaterThanZero() {
    return this.borderRadiusTop > 0 ||
      this.borderRadiusBottom > 0 ||
      this.borderRadiusLeft > 0 ||
      this.borderRadiusRight > 0
      ? true
      : false;
  }

  setCodeHtml() {
    let code = '';
    if(this.isBorderPositionAll()) {
      code = `<span class="code-property">border:</span>
      ${this.borderWidth}px ${this.borderStyle}
      <span style="color: ${this.borderColor}">${this.borderColor}</span>;`;
    } else {
      if(this.borderTop) {
        code += `<p class="text-shadow"><span class="code-property">border-top:</span>
        ${this.borderWidth}px ${this.borderStyle} ${this.borderColor};</p>`
      }

      if(this.borderBottom) {
        code += `<p class="text-shadow"><span class="code-property">border-bottom:</span>
        ${this.borderWidth}px ${this.borderStyle} ${this.borderColor};</p>`;
      }

      if(this.borderLeft) {
        code += `<p class="text-shadow"><span class="code-property">border-left:</span>
        ${this.borderWidth}px ${this.borderStyle} ${this.borderColor};</p>`;
      }

      if(this.borderRight) {
        code += `<p class="text-shadow"><span class="code-property">border-right:</span>
        ${this.borderWidth}px ${this.borderStyle} ${this.borderColor};</p>`;
      }
    }

    if(this.borderRadiusPositionAll && this.borderRadiusAll != 0) {
      code += `<p class="text-shadow">
      <span class="code-property">border-radius:</span>${this.borderRadiusAll}px;
      </p>`;
    }

    if(!this.borderRadiusPositionAll && this.isBorderRadiusGreaterThanZero()) {
      code += `<p class="text-shadow">
      <span class="code-property">border-radius:</span>
        ${this.borderRadiusTop}px ${this.borderRadiusLeft}px ${this.borderRadiusBottom}px ${this.borderRadiusRight}px;
      </p>`;
    }

    return document.getElementById("border-code").innerHTML = code;
  }
}

import { DomService } from './dom.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BorderService {
  borderRadiusAll = 0; borderWidth = 10;
  borderRadiusTop = 0; borderRadiusBottom = 0; borderRadiusLeft = 0; borderRadiusRight = 0;
  borderTop = true; borderBottom = true; borderLeft = true; borderRight = true;
  borderPositionAll = true; borderRadiusPositionAll = false;
  borderPosition = ''; codeBorder = ''; codeBorderRadius = ''; borderColor = '#666666'; borderStyle = 'solid';
  resultId = 'border-result';

  constructor(private dom: DomService) {}

  setBorderAll() { this.dom.getStyle(this.resultId).border = this.getStyleBorder(); }

  setBorderRadiusAll() { this.dom.getStyle(this.resultId).borderRadius = `${this.borderRadiusAll}px`; }

  setBorderRadius() { this.dom.getStyle(this.resultId).borderRadius = this.getStyleBorderRadius(); }

  setBorderByPosition() {
    this.dom.getStyle(this.resultId).border = 'none';

    this.borderTop ? this.dom.getStyle(this.resultId).borderTop = this.getStyleBorder() : null;
    this.borderBottom ? this.dom.getStyle(this.resultId).borderBottom = this.getStyleBorder() : null;
    this.borderLeft ? this.dom.getStyle(this.resultId).borderLeft = this.getStyleBorder() : null;
    this.borderRight ? this.dom.getStyle(this.resultId).borderRight = this.getStyleBorder() : null;
  }

  setBorder() {
    this.isBorderPositionAll() ?  this.setBorderAll() : this.setBorderByPosition();
    this.borderRadiusPositionAll ? this.setBorderRadiusAll() : this.setBorderRadius();
    this.setCodeHtml();
  }

  getCodeHTMLBorder() {
    let codeHTML = '';
    if (this.isBorderPositionAll()) {
      codeHTML = `<span class="code-property">border:</span> ${this.borderWidth}px ${this.borderStyle}
      <span style="color: ${this.borderColor}">${this.borderColor}</span>;`;
      this.codeBorder = `border: ${this.borderWidth}px ${this.borderStyle} ${this.borderColor};`;
    } else {
      this.codeBorder = '';
      this.borderTop ? (codeHTML += this.getCodeHTMLBorderOrientation('top'), this.codeBorder += this.getCodeBorderOrientation('top')) : null;
      this.borderBottom ? (codeHTML += this.getCodeHTMLBorderOrientation('bottom'), this.codeBorder += this.getCodeBorderOrientation('bottom')) : null;
      this.borderLeft ? (codeHTML += this.getCodeHTMLBorderOrientation('left'), this.codeBorder += this.getCodeBorderOrientation('left')) : null;
      this.borderRight ? (codeHTML += this.getCodeHTMLBorderOrientation('right'), this.codeBorder += this.getCodeBorderOrientation('right')) : null;
    }
    return codeHTML;
  }

  getCodeHTMLBorderRadius() {
    let codeHTML = '';
    if (this.borderRadiusPositionAll && this.borderRadiusAll != 0) {
      codeHTML += `<p class="text-shadow"><span class="code-property">border-radius:</span>${this.borderRadiusAll}px;</p>`;
      this.codeBorderRadius = `border-radius: ${this.borderRadiusAll}`;
    }
    if (!this.borderRadiusPositionAll && this.isBorderRadiusGreaterThanZero()) {
      codeHTML += `<p class="text-shadow"><span class="code-property">border-radius:</span>
      ${this.borderRadiusTop}px ${this.borderRadiusLeft}px ${this.borderRadiusBottom}px ${this.borderRadiusRight}px;</p>`;
      this.codeBorderRadius = `border-radius: ${this.getStyleBorderRadius()};`;
    }
    return codeHTML;
  }

  setCodeHtml() {
    return (this.dom.getElementById('border-code').innerHTML = this.getCodeHTMLBorder() + this.getCodeHTMLBorderRadius());
  }

  getCodeHTMLBorderOrientation(orientation: string) {
    return `<p class="text-shadow"><span class="code-property">border-${orientation}:</span>
      ${this.borderWidth}px ${this.borderStyle} ${this.borderColor};</p>`;
  }

  getCodeBorderOrientation(orientation: string) {
    return `
    border-${orientation}: ${this.borderWidth}px ${this.borderStyle} ${this.borderColor};`;
  }

  getStyleBorder() {
    return `${this.borderWidth}px ${this.borderStyle} ${this.borderColor}`;
  }

  getStyleBorderRadius() {
    return `${this.borderRadiusTop}px ${this.borderRadiusLeft}px ${this.borderRadiusBottom}px ${this.borderRadiusRight}px`;
  }

  toggleBorderTop = () => (this.borderTop = !this.borderTop);
  toggleBorderBottom = () => (this.borderBottom = !this.borderBottom);
  toggleBorderLeft = () => (this.borderLeft = !this.borderLeft);
  toggleBorderRight = () => (this.borderRight = !this.borderRight);

  isBorderRadiusGreaterThanZero() {
    return this.borderRadiusTop > 0 || this.borderRadiusBottom > 0 || this.borderRadiusLeft > 0 || this.borderRadiusRight > 0 ? true : false;
  }

  isBorderPositionAll() {
    return this.borderTop && this.borderBottom && this.borderLeft && this.borderRight ? true : false;
  }
}

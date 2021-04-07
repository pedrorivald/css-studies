import { DomService } from './dom.service';
import { Injectable } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Injectable({
  providedIn: 'root'
})
export class GradientService {

  code: string = '';
  codeHTML: string = '';
  orientation: string = 'bottom';
  range1: number = 0;
  range2: number = 100;
  range3: number = 100;

  public ctrlColors = [
    { control: 'First', color: '#b833ff' },
    { control: 'Second', color: '#29a7d1' },
  ];

  constructor(private dom: DomService) { }

  setColors() {
    if(this.ctrlColors.length < 3) {
      this.dom.getStyle('result').background = `linear-gradient(to ${this.orientation},
        ${this.ctrlColors[0].color} ${this.range1}%, ${this.ctrlColors[1].color} ${this.range2}%)`;
    }else {
      this.dom.getStyle('result').background = `linear-gradient(to ${this.orientation}, ${this.ctrlColors[0].color}
        ${this.range1}%, ${this.ctrlColors[1].color} ${this.range2}%, ${this.ctrlColors[2].color} ${this.range3}%)`;
    }
  }

  setCode() {
    this.ctrlColors.length < 3 ? (this.setCodeCopy(), this.setCodeHTML()) :
    (this.setCodeCopyForThird(), this.setCodeHTMLForThird());
  }

  setCodeCopyForThird() {
    this.code = `background: linear-gradient(to ${this.orientation}, ${this.ctrlColors[0].color} ${this.range1}%, ${this.ctrlColors[1].color} ${this.range2}%, ${this.ctrlColors[2].color} ${this.range3}%);`;
  }

  setCodeCopy() {
    this.code = `background: linear-gradient(to ${this.orientation}, ${this.ctrlColors[0].color} ${this.range1}%, ${this.ctrlColors[1].color} ${this.range2}%);`;
  }

  setCodeHTML() {
    this.codeHTML = `
      <span class="code-property">background:</span>
      <span class="code-gradient">linear-gradient</span>
        (to ${this.orientation},
        <span class="code-weight" style="color: ${this.ctrlColors[0].color}">${this.ctrlColors[0].color}</span> ${this.range1}%,
        <span class="code-weight" style="color: ${this.ctrlColors[1].color}">${this.ctrlColors[1].color}</span> ${this.range2}%);
    `;
    document.getElementById('code').innerHTML = this.codeHTML;
  }

  setCodeHTMLForThird() {
    this.codeHTML = `<span class="code-property">background:</span>
      <span class="code-gradient">linear-gradient</span>(to ${this.orientation},
      <span class="code-weight" style="color: ${this.ctrlColors[0].color}">${this.ctrlColors[0].color}</span> ${this.range1}%,
      <span class="code-weight" style="color: ${this.ctrlColors[1].color}">${this.ctrlColors[1].color}</span> ${this.range2}%,
      <span class="code-weight" style="color: ${this.ctrlColors[2].color}">${this.ctrlColors[2].color}</span> ${this.range3}%);
    `;
    this.dom.getElementById('code').innerHTML = this.codeHTML;
  }

  addColor() {
    this.ctrlColors.push({ control: 'Third', color: '#ff2eb2' });
    this.range2 = 50;
  }

  removeColor() { this.ctrlColors.pop(); }
}

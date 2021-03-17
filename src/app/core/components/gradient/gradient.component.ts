import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.css'],
})
export class GradientComponent implements OnInit {
  code: string = '';
  codeHTML: string = '';
  orientation: string = 'bottom';
  range1: number = 0;
  range2: number = 100;

  public ctrlColors = [
    { control: 'First', color: '#72e3ea' },
    { control: 'Second', color: '#bd98bd' },
  ];

  constructor(public clipboardService: ClipboardService) {}

  ngOnInit(): void {
    this.setColors();
  }

  copy(text: string) {
    this.clipboardService.copy(text);
    document.getElementById('copied').style.opacity = '1';
    setTimeout(() => { document.getElementById('copied').style.opacity = '0'; }, 1500);
  }

  setColors() {
    document.getElementById(
      'result'
    ).style.background = `linear-gradient(to ${this.orientation}, ${this.ctrlColors[0].color} ${this.range1}%, ${this.ctrlColors[1].color} ${this.range2}%)`;
  }

  setCode() {
    this.code = `background:
    linear-gradient
      (to ${this.orientation},
      ${this.ctrlColors[0].color} ${this.range1}%,
      ${this.ctrlColors[1].color} ${this.range2}%);
  `;
    this.codeHTML = `
      <span class="code-bg">background:</span>
      <span class="code-gradient">linear-gradient</span>
        (to ${this.orientation},
        <span class="code-color" style="color: ${this.ctrlColors[0].color}">${this.ctrlColors[0].color}</span> ${this.range1}%,
        <span class="code-color" style="color: ${this.ctrlColors[1].color}">${this.ctrlColors[1].color}</span> ${this.range2}%);
    `;
    document.getElementById('code').innerHTML = this.codeHTML;
  }
}

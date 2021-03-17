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
  }

  setColors() {
    document.getElementById(
      'result'
    ).style.background = `linear-gradient(to bottom, ${this.ctrlColors[0].color} 0%, ${this.ctrlColors[1].color} 100%)`;
  }

  setCode() {
    this.code = `background:
    linear-gradient
      (to bottom,
      ${this.ctrlColors[0].color} 0%,
      ${this.ctrlColors[1].color} 100%);
  `;
    this.codeHTML = `
      <span class="code-bg">background:</span>
      <span class="code-gradient">linear-gradient</span>
        (to bottom,
        <span class="code-color" style="color: ${this.ctrlColors[0].color}">${this.ctrlColors[0].color}</span> 0%,
        <span class="code-color" style="color: ${this.ctrlColors[1].color}">${this.ctrlColors[1].color}</span> 100%);
    `;
    document.getElementById('code').innerHTML = this.codeHTML;
  }
}

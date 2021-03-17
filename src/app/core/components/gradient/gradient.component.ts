import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.css']
})
export class GradientComponent implements OnInit {

  colors = [];

  constructor() { }

  ngOnInit(): void {
    this.getColors();
    document.getElementById('result').style.background = `linear-gradient(to bottom, ${this.colors[0]} 0%, ${this.colors[1]} 100%)`;
  }

  getColors() {
    this.colors = [];
    let inputColors = document.querySelectorAll(".gradient-color-input");
    inputColors.forEach((inputColor: any) => {
      this.colors.push(inputColor.value);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { GradientService } from '../../services/gradient.service';

@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.css'],
})
export class GradientComponent implements OnInit {

  constructor(public gradientService: GradientService) {}

  ngOnInit(): void {
    this.gradientService.setColors();
  }
}

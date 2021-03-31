import { BorderImageService } from './../../services/border-image.service';
import { Component, OnInit } from '@angular/core';
import { CopyService } from '../../services/copy.service';

@Component({
  selector: 'app-border-image',
  templateUrl: './border-image.component.html',
  styleUrls: ['./border-image.component.css']
})
export class BorderImageComponent implements OnInit {

  constructor(public borderImageService: BorderImageService, public copyService: CopyService) { }

  ngOnInit(): void {
    this.borderImageService.setColors();
  }

}

import { BorderService } from './../../services/border.service';
import { Component, OnInit } from '@angular/core';
import { CopyService } from '../../services/copy.service';

@Component({
  selector: 'app-border',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.css']
})
export class BorderComponent implements OnInit {

  constructor(public borderService: BorderService, public copyService: CopyService) { }

  ngOnInit(): void {
    this.borderService.borderDom = document.getElementById('border-result');
    this.borderService.setBorder();
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-baseboard',
  templateUrl: './base-board.component.html',
  styleUrls: ['./base-board.component.scss']
})
export class BaseboardComponent implements OnInit {
  @Input() clientSelect: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}

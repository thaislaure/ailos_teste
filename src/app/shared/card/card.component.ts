import { Component, Input, OnInit } from '@angular/core';
import { Client, createClient } from 'src/app/model/client';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() client: Client = createClient();
  constructor() { }

  ngOnInit(): void {
  }

}

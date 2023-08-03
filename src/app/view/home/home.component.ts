import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  client: boolean = false;
  ngOnInit(): void {
  }

  select(value: boolean){
    this.client = value;
  }


}

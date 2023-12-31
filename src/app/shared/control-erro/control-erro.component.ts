import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-control-erro',
  templateUrl: './control-erro.component.html',
  styleUrls: ['./control-erro.component.scss']
})
export class ControlErroComponent implements OnInit {

  @Input() mensagemErro: string = '';
  @Input() exibiErro = false;

  constructor() { }

  ngOnInit() {
  }

}

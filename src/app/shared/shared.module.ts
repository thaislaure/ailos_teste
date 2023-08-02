import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimeLineComponent } from "./time-line/time-line.component";
import { ControlErroComponent } from "./control-erro/control-erro.component";
//import { NgxMaskModule } from "ngx-mask";
import { CardComponent } from './card/card.component';


@NgModule({
  imports: [CommonModule],
  declarations: [TimeLineComponent, ControlErroComponent, CardComponent],
  exports: [TimeLineComponent, ControlErroComponent, CardComponent],
})
export class SharedModule {}

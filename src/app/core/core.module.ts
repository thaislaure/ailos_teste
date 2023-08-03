import { NgModule } from "@angular/core";
import { HeadComponent } from "./head/head.component";
import { MenuComponent } from "./menu/menu.component";
import { BaseboardComponent } from "./base-board/base-board.component";
import { CommonModule } from "@angular/common";

@NgModule({
imports: [CommonModule],
  declarations: [
    HeadComponent,
    MenuComponent,
    BaseboardComponent,
  ],
  exports: [
    MenuComponent,
    HeadComponent,
    BaseboardComponent
  ]
})
export class CoreModule {}

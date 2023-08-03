import { NgModule } from "@angular/core";
import { CoreModule } from "src/app/core/core.module";
import { SearchModule } from "../search/search.module";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  imports: [
    CoreModule,
    HomeRoutingModule,
    SearchModule

  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}


import { ErrorHandler, NgModule } from "@angular/core";
import { SearchComponent } from "./search.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";
import { SearchRoutingModule } from "./search-routing.module";
import { ClientService } from "src/app/service/client.service";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from "ngx-mask";


@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  declarations: [SearchComponent],
  providers: [
    {
      provide: ErrorHandler,
    },
    ClientService,
    provideNgxMask(),
  ],
  exports: [SearchComponent]
})
export class SearchModule { }

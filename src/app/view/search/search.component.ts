import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Client, createClient } from "src/app/model/client";
import { ClientService } from "src/app/service/client.service";
import { ValidadorCPF } from "src/app/util/validator/cpf-validator";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {

  @Output() newClient = new EventEmitter<boolean>();

  client: Client = createClient();
 // infoForm: FormGroup;
  infoForm: FormGroup = new FormGroup({
    cpf: new FormControl('')
  });


  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.contruirFomrulario();
  }

  private contruirFomrulario() {
    this.infoForm = this.formBuilder.group({
      cpf: [null, [Validators.required, ValidadorCPF.validate]],
    });
  }

  public getClient() {
    if (this.infoForm.valid) {
      this.cpf?.value.replace(".", "").replace("-", "");
      this.clientService.buscaPorCpf(this.cpf?.value).subscribe((client) => {
        if (client[0]) {
          this.client = client[0];
          this.newClient.emit(true);
        } else {
          this.newClient.emit(false);
          this.client = createClient();;
        }

      });
    }
  }

  public verificaCpfValido(): boolean {
    if (this.cpf?.value > 0) {
      const cpf = this.cpf;
      if (cpf?.invalid && cpf?.dirty) {
        return true;
      }
    }
    return false;
  }

  get cpf(): AbstractControl | null {
    return this.infoForm.get("cpf");
  }
}

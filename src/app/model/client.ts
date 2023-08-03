import { Count } from "./conta";

export interface Client {
  id: number;
  nome: string;
  cpf: string;
  situacao: string;
  contas : Count[];
}

export function createClient() {
  return {
    id: 0,
    nome: '',
    cpf: '',
    situacao: '',
    contas: []
  } as Client;
}

<h1 align="center" >
  Teste Ailos
</h1>

## <p id='tecnologies'>💻 Tecnologias </p>
Este projeto foi desenvolvido com as seguintes tecnologias:

-  [Angular v16.1.0](https://angular.io/)
-  [TypeScript v5.1.3](https://www.typescriptlang.org/)
-  [Node.js v18.17.0](https://nodejs.org/en/)


## <p id='como'>💻 Como usar </p>
Para clonar e executar este aplicativo, na linha de comando:

```bash
# Clone este repositório
$ git clone https://github.com/thaislaure/teste-ailos.git

Para execução do projeto siga os passos abaixo:

#### Passo 1.1 - Instalando as dependências

acesse a pasta raiz do seu projeto e execute o comando abaixo:

Instalando com npm:
```
npm install
```

### Passo 2 - Subindo o JSON Server

Utilizei o JSON Server serve para simular uma api fake.

Instalando com npm:

```
npm i json-server
```

Execute o comando abaixo na pasta raiz do seu projeto:

```
json-server --watch src/assets/data/db.json
```
Abra o *browser* e acesse a url:  http://localhost:3000/clientes para visualizar os dados.

### Passo 3 - Rode o seu projeto

Agora basta executar mais um comando para subir a aplicação e ver o seu projeto rodando no *browser* ;).

```
ng serve
```

Abra o *browser* e acesse a url http://localhost:4200. Pronto!


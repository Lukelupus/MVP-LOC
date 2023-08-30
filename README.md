# MVP-LOC

## Detalhes Tecnicos

Esse é um projeto para vaga de Desenvolvedor. É um MVP de locação de arquivos de camping.

O backend foi feito com NodeJS e as seguintes tecnologias:

-express,
-express-async-handler,
-bcrypt,
-concurrently,
-dotenv,
-mongoose,
-express-async-handler

O Banco de dados utilizado é um banco Não Relacional, o MongoDB.

O frontend foi feito com ReactJS e encontra-se no seguinte repositório:

[https://github.com/Lukelupus/MVP-Frontend/tree/master](https://github.com/Lukelupus/MVP-Frontend)

O mesmo utiliza as bibliotecas/frameworks:

-axios,
-react-responsive,
-bootstrap,
-react-router-dom,
-react-bootstrap,
-typescript


## Como conferir:

1) Clone o repositório;
2) Instale as dependencias e módulos:
#Backend:
### `npm install`
3) Clone o repositório do frontend (https://github.com/Lukelupus/MVP-Frontend) diretamente na pasta frontend
#Frontend:
### `cd frontend`
### `npm install`
4) Inicie o aplicativo:
### `npm run dev`

Ele rodará no modo desenvolvedor.\
O frontend rodará em [http://localhost:3000](http://localhost:3000). Uma janela deve abrir automaticamente para visualizar o projeto. CAso não abra, basta apenas acessar o endereço.
O backend rodará em [http://localhost:8000](http://localhost:8000).


## RestAPI:

As requisições [GET] e [POST] buscam e postam dados diretamente de um banco de dados não relacional [MongoDB](MongoDB)

### Deployment

Até o momento, o aplicativo não há deploy.

### Observações

Neste repositório existe um arquivo .env no lugar de .envexemple. Isto porquê um banco de dados gratuito foi criado apenas para a realização deste teste.



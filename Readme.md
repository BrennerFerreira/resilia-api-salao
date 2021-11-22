# Resilia Salão API

Este projeto é um MVP de uma API para um salão de beleza. Ele faz parte do
projeto final do módulo 4 do curso de Web Dev da Resilia.

Projeto desenvolvido por:

- [Beatriz Medeiros](https://github.com/beatrizmdc);
- [Brenner Ferreira](https://github.com/brennerferreira);
- [João Paulo da Silva](https://github.com/joaopaulo99);
- [Vitória Bernardino](https://github.com/vitorianb).

## Como rodar

### Localmente

Para rodar o projeto localmente, é necessário ter um banco de dados PostgreSQL
instalado na máquina. Com isso, primeiramente, clone este repositório para a sua
máquina.

Renomeie o arquivo [.env.example](./.env.example) para `.env` e preencha os
valores de cada variável com os necessários para conectar com o banco de dados
instalado localmente. Geralmente, o DB_HOST, neste caso, será `localhost`.

Rode o comando `npm install` para instalar todas as depedências necessárias
e `npm run start` para rodar o servidor. Teste a API utilizando um software de sua
preferência acessando `http://localhost:PORT`, sendo `PORT` a variável definida
no arquivo `.env`.

#### Utilizando Docker

Caso queira utilizar o Docker para criar o banco de dados local, renomeie o
arquivo `Dockerfile.example` para `Dockerfile` e complete as variáveis com as
seguintes informações:

- POSTGRES_USER: utilize o mesmo valor da variável `DB_USER` do arquivo `.env`.
- POSTGRES_DB: utilize o mesmo valor da variável `DB_NAME` do arquivo `.env`.
- POSTGRES_PASSWORD: utilize o mesmo valor da variável `DB_PASS` do arquivo `.env`.

Renomeie o arquivo `container.sh.example` para `container.sh`, alterando
`<container-name>` pelo nome que deseja dar ao container,
`<local/folder/to/store/data>` com um caminho absoluto para uma pasta local
para armazenar os dados do container e `<container-port>` com o mesmo valor
colocado na variável `DB_PORT` do arquivo `.env`.

Em um terminal (caso utilize Windows, use o Git Bash) aberto na pasta do repositório,
rode os seguintes comandos:

```shell
sh imagem.sh
```

```shell
sh container.sh
```

Em seguida, rode o comando `npm install` para instalar todas as depedências
necessárias e `npm run start` para rodar o servidor. Teste a API utilizando um
software de sua preferência acessando `http://localhost:PORT`, sendo `PORT` a
variável definida no arquivo `.env`.

### Online

Caso queira utilizar a versão hospedada no [Heroku](https://www.heroku.com/),
utilize como URL base o endereço:

`https://resilia-salao-api.herokuapp.com/`

## Arquitetura

As responsabilidades da API estão separadas em 5 camadas:

- [server](./src/server): Configura os middlewares globais da API.
- [router](./src/router): Configura as rotas da API, redirecionando as requisições
para os `controllers`.
- [controllers](./src/controllers): Cria as funções que vão lidar com cada requisição,
ligando-as com os métodos do banco de dados.
- [models](./src/models): Cria os `models` para uniformizar os dados recebidos
da requisição para serem utilizados pelo banco de dados.
- [db](./src/db): Lida com os pedidos dos `controllers` para o banco de dados,
abstraindo os métodos que são utilizados para o que é necessário no banco de dados.

## ORM

Neste projeto, utilizamos o [Prisma](https://www.prisma.io/) para fazer a ponte
entre nossa API e o banco de dados.

## Entidades

### Usuários

Foram criados endpoints para lidar com as operações de CRUD para usuários.

#### Endpoints

- GET:

  - `/users`: Retorna as informações todos os usuários salvos no banco de dados,
  exceto suas senhas.
  - `/users/:id`: Retorna as informações do usuário com a `id` informada, exceto
  sua senha. Caso não exista usuário com a id informada, é retornado um erro com
  status 404.

- POST:

  - `/users`: Cria um usuário no banco de dados. É necessário enviar um body
  no formato JSON com as seguintes informações:

  ```javascript
    {
        "name": "",
        "email": "",
        "password: ""
    }
  ```

- DELETE:

  - `/users/:id`: Remove o usário com a `id` informada no banco de dados. Caso
  não exista usuário com a id informada, é retornado um erro com status 404.

- PUT:

  - `/users/:id`: Atualiza o nome, email e senha do usuário com a `id` informada
  no banco de dados. Caso não exista usuário com a id informada, é retornado
  um erro com status 404. É necessário enviar no body da requisição um JSON
  com o seguinte formato:

  ```javascript
    {
        "name": "",
        "email": "",
        "password": ""
    }
  ```

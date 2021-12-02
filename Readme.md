# Resilia Salão API

Este projeto é um MVP de uma API para um salão de beleza. Ele faz parte do
projeto final do módulo 4 do curso de Web Dev da Resilia.

Projeto desenvolvido por:

- [Beatriz Medeiros](https://github.com/beatrizmdc);
- [Brenner Ferreira](https://github.com/brennerferreira);
- [João Paulo da Silva](https://github.com/joaopaulo99);
- [Vitória Bernardino](https://github.com/vitorianb).

## Tecnologias utilizadas

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Como rodar

### Localmente

Para rodar o projeto localmente, é necessário ter um banco de dados PostgreSQL
instalado na máquina. Com isso, primeiramente, clone este repositório para a sua
máquina.

Renomeie o arquivo [.env.example](./.env.example) para `.env` e preencha os
valores de cada variável com os necessários para conectar com o banco de dados
instalado localmente. Geralmente, o DB_HOST, neste caso, será `localhost`.

Rode o comando `npm install` para instalar todas as depedências necessárias.

Rode o seguinte comando para sincronizar o Prisma com o banco de dados e rodar
o servidor:

```node
npm run deploy
```

Teste a API utilizando um software de sua preferência acessando
`http://localhost:PORT`, sendo `PORT` uma variável definida no arquivo `.env` ou
a porta 3000, por padrão.

### Utilizando Docker

Caso queira utilizar o Docker para criar o banco de dados local, renomeie o
arquivo `Dockerfile.example` para `Dockerfile` e complete as variáveis com as
seguintes informações:

- POSTGRES_USER: utilize o mesmo valor da variável `DB_USER` do arquivo `.env`.
- POSTGRES_DB: utilize o mesmo valor da variável `DB_NAME` do arquivo `.env`.
- POSTGRES_PASSWORD: utilize o mesmo valor da variável `DB_PASS` do arquivo `.env`.

Renomeie o arquivo `container.sh.example` para `container.sh`, alterando
`<container-name>` pelo nome que deseja dar ao container,
`<local/folder/to/store/data>` com o caminho absoluto para uma pasta local
para armazenar os dados do container e `<container-port>` com o mesmo valor
colocado na variável `DB_PORT` do arquivo `.env`.

Em um terminal (caso utilize Windows, use o Git Bash) aberto na pasta do
repositório, rode os seguintes comandos:

```shell
sh imagem.sh
```

```shell
sh container.sh
```

Em seguida, rode o comando `npm install` para instalar todas as depedências
necessárias.

Rode o seguinte comando para sincronizar o Prisma com o banco de dados e rodar
o servidor:

```node
npm run deploy
```

Teste a API utilizando um software de sua preferência acessando
`http://localhost:PORT`, sendo `PORT` uma variável definida no arquivo `.env` ou
a porta 3000, por padrão.

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
utlizando os `models` para requisitar os métodos para os arquivos `db`.
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

#### Endpoints de usuários

- GET:

  - `/users`: Retorna as informações todos os usuários salvos no banco de dados,
  exceto suas senhas.
  - `/users/:id`: Retorna as informações do usuário com a `id` informada, exceto
  sua senha. Caso não exista usuário com a id informada, é retornado um erro com
  status 404.

- POST:

  - `/users`: Cria um usuário no banco de dados. É necessário enviar um body
  no formato JSON com as seguintes informações:

  ```json
    {
        "name": "",
        "email": "",
        "password: ""
    }
  ```

- DELETE:

  - `/users/:id`: Remove o usário com a `id` informada no banco de dados.

- PATCH:

  - `/users/:id`: Atualiza o nome, email e/ou senha do usuário com a `id` informada
  no banco de dados. É necessário enviar no body da requisição um JSON
  com `name`, `email` e/ou `password`, podendo enviar os três, um ou dois deles:

  ```json
    {
        "name": "",
        "email": "",
        "password": ""
    }
  ```

### Produtos

Foram criados endpoints para lidar com as operações de CRUD para produtos.

#### Endpoints de produtos

- GET:

  - `/products`: Retorna as informações todos os produtos salvos no banco de dados.
  - `/products/:id`: Retorna as informações do produto com a `id` informada. Caso não exista produto com a id informada, é retornado um erro com status 404.

- POST:

  - `/products`: Cria um produto no banco de dados. É necessário enviar um body
  no formato JSON com as seguintes informações:

  ```json
    {
        "name": "",
        "price": ""
    }
  ```

- DELETE:

  - `/products/:id`: Remove o produto com a `id` informada no banco de dados.

- PATCH:

  - `/products/:id`: Atualiza o nome e/ou preço do produto com a `id` informada
  no banco de dados. É necessário enviar no body da requisição um JSON
  com `name` e/ou `price`, podendo enviar os dois ou um deles:

  ```json
    {
        "name": "",
        "price": ""
    }
  ```

### Serviços

Foram criados endpoints para lidar com as operações de CRUD para serviços.

#### Endpoints de serviços

- GET:

  - `/services`: Retorna as informações todos os serviços salvos no banco de dados.
  - `/services/:id`: Retorna as informações do serviço com a `id` informada. Caso não exista serviço com a id informada, é retornado um erro com status 404.

- POST:

  - `/services`: Cria um produto no banco de dados. É necessário enviar um body
  no formato JSON com as seguintes informações:

  ```json
    {
        "employeeName": "",
        "name": "",
        "price": ""
    }
  ```

- DELETE:

  - `/services/:id`: Remove o serviço com a `id` informada no banco de dados.

- PATCH:

  - `/services/:id`: Atualiza o nome e/ou preço do produto com a `id` informada
  no banco de dados. É necessário enviar no body da requisição um JSON
  com `employeeName`, `name` e/ou `price`, podendo enviar os três, um ou dois deles:

  ```json
    {
        "employeeName": "",
        "name": "",
        "price": ""
    }
  ```

### Agendamentos

Foram criados endpoints para lidar com as operações de CRUD para agendamentos.

#### Endpoints de agendamentos

- GET:

  - `/schedules`: Retorna as informações todos os agendamentos salvos no banco de dados.
  - `/schedules/:id`: Retorna as informações do agendamento com a `id` informada. Caso não exista agendamento com a id informada, é retornado um erro com status 404.

- POST:

  - `/schedules`: Cria um agendamento no banco de dados. A data padrão do agendamento
é de 7 dias após a sua criação. É necessário enviar um body no formato JSON com as seguintes informações:

  ```json
    {
        "userId": ""
    }
  ```

- DELETE:

  - `/schedules/:id`: Remove o agendamento com a `id` informada no banco de dados.

- PATCH:

  - `/schedules/:id`: Atualiza a id do usuário do agendamento com a `id` informada
  no banco de dados. É necessário enviar no body da requisição um JSON com o seguinte formato:

  ```json
    {
        "userId": ""
    }
  ```

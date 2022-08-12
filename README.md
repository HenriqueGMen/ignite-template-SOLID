<h1 align=center> 🚀 Desafio - Node JS </h1>

## 🎯 Objetivo

- Criar aplicação onde será possível fazer o cadastro de usuário, listar usuários, visualizar o perfil dos usuários cadastrados, e poder tornar esses usuarios administrador.
- Documentar aplicação usando o swagger.

## ⚙ Específicação dos testes
#### Teste do model
- [x] Should be able to create an user with all props

#### Testes do repositório
- [x] Should be able to create new users
- [x] Should be able to list all users
- [x] Should be able to find user by ID
- [x] Should be able to find user by e-mail address
- [x] Should be able to turn an user as admin

##### Testes de useCases
- [x] Should be able to create new users
- [x] Should not be able to create new users when email is already taken
- [x] Should be able to turn an user as admin
- [x] Should not be able to turn a non existing user as admin
- [x] Should be able to get user profile by ID
- [x] Should not be able to show profile of a non existing user
- [x] Should be able to list all users
- [x] Should not be able to a non admin user get list of all users
- [x] Should not be able to a non existing user get list of all users

## 💻 Rodando programa
```bash
# Clone este repositório
$ git clone https://github.com/HenriqueGMen/ignite-template-SOLID.git

# Instale as dependências
$ npm install ou yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev ou npm run dev

# Execute os testes
$ yarn test

# Acessar a doc
* http://localhost:3333/api-docs

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```

### Visite meu linkedin:
  <a href="https://www.linkedin.com/in/carlos-henrique-gomes-mendon%C3%A7a-8614aa93/">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>&nbsp;&nbsp;

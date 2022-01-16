# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# PROJETO FINAL: API Academia

## Descrição do projeto:

Este é o projeto final do curso de desenvolvimento full-stack da Resilia. Utilizamos o atributo "Alunos" para fazer a parte front-end desse projeto, onde o funcionário da Academia pode acessar os alunos a partir do CRUD.

## Dependências Gerais:
```js
 "dependencies": {
    "axios": "^0.24.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-modules": "^1.0.8",
    "react-router": "^6.2.1",
    "react-router-dom": "^6.2.1",
    "react-scripts": "^5.0.0",
    "react-scroll": "^1.8.4",
    "react-use-effect": "^0.0.1",
    "styled-components": "^5.3.3",
    "web-vitals": "^2.1.2"
  }
```

## Rotas da API:

| Método | Rota | Funcionalidade |
| ------ | ----- | ----------- |
| **GET** | `http://localhost:3000/alunos` | Gets em todos|
| **GET** | `http://localhost:3000/alunos/{id}` | Gets em alunos por {id} |
| **POST** | `http://localhost:3000/alunos` | Entrada de novo aluno |
| **PUT** | `http://localhost:3000/alunos/{id}` | Alterações por {id} |
| **DELETE** | `http://localhost:3000/alunos/{id}` | Deleção de alunos {id} |

## Como executar?
Clone o projeto.
Execute o comando "npm install" para instalar as dependências necessárias.
Inserir no terminal o comando "npm start".

## Responsáveis pelo projeto:

- [Larissa Silva](https://github.com/LariCostaSilva)
- [Murilo Rodrigues](https://github.com/muridev017) 
- [Nathalie Moreira](https://github.com/NathalieMS)
- [Yasmin Reis](https://github.com/yasminreisk)

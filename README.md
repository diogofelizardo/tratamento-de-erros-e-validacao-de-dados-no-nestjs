# Tratamento de Erros e Validação de Dados no NestJS

Este repositório contém uma aplicação NestJS de exemplo que demonstra como implementar um sistema robusto de tratamento de erros e validação de dados. A aplicação inclui um módulo de usuários que utiliza **DTOs**, **Pipes** e **Filtros de Exceção** para garantir a integridade dos dados e fornecer respostas de erro consistentes.

## 📦 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) - Framework progressivo para Node.js
- [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript
- [class-validator](https://github.com/typestack/class-validator) - Validação de dados
- [class-transformer](https://github.com/typestack/class-transformer) - Transformação de dados

## 🚀 Instalação

### 1. Clone o Repositório

```bash
git clone https://github.com/diogofelizardo/tratamento-de-erros-e-validacao-de-dados-no-nestjs
cd tratamento-de-erros-e-validacao-de-dados-no-nestjs
```

### 2. Instale as Dependências

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Em seguida, instale as dependências utilizando o npm ou yarn:

```bash
npm install
# ou
yarn install
```

### 3. Execute a Aplicação

Inicie o servidor de desenvolvimento:

```bash
npm run start:dev
# ou
yarn start:dev
```

A aplicação estará disponível em `http://localhost:3000`.

## 🛠️ Funcionalidades

- **Validação de Dados:** Utiliza DTOs e Pipes para garantir que as requisições contenham dados válidos.
- **Tratamento de Erros:** Implementa filtros de exceção personalizados para retornar respostas de erro estruturadas.
- **CRUD de Usuários:** Endpoint para criar usuários com verificação de email único.

## 📂 Estrutura do Projeto

```
src/
├── common/
│   └── filters/
│       └── http-exception.filter.ts
├── users/
│   ├── dto/
│   │   └── create-user.dto.ts
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
├── app.module.ts
└── main.ts
```

## 🔧 Scripts Disponíveis

- `npm run start`: Inicia a aplicação.
- `npm run start:dev`: Inicia a aplicação em modo de desenvolvimento com hot-reload.
- `npm run build`: Compila a aplicação para produção.

## 📄 Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).

## 📞 Contato

Desenvolvido por [Diogo Felizardo](https://github.com/diogofelizardo). Sinta-se à vontade para abrir [issues](https://github.com/diogofelizardo/tratamento-de-erros-e-validacao-de-dados-no-nestjs/issues) ou enviar [pull requests](https://github.com/diogofelizardo/tratamento-de-erros-e-validacao-de-dados-no-nestjs/pulls).
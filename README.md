# IGMA CHALLENGE 🧑‍💻

## Descrição do Projeto

O desafio fornecido pela empresa IGMA se baseia em criar uma API para registro de usuários, sendo os dados fornecidos: **Nome**, **CPF** e **data de aniversário** do cliente. A API deveria aceitar o cadastro do cliente tanto caso fosse passado sem os pontos e hífens, quanto com eles também. Sendo necessário a validação do CPF antes de cadastrar o cliente na base de dados (https://www.macoratti.net/alg_cpf.htm#:~:text=O%20algoritmo%20de%20valida%C3%A7%C3%A3o%20do,%3A%20111.444.777-05).

### Feito com

- [Next JS](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://github.com/axios/axios)
- [Prisma ORM](https://www.prisma.io/)
- [MondoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- [Jest](https://jestjs.io/pt-BR/docs/getting-started)


## Etapas de Instalação

Para instalar e executar o projeto, siga os passos abaixo:

## Pré Requisitos

- [`Node JS` &gt;=v18.17.0](https://nodejs.org/)
- [`npm` &gt;=v9.6.7](https://nodejs.org/)
- [`yarn` &gt;=v1.22.19](https://nodejs.org/)

1. **Clone o repositório**

   ```bash
   git clone igmatest

   cd igmatest

   npm install | yarn

   ```

2. **Adicione as variáveis de ambiente em seu arquivo .env**

   ```bash
   DATABASE_URL="mongodb+srv://marcelobracet1:et2zoAraHAT6eQZy@igma.z0uhwfe.mongodb.net/test"

   ```

3. **Rode a aplicação local** (`http://localhost:3000`)

   ```bash
    npm run dev | yarn dev
   ```

## Testes Automatizados

Rodando os testes:

```
yarn test
```

Rodando cobertura de testes:

```
yarn test:coverage
```

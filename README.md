# IGMA CHALLENGE 🧑‍💻

## Descrição do Projeto

A proposta da IGMA consiste em desenvolver uma API para o registro de usuários, onde os dados essenciais são o Nome, CPF e data de aniversário do cliente. A API deve ser flexível, permitindo o cadastro do cliente tanto com a formatação tradicional (com pontos e hífens) quanto sem esses caracteres. Além disso, é imprescindível realizar a validação do CPF, utilizando o algoritmo adequado, antes de efetuar o cadastro na base de dados. O algoritmo de validação do CPF pode ser consultado em: https://www.macoratti.net/alg_cpf.htm#:~:text=O%20algoritmo%20de%20valida%C3%A7%C3%A3o%20do,%3A%20111.444.777-05

### Feito com

- [Next JS](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://github.com/axios/axios)
- [Prisma ORM](https://www.prisma.io/)
- [MondoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- [Jest](https://jestjs.io/pt-BR/docs/getting-started)
- [Insomnia](https://insomnia.rest/)

## Etapas de Instalação

Para instalar e executar o projeto, siga os passos abaixo:

## Pré Requisitos

- [`Node JS` &gt;=v18.17.0](https://nodejs.org/)
- [`npm` &gt;=v9.6.7](https://nodejs.org/)
- [`yarn` &gt;=v1.22.19](https://nodejs.org/)

1. **Clone o repositório**

   ```bash
   git clone https://github.com/MarceloBxD/igmatest.git

   cd igmatest

   npm install | yarn

   ```

2. **Adicione as variáveis de ambiente em seu arquivo .env**

   ```bash
   DATABASE_URL="mongodb+srv://igmacompany:igmacompany@igma.z0uhwfe.mongodb.net/test"
   ```

3. **Reinicie o terminal para que o .env seja carregado corretamente**


4. **Rode a aplicação local** (`http://localhost:3000`)

   ```bash
    npm run dev | yarn dev
   ```

## Testes Automatizados

Rodando os testes

```
npm run test
```

Testes com watch mode

```
npm run test:watch
```

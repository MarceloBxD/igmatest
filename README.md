# IGMA CHALLENGE

## Descrição do Projeto

O IGMA CHALLENGE é uma API de cadastro de clientes, desenvolvida utilizando o framework Next.js, o banco de dados MongoDB e o ORM Prisma. A API oferece endpoints para criar clientes, buscar clientes por CPF e listar todos os clientes com suporte para paginação. Destaca-se pela validação de CPF, aceitando formatos com ou sem máscara.

## Etapas de Instalação

Para instalar e executar o projeto, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone <URL do Repositório>

   cd igma-challenge

   npm install


   ```

2. Configure o ambiente (crie um arquivo .env com as configurações necessárias).

3. Execute o projeto:
   ```bash
       npm run dev

   ```

Instruções de Uso
Endpoint para Criar Clientes:
Método: POST

Rota: /api/client

Corpo da Requisição:

        curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "cpf": "123.456.789-09", "birthday": "2000-01-01"}' http://localhost:3000/api/client

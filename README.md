# API sistema de controle de finanças pessoais

## Tecnologias Utilizadas
- Node.js: plataforma para execução do javascript no servidor
- Express: framework para construção da API em node.js
- MongoDB: banco de dados
- Mongoose: biblioteca para modelagem de dados do MongoDB em node.js
- bcrypt: biblioteca para criptografia de senhas
- jsonwebtoken (JWT): biblioteca para geração de tokens JWT para autenticação
- body-parser: middleware para análise do corpo das requisições HTTP

## Estrutura do Projeto
- config: configurações do banco de dados
- controllers: controladores para lógica de negócio
- models: modelos de dados utilizando mongoose
- routes: definição de rotas da API
- middleware: middleware de autenticação e tratamento de erros
- tempData: módulo para simulação de dados em memória
- utils: funções utilitárias para cálculos específicos

## Estrutura de Banco de Dados
- User: modelo de usuário com campos name, email e password (criptografada)
- Transaction: modelo de transação com campos user, type, amount e date
- Goal: modelo de meta com campos user, name, targetAmount, currentAmount e deadline

## Cálculos Implementados
Saldo Mensal: função para calcular o saldo mensal com base nas transações do usuário

const calculateBalance = (transactions) => {
  return transactions.reduce((acc, transaction) => {
    return transaction.type === 'income'
      ? acc + transaction.amount
      : acc - transaction.amount;
  }, 0);
};
module.exports = calculateBalance;

## Rotas e Endpoints
- Autenticação: rotas para registro e login de usuários
- Transações: rotas para CRUD de transações financeiras
- Metas: rotas para CRUD de metas financeiras
- Memória: rotas para operações em memória
- Cálculo de saldo: rota para obter saldo mensal com base nas transações

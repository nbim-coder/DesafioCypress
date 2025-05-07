# DesafioCypress
Teste de Cypress relacionada a um desafio, onde tenho que fazer 3 testes no site especificado 

Instalações necessárias:

1. git
2. Node.js
3. Visual Studio Code

Para verificar as versões do git, Node.js e npm instaladas em seu computador, execute o comando git --version && node --version && npm --version em seu terminal de linha de comando.

Criamos uma pasta local no nosso computador
E realizamos os procedimentos por meio dela

Instalação Cypress:

1. Abrimos o terminal na raiz do projeto.
2. Executamos o comando: npm install cypress --save-dev
3. Para abrir a interface do Cypress: npx cypress open
4. Para executar testes no modo headless (sem interface do usuário): npx cypress run

Após a instalação foi gerada a estrutura básica:

cypress/
  ├── e2e/
  ├── fixtures/
  ├── support/
cypress.config.js

Execução dos testes:

Na pasta e2e 
No arquivo playground.cy.js, começamos a programar os testes

1. Utilizando o comando "describe", com a descrição de tudo o que terá dentro dos nosso testes. 
2. Utilizamos os casos de teste com o comando "it".
3. A nossa base foi inspecionar o site para pegarmos a linguagem de programação e transformar em código, com o framework cypress.
4. Utilizamos o comando be.visible para visualizar o site, junto do comando visit.
5. Utilizamos o comando/código click para clicar em elementos. 
6. Construímos de acordo com cenários especificados. 
7. E assim finalizamos os testes.

# Aula 02: Criação de um servidor backend com Node.js

Nesta aula, explorei a criação de servidores para a Web, evoluindo do módulo nativo do Node.js para o framework Express, que será a base do nosso SaaS de Barbearia.

## 🛠️ Passo a Passo Executado

### 1. Módulo Nativo HTTP
Antes de usar frameworks, entendi como o Node.js lida com requisições e respostas nativamente.
- **Criação do servidor:** Utilizei `http.createServer`.
- **Manipulação de Rotas:** Implementei lógica manual para identificar a URL (ex: `/home`, `/users`) e retornar conteúdos específicos.
- **Headers:** Aprendi a importância de definir o `Content-Type` para que o navegador entenda o formato da resposta (HTML ou JSON).

![Módulo HTTP](./img/13-http.PNG)

### 2. Utilizando Módulo Express
Para escalar o projeto, instalei e configurei o **Express**, o framework mais popular do ecossistema Node.js.

- **Instalação:** 
    ```bash
    npm install express 
    ```
- Vantagens observadas:
    - Sintaxe muito mais limpa e intuitiva.
    - Facilidade para gerenciar diferentes verbos HTTP (GET, POST, etc.).
    - Sistema de roteamento robusto.
- Configuração da Porta: O servidor foi configurado para "escutar" na porta 8080.
- Middlewares e JSON: Preparei o servidor para entender requisições no formato JSON.

![Módulo HTTP](./img/14-express.PNG)

## 💡 Notas de Aprendizado
- O Express abstrai a complexidade do módulo `http`, permitindo focar na lógica de negócio da barbearia (agendamentos, clientes) em vez de configurações de baixo nível.
- Ao usar `res.status(200).send()`, o Express já tenta identificar o tipo de conteúdo automaticamente, mas definir o `contentType` explicitamente ajuda a evitar problemas de download indesejado no navegador.
- A organização das rotas em arquivos separados como fizemos em `modules/express.js` é fundamental para manter o projeto legível conforme o SaaS cresce.

## 🚀 Como testar as rotas
Com o servidor rodando via `npm run start:dev`:
- Home: http://localhost:8080/home
- Users: http://localhost:8080/users
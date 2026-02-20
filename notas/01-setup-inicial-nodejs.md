# Aula 01: Setup Inicial do Projeto Node.js - Criação, importe, instalação de Modulos

Nesta etapa inicial, realizei a configuração do ambiente de desenvolvimento, preparei a estrutura base do projeto e configurei as ferramentas de produtividade.

## 🛠️ Passo a Passo Executado

### 1. Preparação do Ambiente
O primeiro passo foi garantir que o ambiente de execução estava pronto.
- **Instalação do Node.js:** Download e instalação da versão LTS.
![Node Install](./img/1-node-install.PNG)
- **Verificação:** Verificar se o node está instalado na maquina.
    ```bash
    node -v
    ```
    ![Node Install](./img/2-node-install.PNG)

### 2. Inicialização do Projeto
Criação do arquivo `package.json`, que gerencia as dependências do nosso SaaS.

```bash
npm init
```
![Start Projet](./img/3-node-proj.PNG)
![Start Projet](./img/3-node-proj1.PNG)

### 3. Estrutura de Arquivos Inicial
Criei os primeiros arquivos de lógica para testar o entendimento de módulos e objetos:
- `person.js`: Responsável pela definição da entidade ou lógica de pessoa/usuário.
![Start Projet](./img/4-node-proj.PNG)
- `index.js:` Ponto de entrada (entry point) da aplicação.
![Start Projet](./img/5-node-proj.PNG)

### 4. Instalação do Nodemon
Para ganhar agilidade no desenvolvimento (reinicialização automática do servidor ao salvar arquivos), instalei o Nodemon como dependência de desenvolvimento:
```bash
npm install nodemon --save-dev
```
![Start Projet](./img/6-nodemon.PNG)

### 5. Configuração do Git e Script de Execução
- **.gitignore:** Criei o arquivo para evitar que a pasta node_modules seja enviada para o GitHub (mantendo o repositório leve).
![Start Projet](./img/7-node-proj.PNG)
- **Scripts:** Adicionei o script de inicialização no package.json para facilitar o comando de execução:
    ```JSON
    "scripts": {
        "dev": "nodemon index.js"
    }
    ```
    ![Start Projet](./img/8-node-script-dev.PNG)

## 💡 Notas de Aprendizado
- O `npm init` agiliza o processo criando o arquivo de configuração com valores padrão.
- O uso do `.gitignore` é uma boa prática fundamental de segurança e organização em projetos profissionais.
- Separar a lógica em `person.js` e importar no `index.js` já começa a introduzir conceitos de modularização.

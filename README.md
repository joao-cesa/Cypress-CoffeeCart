# ☕ CoffeeCart Automation Testing

> Desafio técnico de automação E2E utilizando Cypress e Cucumber.

## 📋 Descrição do Projeto

Este projeto consiste na automação completa do fluxo de compra no e-commerce [CoffeeCart](https://coffee-cart.app/). 

O objetivo principal foi criar um script resiliente que não apenas segue um "caminho feliz", mas valida a integridade dos dados entre telas e utiliza massa de dados dinâmica.

## ⚙️ O que esta automação faz?

O robô executa os seguintes passos lógicos:

1.  **Seleção Dinâmica:** Acessa o menu e seleciona **3 cafés aleatórios** (garantindo variabilidade de teste a cada execução).
2.  **Promoção:** Identifica e aceita a promoção condicional (Mochas/Descontos).
3.  **Validação Cruzada:** No Carrinho, valida se os preços e nomes correspondem exatamente aos itens selecionados na vitrine.
4.  **Remoção:** Remove um item aleatório do carrinho e recalcula o total.
5.  **Checkout Dinâmico:** Preenche o formulário de pagamento utilizando a biblioteca **Faker.js** para gerar dados de usuário válidos e únicos.
6.  **Finalização:** Confirma a compra e valida a mensagem de sucesso.

## 🛠️ Tecnologias Utilizadas

* **Linguagem:** JavaScript (Node.js v24)
* **Framework:** Cypress
* **BDD:** Cucumber (Gherkin)via `@badeball/cypress-cucumber-preprocessor V24.0`
* **Bibliotecas Auxiliares:**
    * `Faker.js` (Massa de dados)
    * `cypress-real-events` (Simulação de eventos nativos)
* **Estratégia de Seleção:** CSS Selectors e XPath

## 🚀 Como Executar

### Pré-Requisitos
É necessário ter o **Node.js** instalado (versão 16 ou superior).

### Instalação

1.  Baixe o projeto (via Git Clone ou extraindo o .zip).
2.  Abra a pasta do projeto no **VS Code**.
3.  No terminal do VS Code, instale as dependências:
    ```bash
    npm install
    ```

## Executando o Teste
Tem algumas maneiras de rodar o teste.
### Navegador (Recomendado)
1.  Abra o terminal e digite:
    ```bash
    npx cypress open
    ```
2.  Selecione a opção **"E2E Testing"**.
3.  Escolha o navegador de sua preferência (Chrome,Electron,Edge...).
4.  Na lista de testes (Specs), clique em **`CoffeeCart.feature`**.
---
### Terminal 
1. Abra o terminal e digite:
    ```bash
    npx cypress run
    ```
## 📂 Organização e Padrões

**Idioma e Nomenclatura:**
O projeto foi desenvolvido priorizando o **Português (PT-BR)** na escrita dos cenários (Gherkin) e na nomenclatura de arquivos/variáveis, visando clareza e facilidade de manutenção por times brasileiros. Termos em inglês foram mantidos apenas onde exigido pela sintaxe da linguagem ou ferramentas.

**Estrutura:**
O código segue o padrão **Page Object Model (POM)** para separar a lógica de interação da lógica de negócio.

---
Desenvolvido como parte do desafio técnico de QA.

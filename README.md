# Seja bem-vindo ao repositorio do projeto **Trybe Wallet**, a sua carteira digital.

O resultado dessa aplicação tem como finalidade, a criação de uma carteira digital para comprar e computar as cotações das moedas de vários países. Nesse aplicação o usuário poderá selecionar um ou mais moedas especifica e armazena-la na carteira em forma de despesa, além de;

* comprar moedas.
* converter tudo para uma única moeda.
* Verificar taxas.
* Verificar o valor total do conversão da moeda seleciona.
* O valor total de todas as moedas selecionadas, já com taxas e conversões já estabelecidas.

Com isso, o usuário também poderá;

* Criar outra despesa. Com tudo, possuindo uma lista de despesas em sua carteira.
* E ter a possibilidade de deletar um valor de uma lista selecionada. 

## Tecnologias e Linguagens utilizadas;

* **Javascript**.
* Biblioteca **React**;
* Manipulação do **Redux**.
* API que retorna as Cotações das Moedas.

## Documentação da API.

A aplicação esta consumindo a API da _**awesomeapi API de contações**_ para realizar a busca de câmbio de moedas, segue logo a baixo o _endpoint_ da API e um exemplo do que ele retorna:

`https://economia.awesomeapi.com.br/json/all`

O retorna desse endpoint terá esta estrutura:

```
{
   {
     "USD": {
       "code":"USD",
       "codein":"BRL",
       "name":"Dólar Comercial",
       "high":"5.6689",
       "low":"5.6071",
       "varBid":"-0.0166",
       "pctChange":"-0.29",
       "bid":"5.6173",
       "ask":"5.6183",
       "timestamp":"1601476370",
       "create_date":"2020-09-30 11:32:53"
       },
      ...
   }
}
```
 
## Instruções para instalar o projeto no seu computador.

### 1. Clonar o repositório:

* Na página no gihub click no botão verde titulado como `codes`.
* Selecione a opção 'SSH'.
 * Click no ícone de copiar.

### 2. Instalando no seu computador:

* Depois de ter feito a passo 1 vá no seu terminal.

* No local aonde você pretende instalar rode o comando `git clone` e logo após o endereço `SSH` que você copiou.

     EXEMPLO;

    `git clone git@github.com:PedroPDIN/project-Trybe-Wallet.git`

### 3. Nova branch:   

* Verifica se você esta na branch `main` ou `master`, com o comando `git branch`.
* Caso não esteja, execute o comando `git checkout main` ou `git checkout master`.
* Feito os passos anteriores criei uma branch através da `main` ou `master`, para acessar o projeto e talvez fazer atribuições.

EXEMPLO:
`git checkout -b nome-da-branch-trybe-wallet`

> O comando acima ira criar uma branch e acessa-lá no mesmo instante graças a tag "-b".

### 4. Instalando Dependências:

* Instale as dependências com o comando;

`npm install`

* Inicialize o projeto com o comando ;

`npm start`

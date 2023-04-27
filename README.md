# GithubRepoSearch

# Ferramentas e Bibliotecas
Eu desenvolvi o projeto utilizando as ferramentas e bibliotecas: Angular 13, Typescript, SCSS, RxJs e a API do Github.

Angular 13: primeiramente, o Angular é um framework completo para desenvolvimento web, que oferece muitas funcionalidades prontas e eficientes para a criação de aplicações robustas e escaláveis. Além disso, o Angular utiliza a linguagem Typescript, que é mais segura e robusta que o JavaScript puro.

O Typescript foi utilizado neste projeto por ser uma linguagem mais moderna que o JavaScript e que traz diversas vantagens em relação à segurança, legibilidade e manutenção do código. A utilização do Typescript permitiu a definição de tipos para as variáveis e funções, tornando o código mais fácil de ser mantido e debugado.

O SCSS foi escolhido por permitir a utilização de mixins e funções, o que torna a estilização mais organizada e fácil de ser mantida. O SCSS também permite a utilização de aninhamento de seletores, o que facilita a escrita do código CSS e torna a estilização mais intuitiva.

A API do Github foi utilizada para buscar informações sobre os repositórios e permitir a criação de um card para cada um deles.

# Princípios da Engenharia de Software
No desenvolvimento da aplicação, eu utilizei os princípios:

Modularidade: A aplicação foi desenvolvida de forma modular, o que torna o código mais fácil de ler e entender, além de facilitar a manutenção e correção de bugs.

Reutilização de código: Foram utilizados componentes e serviços para reutilizar o código e evitar repetição, o que torna a aplicação mais eficiente e fácil de manter.

Testes unitários: Foram criados testes unitários para os componentes e serviços da aplicação, garantindo que o código funcione corretamente e evitando problemas futuros.

# Desafios e Problemas
Durante o desenvolvimento, um dos principais desafios enfrentados foi a limitação de requisições da API do GitHub. A API permite um número limitado de requisições por hora, o que pode afetar o desempenho da aplicação caso não seja tratado corretamente. Para contornar esse problema, utilizei o timeBounce para limitar as requests apenas quando o usuário parar de digitar, geralmente chamado de bundle stick, isso evita requisições desnecessárias à API.

Outro desafio foi a implementação da paginação dos resultados. E busca por repositórios por nome. A comunicação e atualização dos dados entre os componentes foi algo a ser melhor pensado no momento do desenvolvimento.

# Melhorias
Outra melhoria seria o componente de pagination, melhorar a forma que ele funciona no geral, melhorar todos os testes feitos, melhorar a interface deixando ela mais moderna e bonita, deixar o card mais interessante, interativo e com mais informações. Cachear os dados padrão da api.
Entender melhor a questão dos tipos nos responses e não deixar como any.
Uma possível melhoria para a aplicação seria a implementação de uma funcionalidade de favoritos, permitindo que os usuários salvem repositórios interessantes para acessá-los posteriormente.

O projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




# JOVI Scene — Grupo Tróia

**Sprint 04 | Web Development + Front-End Design | FIAP**

Projeto desenvolvido pelo Grupo Tróia para o Challenge JOVI 2026 da FIAP.

O **JOVI Scene** apresenta o conceito de uma câmera inteligente e contextual, capaz de reconhecer diferentes situações de uso e oferecer funcionalidades adequadas ao momento do usuário.

A solução foi pensada principalmente para estudantes e jovens que desejam registrar experiências, produzir conteúdo e aprender utilizando recursos inteligentes.

A Sprint 04 representa a evolução da Sprint 03, preservando a landing page original e ampliando o projeto com autenticação demonstrativa, navegação por rotas, dashboard, integração com API e gerenciamento local de capturas.

## Demonstração publicada

**Vercel:** https://sprint04-troia-jovi.vercel.app/

**GitHub:** https://github.com/gimenezgui/sprint04-troia-jovi

## Funcionalidades

### Landing page

- Apresentação da solução JOVI Scene.
- Navegação responsiva.
- Seções de solução, público-alvo, galeria, demonstração, equipe e contato.
- Galeria com os modos Estudo, Social e Expressão.
- Demonstração interativa da câmera.
- Seleção dinâmica do contexto.
- Simulação de capturas com valores gerados por operações matemáticas.
- Histórico de capturas armazenado no navegador.
- Formulário de contato com armazenamento local.

### Autenticação demonstrativa

- Tela de login personalizada com identidade visual do Grupo Tróia.
- Identificação do usuário por nome.
- Gerenciamento do estado de autenticação utilizando Context API.
- Redirecionamento para o dashboard após o login.
- Rotas públicas e privadas.
- Funcionalidade de logout.

**Observação:** a autenticação é demonstrativa e não utiliza senhas, banco de dados ou validação de identidade em servidor.

### Dashboard

- Área personalizada para o usuário autenticado.
- Exibição do nome do usuário.
- Galeria demonstrativa com dados obtidos da API JSONPlaceholder.
- Integração de componentes com a interface de gerenciamento.
- Histórico de capturas simuladas.
- Navegação entre dashboard e demonstração.
- Funcionalidade de saída da conta.

### Histórico de capturas

- Registro das capturas simuladas.
- Armazenamento utilizando `localStorage`.
- Exibição de informações das capturas.
- Persistência dos registros após atualização da página.
- Opção de limpar o histórico.

## Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| React | Desenvolvimento da interface e componentes |
| JavaScript | Lógica e interatividade |
| Vite | Ambiente de desenvolvimento e build |
| React Router DOM | Navegação e gerenciamento de rotas |
| React Context API | Compartilhamento do estado de autenticação |
| Tailwind CSS | Estilização das interfaces |
| CSS3 | Identidade visual e estilos personalizados |
| HTML5 | Estrutura semântica |
| Fetch API | Consumo de dados externos |
| JSONPlaceholder | API pública para dados demonstrativos |
| localStorage | Persistência de informações no navegador |
| Git e GitHub | Versionamento e hospedagem do código |
| Vercel | Publicação da aplicação |

## Conceitos de React aplicados

O projeto utiliza componentes funcionais e uma arquitetura organizada para separar responsabilidades.

Entre os conceitos aplicados estão:

- Componentização.
- Comunicação entre componentes por props.
- `useState`.
- `useEffect`.
- `useContext`, por meio do contexto de autenticação.
- Hooks personalizados.
- Renderização condicional.
- Renderização de listas com `map()`.
- Formulários controlados.
- Eventos e manipulação de estado.
- Rotas públicas e privadas.
- Compartilhamento de estado utilizando Context API.
- Separação entre interface, lógica de negócio e serviços externos.

### Hooks personalizados

**useLocalStorage:** responsável por armazenar e recuperar informações do navegador.

**useCaptures:** utilizado para organizar a lógica relacionada às capturas simuladas.

## Integração com API

O dashboard realiza o consumo de uma API pública de terceiros:

https://jsonplaceholder.typicode.com/

A API JSONPlaceholder disponibiliza dados fictícios para desenvolvimento e testes.

No projeto, esses dados são utilizados para apresentar uma galeria demonstrativa no dashboard.

A integração permite demonstrar:

- Requisições HTTP.
- Consumo de dados externos.
- Manipulação de respostas JSON.
- Atualização dinâmica da interface.
- Renderização de registros obtidos da API.

Os dados retornados pela JSONPlaceholder são demonstrativos e não representam capturas reais realizadas pela câmera.

## Operações matemáticas

A demonstração da câmera utiliza funções nativas do JavaScript:

- `Math.random()` para gerar valores variáveis.
- `Math.round()` para arredondar resultados.
- Cálculos simulados de confiança da inteligência artificial.
- Cálculos estimados do tamanho dos arquivos.

Esses valores são utilizados exclusivamente para simular o comportamento da solução.

## Armazenamento local

O projeto utiliza a Web Storage API por meio do `localStorage`.

Entre as informações armazenadas localmente estão:

- Histórico de capturas simuladas.
- Mensagens registradas pelo formulário de contato.
- Informações demonstrativas relacionadas à experiência do usuário.

As capturas simuladas não são enviadas para a API JSONPlaceholder.

## Estrutura do projeto

```text
sprint04-troia-jovi/
├── public/
│   ├── jovi-express.png
│   ├── jovi-social.png
│   ├── jovi-study.png
│   └── troia-logo.png
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Demo.jsx
│   │   ├── Login.jsx
│   │   └── Dashboard.jsx
│   ├── services/
│   ├── utils/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── INTEGRANTES.TXT
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Pré-requisitos

Para executar o projeto localmente, é necessário possuir:

- Node.js instalado, em versão compatível com o Vite utilizado.
- npm.
- Navegador atualizado.
- Conexão com a internet para consultar a API externa.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/gimenezgui/sprint04-troia-jovi.git
```

Acesse a pasta do projeto:

```bash
cd sprint04-troia-jovi
```

Instale as dependências:

```bash
npm install
```

## Executando o projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse o endereço informado pelo Vite no terminal, normalmente:

http://localhost:5173/

Não é necessário iniciar um servidor de back-end próprio, pois a aplicação utiliza uma API pública externa e armazenamento local no navegador.

## Rotas disponíveis

| Rota | Descrição | Acesso |
|---|---|---|
| `/` | Landing page JOVI Scene | Público |
| `/demo` | Demonstração da solução | Público |
| `/login` | Login demonstrativo | Público |
| `/dashboard` | Área de gerenciamento | Autenticado |
| Outras rotas | Página não encontrada | Público |

## Acesso para avaliação

O projeto utiliza autenticação demonstrativa.

Para testar:

1. Acesse `/login`.
2. Informe um nome no campo solicitado.
3. Clique em **Entrar no JOVI Scene**.
4. O sistema redirecionará para o dashboard.
5. Utilize a opção **Sair da conta** para encerrar a sessão demonstrativa.

**Usuário:** qualquer nome informado pelo avaliador.

**Senha:** não necessária.

Não existem credenciais fixas nem autenticação real em servidor.

## Verificação do código

Para executar a análise estática:

```bash
npm run lint
```

## Build de produção

Para gerar a versão otimizada:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

## Deploy

A aplicação está publicada na Vercel, com código versionado no GitHub.

**Deploy:** https://sprint04-troia-jovi.vercel.app/

**Repositório:** https://github.com/gimenezgui/sprint04-troia-jovi

O deploy permite acessar a aplicação sem necessidade de instalação local.

## Uso de Inteligência Artificial

A inteligência artificial generativa foi utilizada como ferramenta de apoio durante o desenvolvimento acadêmico, auxiliando no planejamento da arquitetura React, organização dos componentes, implementação de funcionalidades, explicação de conceitos, revisão de código, diagnóstico de erros e sugestões de melhorias na interface.

As implementações foram acompanhadas de testes locais, verificações de funcionamento e validação do build pelo integrante responsável por Front-End e Web Development.

Além disso, a proposta conceitual do JOVI Scene explora o uso de inteligência artificial para reconhecimento de contextos de câmera. Nesta versão acadêmica, esse comportamento é representado por simulações, sem implementação de um modelo real de visão computacional.

## Integrantes

| Integrante | RM | Responsabilidade |
|---|---|---|
| Lucas Rodrigues dos Santos | 571778 | Storytelling |
| Vitor Assis | 572192 | Python |
| Guilherme Gimenez | 563389 | Front-End e Web Development |
| Raul Moreira | 571042 | Estruturação |
| Rafael de Souza | 568777 | Ideias |

## Contexto acadêmico

Projeto desenvolvido para o Challenge JOVI 2026 da FIAP, como entrega conjunta das disciplinas de **Web Development** e **Front-End Design**, referente à Sprint 04.

O projeto representa a evolução da solução apresentada na Sprint 03.

JOVI e suas marcas pertencem aos respectivos titulares.

# JOVI Scene — Grupo Tróia

Landing page interativa desenvolvida pelo Grupo Tróia para o Challenge JOVI 2026 da FIAP.

A JOVI Scene apresenta uma proposta de câmera contextual capaz de reconhecer diferentes momentos de uso e oferecer somente os recursos relevantes para cada situação.

## Demonstração publicada

https://sprint03-troia-webdev.vercel.app/

## Repositório

https://github.com/gimenezgui/sprint03-troia-webdev

## Funcionalidades

- Apresentação da proposta JOVI Scene
- Navegação responsiva para computadores e celulares
- Seção de solução e benefícios
- Galeria com modos de câmera
- Modo Estudo
- Modo Social
- Modo Expressão
- Demonstração interativa com seleção de contexto
- Simulação de capturas
- Geração aleatória de confiança e tamanho do arquivo
- Histórico de capturas armazenado no navegador
- Formulário de contato com armazenamento local
- Seções de público e integrantes
- Layout responsivo e acessível

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- HTML5
- CSS3
- Web Storage API — localStorage
- Git
- GitHub
- Vercel

## Conceitos de React aplicados

O projeto utiliza componentes funcionais e uma estrutura composta por componentes pais e filhos.

Também foram aplicados:

- Props
- useState
- useEffect
- Hook personalizado
- Renderização condicional
- Renderização de listas com `map()`
- Eventos de clique e envio de formulário
- Formulários controlados
- Importação e exportação de componentes e dados

## Operações matemáticas

A demonstração da câmera utiliza:

- `Math.random()` para gerar valores variáveis
- `Math.round()` para arredondar os resultados
- Cálculo de confiança da inteligência artificial
- Cálculo estimado do tamanho das capturas

## Armazenamento local

O hook `useLocalStorage` é responsável por salvar e recuperar informações do navegador.

São armazenados localmente:

- Histórico das capturas simuladas
- Mensagens registradas pelo formulário de contato

Nenhuma informação é enviada para servidores externos.

## Estrutura do projeto

```text
sprint03-troia-webdev/
├── public/
│   ├── jovi-express.png
│   ├── jovi-social.png
│   ├── jovi-study.png
│   └── troia-logo.png
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── utils/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── INTEGRANTES.TXT
├── index.html
├── package.json
└── README.md
```

## Instalação

É necessário ter o Node.js e o npm instalados.

Clone o repositório:

```bash
git clone https://github.com/gimenezgui/sprint03-troia-webdev.git
```

Entre na pasta:

```bash
cd sprint03-troia-webdev
```

Instale as dependências:

```bash
npm install
```

## Executando o projeto

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador o endereço informado pelo Vite, normalmente:

```text
http://localhost:5173
```

## Verificação do código

Execute a análise do código:

```bash
npm run lint
```

## Build de produção

Gere a versão otimizada:

```bash
npm run build
```

Para testar o build localmente:

```bash
npm run preview
```

## Credenciais

O projeto não possui autenticação e não necessita de usuário ou senha.

## Uso de Inteligência Artificial

A inteligência artificial foi utilizada como ferramenta de apoio durante o desenvolvimento, auxiliando no planejamento da estrutura do projeto, revisão da componentização, sugestões de interface, explicações sobre React e identificação de possíveis melhorias no código. Todas as etapas foram executadas, testadas e revisadas pelo integrante responsável por Front-end e Web Development, garantindo a compreensão das soluções implementadas.

## Integrantes

| Integrante | RM | Responsabilidade |
|---|---:|---|
| Lucas Rodrigues dos Santos | 571778 | Storytelling |
| Vitor Assis | 572192 | Python |
| Guilherme Gimenez | 563389 | Front-end e Web Development |
| Raul Moreira | 571042 | Estruturação |
| Rafael de Souza | 568777 | Ideias |

## Contexto acadêmico

Projeto acadêmico independente desenvolvido para o Challenge JOVI 2026 da FIAP.

JOVI e suas marcas pertencem aos respectivos titulares.
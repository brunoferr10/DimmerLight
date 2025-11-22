#  ArrumAi – Reformas & Obras Inteligentes

##  Sobre o Projeto

O projeto ArrumAi foi desenvolvido nas disciplinas integradas da GS – Front-End Design Engineering da FIAP.

O objetivo é conectar clientes a profissionais de obras, reformas e serviços gerais de forma rápida, eficiente e segura — proporcionando acessibilidade, praticidade e transparência para ambos os lados.

Durante a GS, o sistema foi reestruturado para utilizar React + Vite + TypeScript, implementando uma SPA (Single Page Application) moderna, performática e responsiva.

A aplicação é totalmente integrada à API em Java (Domain Driven Design) hospedada no Render, garantindo CRUD completo para todas as entidades do sistema, incluindo Clientes, Contratados, Pagamentos, Seguros, Serviços e Feedbacks.

---

##  Tecnologias Utilizadas
-  **React + Vite + TypeScript** → estrutura moderna e tipada  
-  **TailwindCSS** → estilização e responsividade  
-  **React Router DOM** → navegação SPA  
-  **Fetch API** → consumo da API Java (CRUD completo)  
-  **Git / GitHub / GitFlow** → versionamento e colaboração da equipe  

---

##  Integrantes
| Nome | RM | Turma |
|------|----|--------|
| **Bruno Ferreira** | 563489 | 1TDSR |
| **Gabriel Robertoni Padilha** | 566293 | 1TDSR |
| **Leonardo Aragaki Rodrigues** | 562944 | 1TDSR |

---

##  Acesso ao Sistema

Login padrão para testes:

-  **E-mail:** `admin@arrumai.com`  
-  **Senha:** `123456`


---

##  Imagens e Ícones

###  Página Inicial
![Home](./src/assets/fotoHome.jpeg)

###  Página de Integrantes
<img src="./src/assets/Bruno.jpeg" alt="Bruno Ferreira" width="180"/>  
<img src="./src/assets/Gabriel.jpeg" alt="Gabriel Robertoni" width="180"/>  
<img src="./src/assets/leonardo.jpeg" alt="Leonardo Aragaki" width="180"/>

---

##  Estrutura de Pastas

ARRUMAI-FRONTEND/
│
├── src/ # Código-fonte principal
│ ├── assets/ # Imagens e ícones do projeto
│ │ ├── Bruno.jpeg # Foto integrante 1
│ │ ├── Gabriel.jpeg # Foto integrante 2
│ │ ├── leo.jpeg # Foto integrante 3
│ │ ├── logo.jpeg # Logotipo do projeto
│ │ └── fotoHome.jpeg # Imagem tela home
│ │
│ ├── components/ # Componentes reutilizáveis
│ │ ├── Header.tsx
│ │ ├── Footer.tsx
│ │ ├── HeaderPainel.tsx
│ │ ├── ThemeSwitch.tsx
│ │ └── PrivateRoute.tsx
│ │
│ ├── pages/ # Páginas principais do projeto
│ │ ├── login/ # Página de login (acesso inicial)
│ │ │ └── Login.tsx
│ │ │
│ │ ├── painel/ # Painel do sistema (área restrita)
│ │ │ ├── clientes/ # CRUD Clientes
│ │ │ │ └── Clientes.tsx
│ │ │ ├── contratados/ # CRUD Profissionais
│ │ │ │ └── Contratados.tsx
│ │ │ ├── feedback/ # CRUD Feedbacks
│ │ │ │ └── FeedbackPage.tsx
│ │ │ ├── pagamentos/ # CRUD Pagamentos
│ │ │ │ └── Pagamentos.tsx
│ │ │ ├── seguros/ # CRUD Seguros
│ │ │ │ └── Seguros.tsx
│ │ │ ├── servicos/ # CRUD Serviços (tabela principal)
│ │ │ │ └── Servicos.tsx
│ │ │ ├── HomePainel.tsx # Página inicial do painel
│ │ │ ├── PainelLayout.tsx # Layout base do painel
│ │ │ └── PainelPage.tsx # Gerenciador das rotas internas
│ │ │
│ │ ├── Home.tsx # Página inicial (landing page)
│ │ ├── FAQ.tsx # Perguntas frequentes
│ │ ├── Contato.tsx # Página de contato
│ │ ├── Integrantes.tsx # Lista de integrantes
│ │ └── IntegranteDetalhe.tsx# Detalhes dos integrantes
│ │
│ ├── App.tsx # Estrutura principal da aplicação
│ ├── main.tsx # Ponto de entrada do React
│ ├── index.css # Estilos globais
│ └── vite-env.d.ts # Tipagem do ambiente Vite
│
├── package.json # Dependências do projeto
├── tsconfig.json # Configuração do TypeScript
├── tailwind.config.js # Configuração do TailwindCSS
├── vite.config.ts # Configuração do Vite
├── .gitignore # Ignora node_modules e arquivos desnecessários
└── README.md # Este arquivo
---

##  Links Importantes

###  Repositório GitHub  
 [https://github.com/brunoferr10/GS_Front-End.git](https://github.com/brunoferr10/GS_Front-End.git)

###  Deploy na Vercel  
 

###  Vídeo de Apresentação (YouTube)  
 

---

##  Integrações
O projeto consome endpoints da **API em Java hospedada no Render**, realizando operações **CRUD completas** com integração direta ao banco de dados Oracle.

---

### Entidades Integradas:
- Clientes  
- Contratados  
- Serviços  
- Pagamentos  
- Seguros 
- Feedbacks  

---

##  Conclusão

O projeto ArrumAi representa a integração entre múltiplas disciplinas da FIAP, unindo:

Front-End com React + Tailwind

Back-End com Java + API REST

Banco de Dados Relacional (Oracle)

Boas práticas de design, responsividade e acessibilidade

GS — Front-End Design Engineering
Foco: Integração, usabilidade e sistema de gestão para obras e serviços.

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
├── src/                     # Código-fonte principal
│ │
│ ├── assets/                # Imagens e ícones do projeto
│ │ ├── Bruno.jpeg
│ │ ├── Gabriel.jpeg
│ │ ├── leonardo.jpeg
│ │ ├── logo.jpeg
│ │ └── fotoHome.jpeg
│ │
│ ├── components/            # Componentes reutilizáveis
│ │ ├── Header.tsx
│ │ ├── HeaderPainel.tsx
│ │ ├── Footer.tsx
│ │ ├── ThemeSwitch.tsx
│ │ └── PrivateRoute.tsx
│ │
│ ├── contexts/              # Contextos globais da aplicação
│ │ ├── AuthContext.tsx      # Autenticação + login
│ │ └── ThemeContext.tsx     # Tema (dark/light)
│ │
│ ├── pages/                 # Páginas principais
│ │ ├── Home/                # Página inicial (Landing Page)
│ │ │ └── Home.tsx
│ │ │
│ │ ├── Integrantes/
│ │ │ └── Integrantes.tsx
│ │ │
│ │ ├── Sobre/
│ │ │ └── Sobre.tsx
│ │ │
│ │ ├── FAQ/
│ │ │ └── FAQ.tsx
│ │ │
│ │ ├── Contato/
│ │ │ └── Contato.tsx
│ │ │
│ │ ├── Login/
│ │ │ └── Login.tsx
│ │ │
│ │ ├── Painel/              # Área logada com CRUDs integrados à API
│ │ │ ├── PainelLayout.tsx
│ │ │ ├── HomePainel.tsx
│ │ │ ├── Clientes/
│ │ │ │ └── Clientes.tsx
│ │ │ ├── Servicos/
│ │ │ │ └── Servicos.tsx
│ │ │ ├── Contratados/
│ │ │ │ └── Contratados.tsx
│ │ │ ├── Pagamentos/
│ │ │ │ └── Pagamentos.tsx
│ │ │ ├── Seguros/
│ │ │ │ └── Seguros.tsx
│ │ │ └── Feedback/
│ │ │    └── Feedback.tsx
│ │
│ ├── App.tsx                # Estrutura principal do React Router
│ ├── main.tsx               # Ponto de entrada da aplicação
│ ├── index.css              # Estilos globais
│ └── vite-env.d.ts          # Tipagem Vite
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
├── .gitignore
└── README.md                # Este arquivo

---

##  Links Importantes

###  Repositório GitHub  
 [https://github.com/brunoferr10/GS_Front-End.git](https://github.com/brunoferr10/GS_Front-End.git)

###  Deploy na Vercel  
 [https://gs-front-end-one.vercel.app/](https://gs-front-end-one.vercel.app/)

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

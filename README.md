# 🪐 Solar System Explorer

Exploração interativa e imersiva do Sistema Solar com representações 3D realistas, efeitos visuais cativantes e conteúdo educativo.

![Preview](https://github.com/jhonywsantos/FRONTEND-Project/blob/main/preview.png?raw=true)  
*Imersão 3D no Sistema Solar via navegador*

---

## 🌌 Sobre o Projeto

O **Solar System Explorer** é uma aplicação front-end desenvolvida com foco em interatividade, educação e design espacial responsivo. A proposta oferece:

- Representações realistas em 3D dos planetas
- Animações suaves com transições dinâmicas
- Curiosidades, histórias mitológicas e dados científicos sobre os corpos celestes
- Experiência adaptada para diferentes dispositivos (mobile, tablet, desktop)

🔗 [Acesse a demonstração online](https://jhonywsantos.github.io/FRONTEND-Project/)  
📦 [Código-fonte no GitHub](https://github.com/jhonywsantos/FRONTEND-Project)

---

## 🛠️ Tecnologias Utilizadas

### 🔧 Core
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SCSS](https://img.shields.io/badge/-SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Haml](https://img.shields.io/badge/-Haml-ECE2C6?style=for-the-badge&logo=haml&logoColor=black)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### ✨ Destaques Técnicos

- **CSS 3D Transforms** para simulações espaciais
- **GSAP ou Anime.js** para animações (assumido pelos efeitos visuais)
- **Intersection Observer API** para detecção de rolagem e animações ativadas dinamicamente

---
### 🪐 Experiência 3D
- Animações orbitais em torno do sol
- Efeitos de sombra e iluminação realistas
- Transições suaves entre planetas e luas

### 📚 Conteúdo Educativo
- Seções “Leia mais” com:
  - História mitológica de cada planeta
  - Curiosidades científicas e culturais
  - Comparações visuais de tamanho e distância

### 🎛️ Controles Interativos
- Zoom e rotação dos planetas em 3D
- Alternância de modos claro/escuro para simular observação noturna
- Navegação fluida entre as seções com rolagem assistida
---

## 🚀 Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/jhonywsantos/FRONTEND-Project.git

# Acesse o diretório
cd FRONTEND-Project

# (Opcional) Instale dependências, se houver
npm install  # ou yarn install

# Execute um servidor local ou abra o index.html diretamente
npx serve .  # ou apenas clique duas vezes no arquivo index.html

FRONTEND-Project/
├─ assets/
│   ├─ img/              # Imagens e elementos gráficos
│   └─ js/               # Scripts de interatividade e responsividade
│      └─ style.css      # Estilos principais
├─ index.html            # Página inicial
└─ README.md             # Documentação do projeto

# 🧠 DRYTERN

**DRYTERN** é uma central de ferramentas educacionais que reúne scripts e bookmarklets para automatizar e melhorar sua experiência em plataformas como **AVA - Educação Profissional (CMSP)**, **Khanware**, **Nuggets** e acesso rápido às **apostilas online**.

> 📌 Ideal para estudantes de ensino técnico que buscam praticidade, agilidade e automação no ambiente virtual de aprendizagem.

---

## 🔗 Acesse agora

🌐 [https://xpratax.github.io/drytern](https://xpratax.github.io/drytern)

---

## 🚀 Funcionalidades

- ✅ **Bookmarklet para AVA (Educação Profissional - CMSP)**  
  Automatize interações, ganhe tempo com respostas rápidas e melhorias de navegação.

- ✅ **Khanware Bookmarklet**  
  Adiciona recursos extras à plataforma Khanware com um simples clique.

- ⚠️ **Nuggets** *(atualmente fora do ar)*  
  Script planejado para facilitar o acesso e controle dos módulos Nuggets.

- ✅ **Acesso direto às apostilas online**  
  Interface limpa com todos os materiais organizados em um só lugar.

---

## 🛠️ Como usar os bookmarklets?

1. Copie o código JavaScript fornecido em cada seção do site.
2. Abra os favoritos do seu navegador.
3. Crie um novo favorito.
4. No campo **URL**, cole o código copiado.
5. Salve.
6. Acesse a plataforma desejada e clique no bookmarklet.

---

## 💻 Tecnologias Utilizadas

- **HTML5**
- **CSS3 (Neon Theme + Terminal Style)**
- **JavaScript Puro**
- **GitHub Pages** para hospedagem

---

## 📸 Visual da Interface

![Preview](https://i.postimg.cc/tYJvhCrJ/images.jpg)

---

## 📁 Repositórios relacionados

- [Educacao-Profissional-Cheeto (Bookmarklet AVA)](https://github.com/marcos10pc/Educacao-Profissional-Cheeto)
- [Khanware Bookmarklet Script](https://github.com/Niximkk/Khanware)
- [Apostilas CMSP Viewer](https://apostilas-cmsp.vercel.app/)

---

## 📢 Avisos

- O projeto **não é afiliado oficialmente ao CMSP ou às plataformas mencionadas**.
- Scripts são fornecidos **para fins educacionais** e de **uso pessoal**.
- Use com responsabilidade.

---

## 📬 Contribua!

Sinta-se à vontade para abrir issues, sugerir melhorias ou enviar um pull request. Toda ajuda é bem-vinda!

---

## 🔒 Licença

Este projeto está licenciado sob a **MIT License** – consulte o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👤 Autor

**Xpratax**  
🔗 [GitHub](https://github.com/xpratax)  
📫 Contato: *adicione aqui se quiser, como e-mail ou Discord*

---

> “DRYTERN é sobre estudar de forma inteligente, não mais difícil.”

---
| Arquivo                 | Adicionar ao repo? | Observações                   |
| ----------------------- | ------------------ | ----------------------------- |
| `README.md`             | ✅                  | Já pronto                     |
| `LICENSE`               | ✅                  | Licença MIT pública           |
| `sitemap.xml`           | ✅                  | Para SEO e Google indexing    |
| `manifest.json`         | ✅                  | Para modo app / PWA           |
| `robots.txt`            | ✅                  | Para liberar indexação        |
| `<link rel="manifest">` | ✅                  | No `<head>` do HTML principal |
| Google Search Console   | 🔜                 | Use sua URL e sitemap         |

---
## ♿ Bookmarklet: Mod Menu de Acessibilidade para DRYTERN

Este bookmarklet adiciona um menu flutuante para alterar rapidamente o tema do site, melhorando a experiência para usuários com necessidades visuais específicas, como **miopia** e **epilepsia**.

### 🔍 Por que isso ajuda?

- **Miopia**: Facilita a leitura com temas mais claros e alto contraste, reduzindo o esforço visual.
- **Epilepsia**: Minimiza efeitos visuais agressivos, como brilhos neon e animações rápidas, que podem desencadear crises.
- **Inclusão**: Permite que cada usuário escolha o tema que melhor se adapta à sua visão, aumentando a acessibilidade e conforto durante o uso do site.

---

### 📌 Como usar o bookmarklet

1. Copie o código abaixo.
2. Abra seus favoritos no navegador.
3. Crie um novo favorito.
4. No campo **URL**, cole o código copiado.
5. Nomeie o favorito (ex: `DRYTERN Acessibilidade`).
6. Acesse o site DRYTERN e clique no favorito para ativar o menu.

---

<details>
<summary><strong>📋 Código do Bookmarklet (Clique para expandir)</strong></summary>

```javascript
javascript:(function(){
  if(document.getElementById('drytern-accessibility-menu')) return;

  const style = document.createElement('style');
  style.textContent = `
    #drytern-accessibility-menu {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #222;
      color: #eee;
      border-radius: 10px;
      padding: 15px 20px;
      z-index: 99999;
      font-family: Arial, sans-serif;
      font-size: 14px;
      box-shadow: 0 0 12px rgba(0,0,0,0.7);
      user-select: none;
      max-width: 180px;
    }
    #drytern-accessibility-menu button {
      display: block;
      width: 100%;
      margin: 8px 0;
      padding: 8px 10px;
      border: none;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    #drytern-accessibility-menu button:hover {
      filter: brightness(1.2);
    }
    #drytern-accessibility-menu .light {
      background: #f0f0f0;
      color: #222;
    }
    #drytern-accessibility-menu .dark {
      background: #121212;
      color: #eee;
    }
    #drytern-accessibility-menu .high-contrast {
      background: #000;
      color: #ff0;
      border: 2px solid #ff0;
    }
    #drytern-accessibility-menu .low-brightness {
      background: #111;
      color: #ccc;
    }
    #drytern-accessibility-menu .reset {
      background: #555;
      color: #eee;
    }
    #accessibility-toggle {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 99998;
      background: #222;
      color: #eee;
      border: none;
      border-radius: 50px;
      padding: 10px 16px;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 0 10px rgba(0,0,0,0.6);
      user-select: none;
    }
  `;
  document.head.appendChild(style);

  // Botão para abrir/fechar o menu
  const toggle = document.createElement('button');
  toggle.id = 'accessibility-toggle';
  toggle.textContent = '♿ Acessibilidade';
  document.body.appendChild(toggle);

  // Menu de opções
  const menu = document.createElement('div');
  menu.id = 'drytern-accessibility-menu';
  menu.style.display = 'none';
  menu.innerHTML = `
    <button class="light" title="Tema Claro - Facilita leitura para miopia">🌞 Tema Claro</button>
    <button class="dark" title="Tema Escuro - Conforto para ambientes escuros">🌑 Tema Escuro</button>
    <button class="high-contrast" title="Alto Contraste - Destaca elementos para baixa visão">⚡ Alto Contraste</button>
    <button class="low-brightness" title="Baixa Luminosidade - Reduz brilhos e flashes para epilepsia">🌙 Baixa Luminosidade</button>
    <button class="reset" title="Voltar ao tema original">🔄 Resetar Tema</button>
  `;
  document.body.appendChild(menu);

  toggle.onclick = () => {
    menu.style.display = (menu.style.display === 'none') ? 'block' : 'none';
  };

  // Funções para cada tema
  menu.querySelector('.light').onclick = () => {
    document.body.style.background = '#f9f9f9';
    document.body.style.color = '#222';
    clearCustomStyles();
  };
  menu.querySelector('.dark').onclick = () => {
    document.body.style.background = '#121212';
    document.body.style.color = '#eee';
    clearCustomStyles();
  };
  menu.querySelector('.high-contrast').onclick = () => {
    document.body.style.background = '#000';
    document.body.style.color = '#ff0';
    clearCustomStyles();
    // Aplica bordas amarelas e destaque para todos os elementos
    document.querySelectorAll('*').forEach(el => {
      el.style.borderColor = '#ff0';
      el.style.borderStyle = 'solid';
      el.style.borderWidth = '1px';
      el.style.backgroundColor = 'transparent';
      el.style.color = '#ff0';
    });
  };
  menu.querySelector('.low-brightness').onclick = () => {
    document.body.style.background = '#111';
    document.body.style.color = '#ccc';
    clearCustomStyles();
    // Remove brilhos e efeitos neon (exemplo simples)
    document.querySelectorAll('*').forEach(el => {
      el.style.textShadow = 'none';
      el.style.boxShadow = 'none';
      el.style.filter = 'none';
      el.style.backgroundColor = 'transparent';
    });
  };
  menu.querySelector('.reset').onclick = () => {
    location.reload();
  };

  // Remove estilos extras para reset
  function clearCustomStyles() {
    document.querySelectorAll('*').forEach(el => {
      el.style.border = '';
      el.style.borderColor = '';
      el.style.borderStyle = '';
      el.style.borderWidth = '';
      el.style.backgroundColor = '';
      el.style.color = '';
      el.style.textShadow = '';
      el.style.boxShadow = '';
      el.style.filter = '';
    });
  }
})();


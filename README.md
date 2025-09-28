# 🧠 DRYTERN - Atualização 28/09/2025

**DRYTERN** é a central de ferramentas educacionais e cheats que otimiza sua experiência em plataformas como **AVA (CMSP)**, **Khanware**, **Nuggets** e **apostilas online**.

---

## 📅 Novidades desta atualização

- **🎮 CtrlVex Bookmarklet**: novo script que permite copiar e colar em páginas que bloqueiam essas ações.  
- **🐉 ASCII Mortal Kombat**: novo visual na página de manutenção com o dragão do Mortal Kombat em neon verde.  
- **⏳ Página de carregamento/manutenção**: adicionada animação e efeito neon enquanto a página principal está carregando.  
- **🎨 Melhorias visuais**: ajustes em cores, neon e sombras no layout principal.  
- **♿ Bookmarklet de Acessibilidade**: menu flutuante para alterar tema, contraste e luminosidade para inclusão de usuários com necessidades visuais.

---

## 🔗 Acesse o site

🌐 [https://xpratax.github.io/DRYTERN/](https://xpratax.github.io/DRYTERN/)

---

## 🚀 Funcionalidades principais

- ✅ **AVA Bookmarklet (Educação Profissional - CMSP)**: automatiza interações e respostas.  
- ✅ **Khanware Bookmarklet**: recursos extras na plataforma.  
- ✅ **CtrlVex**: habilita copiar e colar mesmo em sites que bloqueiam.  
- ⚠️ **Nuggets**: ainda em manutenção, instruções de acesso via Instagram.  
- ✅ **Acesso direto às apostilas online**: interface limpa e organizada.  
- 🖌️ **ASCII art e visual neon**: página de manutenção estilizada com o símbolo do Mortal Kombat.

---

## 🛠️ Como usar os bookmarklets

1. Copie o código JavaScript fornecido em cada seção do site.  
2. Abra os favoritos do navegador.  
3. Crie um novo favorito.  
4. Cole o código no campo **URL**.  
5. Salve e clique quando estiver na plataforma desejada.

---

## 💻 Tecnologias utilizadas

- **HTML5 + CSS3 Neon**  
- **JavaScript Puro**  
- **GitHub Pages** (hospedagem)  
- **PWA / Manifest** para instalação como app  

---

## 📸 Visual da Interface

![Preview](https://i.postimg.cc/tYJvhCrJ/images.jpg)

---

## 📁 Repositórios relacionados

- [Educacao-Profissional-Cheeto](https://github.com/marcos10pc/Educacao-Profissional-Cheeto)  
- [Khanware Bookmarklet](https://github.com/Niximkk/Khanware)  
- [Apostilas CMSP Viewer](https://apostilas-cmsp.vercel.app/)  

---

## 📢 Avisos

- **DRYTERN não é afiliado oficialmente ao CMSP ou plataformas mencionadas.**  
- Scripts são **apenas para fins educacionais e pessoais**.  
- Use com responsabilidade.

---

## ♿ Bookmarklet: Mod Menu de Acessibilidade para DRYTERN

Este bookmarklet adiciona um menu flutuante para alterar rapidamente o tema do site, melhorando a experiência para usuários com necessidades visuais específicas, como **miopia** e **epilepsia**.

### 🔍 Benefícios

- **Miopia**: Facilita a leitura com temas mais claros e alto contraste.  
- **Epilepsia**: Minimiza efeitos visuais agressivos, como brilhos neon e animações rápidas.  
- **Inclusão**: Cada usuário escolhe o tema que melhor se adapta à sua visão.

### 📌 Como usar

1. Copie o código do bookmarklet de acessibilidade.  
2. Abra seus favoritos no navegador.  
3. Crie um novo favorito.  
4. Cole o código no campo **URL**.  
5. Nomeie o favorito, ex: `DRYTERN Acessibilidade`.  
6. Acesse DRYTERN e clique no favorito para ativar o menu.

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
    #drytern-accessibility-menu .light { background: #f0f0f0; color: #222; }
    #drytern-accessibility-menu .dark { background: #121212; color: #eee; }
    #drytern-accessibility-menu .high-contrast { background: #000; color: #ff0; border: 2px solid #ff0; }
    #drytern-accessibility-menu .low-brightness { background: #111; color: #ccc; }
    #drytern-accessibility-menu .reset { background: #555; color: #eee; }
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

  const toggle = document.createElement('button');
  toggle.id = 'accessibility-toggle';
  toggle.textContent = '♿ Acessibilidade';
  document.body.appendChild(toggle);

  const menu = document.createElement('div');
  menu.id = 'drytern-accessibility-menu';
  menu.style.display = 'none';
  menu.innerHTML = `
    <button class="light" title="Tema Claro">🌞 Tema Claro</button>
    <button class="dark" title="Tema Escuro">🌑 Tema Escuro</button>
    <button class="high-contrast" title="Alto Contraste">⚡ Alto Contraste</button>
    <button class="low-brightness" title="Baixa Luminosidade">🌙 Baixa Luminosidade</button>
    <button class="reset" title="Voltar ao tema original">🔄 Resetar Tema</button>
  `;
  document.body.appendChild(menu);

  toggle.onclick = () => { menu.style.display = (menu.style.display === 'none') ? 'block' : 'none'; };

  menu.querySelector('.light').onclick = () => { document.body.style.background = '#f9f9f9'; document.body.style.color = '#222'; clearCustomStyles(); };
  menu.querySelector('.dark').onclick = () => { document.body.style.background = '#121212'; document.body.style.color = '#eee'; clearCustomStyles(); };
  menu.querySelector('.high-contrast').onclick = () => { document.body.style.background = '#000'; document.body.style.color = '#ff0'; clearCustomStyles(); document.querySelectorAll('*').forEach(el => { el.style.borderColor = '#ff0'; el.style.borderStyle = 'solid'; el.style.borderWidth = '1px'; el.style.backgroundColor = 'transparent'; el.style.color = '#ff0'; }); };
  menu.querySelector('.low-brightness').onclick = () => { document.body.style.background = '#111'; document.body.style.color = '#ccc'; clearCustomStyles(); document.querySelectorAll('*').forEach(el => { el.style.textShadow = 'none'; el.style.boxShadow = 'none'; el.style.filter = 'none'; el.style.backgroundColor = 'transparent'; }); };
  menu.querySelector('.reset').onclick = () => { location.reload(); };

  function clearCustomStyles() {
    document.querySelectorAll('*').forEach(el => { el.style.border = ''; el.style.borderColor = ''; el.style.borderStyle = ''; el.style.borderWidth = ''; el.style.backgroundColor = ''; el.style.color = ''; el.style.textShadow = ''; el.style.boxShadow = ''; el.style.filter = ''; });
  }
})();


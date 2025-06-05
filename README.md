
# 🧠 Anotações - React

## 📦 Componentes
- Todo componente é uma função ❗  
- Começa com letra maiúscula 🆙  
- Exporta no final ou direto com `export const` 🛫  
- Recebe props como **parâmetros** 🧳  

### 🧾 `Card`

<Card id={} paragraph={} details={} />


* Props: `id`, `paragraph`, `details`
* Exibe infos num `div` com `h1` + `p` 🧱
  🔁 Pode criar vários cards mudando só os dados!

---

## 🧱 Layout

* `Layout` encapsula **estrutura fixa** 🧍‍♂️
* Usa `children` → tudo que estiver **dentro da tag Layout** ✨
* Padrão:

```tsx
<Layout>
  {/* conteúdo aqui */}
</Layout>
```

### Estrutura do Layout:

```
Header
⬇️
children (conteúdo dinâmico)
⬇️
Footer
```

---

## 🖼️ `Header` & `Footer`

* São **componentes fixos** 🛑
* Reusáveis e organizam a página 📐
* Exemplo de uso dentro do `Layout`

---

## 💡 Dica Final

🔃 Tudo que é componente pode ser importado/exportado
🪄 `children` serve pra **abrir e fechar** o componente com conteúdo dentro

---

📁 Projeto simples mas mostra:

* Criação 🏗️
* Organização 🗂️
* Reutilização de componentes ♻️

👨‍💻 Feito por: **Nathan Alencar**

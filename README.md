# App - Expo e React Native

## Tecnologias Utilizadas

* **Mobile Framework:** [React Native](https://reactnative.dev/) com [Expo](https://expo.dev/) (Expo Router)
* **Linguagem:** TypeScript
* **Gerenciamento de Navegação:** Expo Router (File-based routing)
* **Consumo de API:** [Axios](https://axios-http.com/)
* **Armazenamento Seguro:** `expo-secure-store` (Persistência do token JWT)
* **Mídia:** `expo-image-picker` (Upload de fotos da galeria)
* **Backend:** REST API hospedada no Render (`https://api-contatos-auth-04-09-25.onrender.com`)

## Funcionalidades

- [x] **Autenticação:** Cadastro e login de usuários com geração de Token JWT.
- [x] **Gerenciamento de Contatos (CRUD):**
  - Listagem de contatos em tela única via `FlatList`.
  - Cadastro de novos contatos com upload de foto de perfil.
  - Edição e visualização dos detalhes de cada contato.
  - Exclusão de contatos.
- [x] **Tratamento de Mídia:** Suporte a fotos de perfil remotas e imagem padrão (`profile-picture.png`) caso o contato não possua foto cadastrada.

|      Cadastro        | Listagem de contatos |
|:--------------------:|:--------------------:|
| <img width="246" height="506" alt="cadastro" src="https://github.com/user-attachments/assets/71367d55-400c-4b1e-8982-8f0aa171dcdc" /> | <img width="246" height="506" alt="listagem" src="https://github.com/user-attachments/assets/0f9b03c4-0ce6-4d9f-a282-b1a70354d9d2" /> |

#  Portal de Notícias

Este é um projeto de um portal de notícias moderno e responsivo, desenvolvido como um exercício prático de React para o consumo de APIs externas. O projeto utiliza a [NewsData.io](https://newsdata.io/) como fonte de dados, permitindo a exploração de notícias em tempo real, filtragem por categorias e pesquisa por termos específicos.

##  Tecnologias Utilizadas

*   **React:** Biblioteca principal para construção da interface.
*   **NewsData.io API:** Fonte de dados para notícias.
*   **CSS Modular:** Estilização baseada em componentes com suporte a estilos globais.
*   **JavaScript (ES6+):** Lógica da aplicação e manipulação de dados.
*   **Hooks do React:** `useState`, `useEffect` para gerenciamento de estado e ciclo de vida.

##  Estrutura do Projeto

O projeto segue uma arquitetura modular para facilitar a manutenção e escalabilidade:

*   `components/`: Componentes reutilizáveis (Cards, Carrosséis, Barras de Busca).
*   `pages/`: Estrutura das diferentes rotas da aplicação (Home, Busca, Categorias).
*   `services/`: Centralização das chamadas à API de notícias.
*   `hooks/`: Lógica customizada para buscar dados.
*   `utils/`: Funções auxiliares (formatação de datas, truncamento de texto).
*   `index.css`: Arquivo de estilo global (variáveis de cores, fontes e reset).

##  Como Funciona

1.  **Requisições:** As chamadas à API são centralizadas em um serviço (`newsApi.js`).
2.  **Estado:** O estado global da aplicação é gerenciado através de hooks, garantindo que a interface reaja às mudanças de filtros.
3.  **Filtragem:** É possível buscar notícias por palavras-chave (`q`) e filtrar por diversas categorias (como `technology`, `business`, `science`, etc).
4.  **Segurança:** A chave da API (`API_KEY`) deve ser configurada em variáveis de ambiente (`.env`) para garantir que dados sensíveis não fiquem expostos no código-fonte.

##  Como rodar o projeto

1.  Clone este repositório:
    ```bash
    git clone https://github.com/diegotamiozzo/react-api-noticia.git
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Crie um arquivo `.env` na raiz e adicione sua chave de API:
    ```text
    VITE_NEWS_API_KEY=sua_chave_aqui
    ```
4.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

##  Desenvolvido por:
Diego Tamiozzo
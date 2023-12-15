<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">Sentinela Urbana</h3>

  <p align="center">
    Esse é o front-end do Sentinela Urbana. Um sistema de código aberto para vigilância e proteção da população. O projeto foi desenvolvido no sexto semestre de Análise e Desenvolvimento de Sistemas do IFSP Caraguatatuba. Os métodos utilizados foram planejados para o desenvolvimento de uma estrutura leve e de simples implementação e depuração.
    <br />
  </p>
</div>



  ## Conteúdo:
  - [Funções](#features)
  - [Como usar](#quick-start)
    - [Dependências](#dependences)
    - [Identidade visual](#visual)
    - [Requests](#requests)
    - [Rotas](#bus-lines)
  - [Recomendações](#recommendations)

  ## <a name="features"></a>Funções
  Esse aplicativo:
  - Envia um pedido de moritoramento;
  - Apresenta o horário;
  - Apresenta a temperatura de acordo com a previsão do tempo;
  - Apresenta as rotas locais que passam por determinado local.

  ## <a name="quick-start"></a>Como Usar
  
  ### <a name="dependences"></a>Dependências

  Construído com **[React Native](https://reactnative.dev/)** na versão 0.72.5
  
  Esse projeto é desenvolvido com o [Expo](https://expo.dev/) na versão 49.0.13, versões inferiores podem apresentar vulnerabilidades, bugs ou até mesmo mal funcionamento do app.

  ### Instalação

1. Adquira uma API Key gratuíta em [https://www.weatherapi.com/](https://www.weatherapi.com/)
2. Clone o repositório
   ```sh
   git clone https://github.com/Luiz-Gusta/totem-app.git
   ```
3. Instale os pacotes NPM
   ```sh
   npm install
   ```
4. Crie um arquivo .env

   Neste arquivo, crie uma constante com a URL da API do seu back-end.
   ```js
   API_URL = 'ENTER YOUR API';
   ```
  ### <a name="visual"></a>Identidade visual

  Como cada cidade possui sua própria identidade visual, considerei interessante desenvolver um exemplo de arquivo Theme, que é responsável por padronizar estilos de componentes. No caso, estou utilizando-o apenas para botões, mas o arquivo pode ser extendido para adicionar mais propriedades.

  Para configurá-lo de acordo com sua identidade visual, basta criar objetos quais os parâmetros são os mesmos do seu objeto Stylesheet do React Native.

  1. Objetos em Theme:
  ```
  export const Theme = {
    btHeight: {
        large: 60,
        small: 78,
    },

    btWidth: {
        large: 294,
        small: '48%',
    },
    colors: {
        white: '#FFFFFF',
        blue: '#004A86',
        lightGrey: '#EEEEEE',
        grey: '#707070'
    }
}
  ```

  2. Implementação no componente:

  2.1. Importe seu componente Theme:
    
  ```
    import { Theme } from './Theme'
  ```
    
  ### <a name="requests"></a>Requests
  ### <a name="bus-lines"></a>Rotas

  ## <a name="recommendations"></a>Recomendações

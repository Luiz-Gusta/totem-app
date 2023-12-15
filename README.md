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

1. **Objetos em Theme:**
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

2. **Implementação no componente:**

Importe seu componente Theme:
    
  ```
    import { Theme } from './Theme'
  ```

Chame as propriedades de Theme para seu objeto Stylesheet:
    
  ```
    button: (btType, btColor) => ({
        height: Theme.btHeight[btType],
        width: Theme.btWidth[btType],
        // resto do código
    }),
  ```
    
  ### <a name="requests"></a>Requests

  As requests são as funções que possibilita a conexão da sua aplicação com o back-end. Você encontrará no arquivo index.js duas funções de assíncronas de fetch, sendo essas **fetchData** e **requestSupport**, sendo respectivamente, a função de autenticação e de pedido de moritoramento.

  #### Função de autenticação:

  ```
    try {
    const response = await fetch(`${API_URL}/RotaDoSeuRequestHTTP`, {
      method: "POST",
      headers: {
        // Headers de sua aplicação
      },
      body: JSON.stringify({
       // Body de sua aplicação
      }),
    }) .then((response) => response.json())
       .then((json) => setToken(json.token))

  } catch (error) {
    // seu tratamento de erros
  }
  ```
  Note que variável API_URL está sendo chamada no mesmo arquivo:
  ```
    import { API_URL } from "@env";
  ```

  Essa função retornará o Token nescessário para o o pedido de moritoramento.

  #### Função de pedido de moritoramento:

  ```
  const requestSupport = async () => {
    const response = await fetch(`${API_URL}/RotaDoSeuRequestHTTP`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
    setIsSupportActive(response.ok)
  }
  ```

  Essa função enviará um request para o sistema utilizado pela central de moritoramento, retornando a confirmação de que o pedido foi enviado. O retorno positivo desse request altera o valor da flag IsSupportActive, mudando o visual do aplicação e informando ao usuário de que o monitoramento está ativado.

  ### <a name="bus-lines"></a>Rotas

  O arquivo de Rotas atualmente consta com uma implementação simplificada, pois é considerado que cada Totem será configurado para a região que ele será implementado. Sendo assim, basta preencher o Array de DATA com os títulos das rotas de ônibus que passam por determinado ponto:

  ```
  const DATA = [
    {
        data: ['105 Pegoreli Tarumãs Via Perequê', '107 Centro Via Rodoviaria', '108 Centro direto', '109 Centro Via Rodoviaria / ame', '117 Centro via Praias / pro-mulher']
    },
]
  ```

  ## <a name="recommendations"></a>Recomendações

  - A aplicação foi baseada desenvolvida com uso de emuladores de Tablets android do Android studio, seguindo as proporções do mesmo. Sendo assim recomendo o uso da aplicação para testes.
  - A chave da API de WeatherAPI pode ser passada como uma constante através do arquivo .env
  - As cores e estilos da aplicação devem seguir a identidade visual da cidade, neste caso, o de Caraguatatuba. Disponível em: [MANUAL DE MARCA - CARAGUATATUBA](https://www.caraguatatuba.sp.gov.br/pmc/wp-content/uploads/2021/07/Manual_de_Marca_CARAGUA_2021_1.pdf)

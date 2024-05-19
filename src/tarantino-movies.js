import { LitElement, css, html } from 'lit'


export class TarantinoMovies extends LitElement {
  static get properties() {
    return {

      title: { type: String },
      paragraph: { type: String },

      title1: { type: String },
      paragraph1: { type: String },
      image1URL: { type: String },

      title2: { type: String },
      paragraph2: { type: String },
      image2URL: { type: String },


      title3: { type: String },
      paragraph3: { type: String },
      image3URL: { type: String },


      title4: { type: String },
      paragraph4: { type: String },
      image4URL: { type: String },


      title5: { type: String },
      paragraph5: { type: String },
      image5URL: { type: String },

      title6: { type: String },
      paragraph6: { type: String },
      image6URL: { type: String },


    }
  }


  constructor() {
    super()
    this.title = 'Peliculas de Quentin Tarantino'
    this.paragraph = 'Quentin Tarantino es un director de cine conocido por su estilo distintivo y su enfoque único en la narrativa, la violencia estilizada y los diálogos memorables. Algunas de las películas más conocidas de Quentin Tarantino incluyen:'

    this.title1 = ' Pulp Fiction (1994):'
    this.paragraph1 = ' Esta película es quizás una de las más icónicas de Tarantino. Presenta múltiples tramas entrelazadas con personajes peculiares y diálogos afilados. Ganó el premio Óscar al Mejor Guión Original.'
    this.image1URL = 'https://cdn.shopify.com/s/files/1/0085/7289/5337/products/0150777_63293732-d2fd-4cf6-abf1-d37a536299f3_600x.jpg?v=1631288434'

    this.title2 = 'Kill Bill: Volumen 1 (2003) y Kill Bill: Volumen 2 (2004): '
    this.paragraph2 = 'Estas dos películas forman una historia épica de venganza protagonizada por Uma Thurman como "La Novia". Están llenas de acción, estilizadas escenas de lucha y referencias al cine de género.'
    this.image2URL = 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/Featured-Kill-Bill.jpg'

    this.title3 = 'Reservoir Dogs (1992):'
    this.paragraph3 = 'Esta es la primera película dirigida por Tarantino y es conocida por su narrativa no lineal y sus diálogos intensos. La trama sigue a un grupo de ladrones después de un robo que sale mal.'
    this.image3URL = 'https://m.media-amazon.com/images/I/51d1KIaTeHS._AC_UF894,1000_QL80_.jpg'

    this.title4 = 'Inglourious Basterds (2009):'
    this.paragraph4 = 'Ambientada en la Segunda Guerra Mundial, esta película presenta una narrativa alternativa en la que un grupo de soldados judíos-americanos es enviado a Francia para matar nazis. La película está llena de tensión y giros inesperados.'
    this.image4URL = 'https://sceneprints.com/cdn/shop/products/s-l1600_5d2635ae-7ab9-42f4-8cbd-17df6de44142.jpg?v=1639523855'

    this.title5 = 'Django sin cadenas (2012):'
    this.paragraph5 = 'Esta película es un western spaghetti ambientado en la era prebélica de los Estados Unidos y sigue a un esclavo liberado, Django, interpretado por Jamie Foxx, mientras busca rescatar a su esposa de un brutal propietario de plantaciones.'
    this.image5URL = 'https://m.media-amazon.com/images/I/81nVf+3Z5JL._AC_UF1000,1000_QL80_.jpg'

    this.title6 = 'Érase una vez en Hollywood (2019):'
    this.paragraph6 = 'Ambientada en Los Ángeles en 1969, la película sigue a un actor de televisión en decadencia (Leonardo DiCaprio) y su doble de riesgo (Brad Pitt), mientras navegan por la industria del cine y los eventos que conducen al asesinato de Sharon Tate por los seguidores de Charles Manson.'
    this.image6URL = 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_FMjpg_UX1000_.jpg'


  }

  render() {
    return html`
      <div id="main">
          <div  class="first-title">
            <h1>${this.title}</h1> 
            <p>${this.paragraph}</p>
          </div>
            
          <div class="one">
            <h1>${this.title1}</h1> 
            <p>${this.paragraph1}</p>
            <div class="movie-img-container">
              <img class="poster-img" src="${this.image1URL}">
            </div>
          </div>
          
            <div class="two">
            <h1>${this.title2}</h1> 
              <p>${this.paragraph2}</p>
              <div class="movie-img-container">
                <img class="poster-img" src="${this.image2URL}">
              </div>
          </div>

          <div class="three">
            <h1>${this.title3}</h1> 
            <p>${this.paragraph3}</p>
            <div class="movie-img-container">
              <img class="poster-img" src="${this.image3URL}">
            </div>
          </div>

          <div class="four">
            <h1>${this.title4}</h1> 
            <p>${this.paragraph4}</p>
            <div class="movie-img-container">
              <img class="poster-img" src="${this.image4URL}">
            </div>
          </div>
        

          <div class="five">
            <h1>${this.title5}</h1> 
            <p>${this.paragraph5}</p>
            <div class="movie-img-container">
              <img class="poster-img" src="${this.image5URL}">
            </div>
          </div>

          
          <div class="six">
            <h1>${this.title6}</h1> 
            <p>${this.paragraph6}</p>
            <div class="movie-img-container">
              <img class="poster-img" src="${this.image6URL}">
            </div>
          </div>

      </div>
    `
  }



  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      #main{
        background-color:#807d7d
      }
  
      .poster-img{
        width: 25vw
    }
    
    .movie-img-container{
      text-align:center;
    }

    .first-title{
      color:yellow
      
    }
    .first-title{
      text-align:center
    }

    .second-title{
      color:blue
    }
    .second-title{
      text-align:center
    }

    .one{
      color:#ffc401
    }

    .two{
      color:#ffc401
    }

    .three{
      color:#6b1010
    }

    
    .four{
      color:#8d2929
    }


    .five{
      color:#8d2929
    }

    .six{
      color:#554b4b
    }

    `
  }
}

window.customElements.define('tarantino-movies', TarantinoMovies)

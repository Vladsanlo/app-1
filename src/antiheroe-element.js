import { LitElement, css, html } from 'lit'



export class Antiheroe extends LitElement {
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
  }/**
   *red hood, 
   */

  constructor() {
    super()
    this.title = 'Antiheroes'
    this.paragraph = 'Un antihéroe es un personaje en una historia, película, libro o cualquier otra forma de narrativa que carece de las características típicas de un héroe tradicional. A menudo, los anti-héroes tienen cualidades que los hacen moralmente ambiguos o poco convencionales, y a menudo se destacan por su comportamiento cuestionable, actitudes egoístas o falta de convencionalismo. A pesar de estas características, los anti-héroes a menudo son el foco de la historia y pueden incluso ser vistos como más realistas o complejos que los héroes tradicionales, ya que reflejan más fielmente las imperfecciones humanas. Algunos ejemplos famosos de anti-héroes incluyen a personajes como Tyler Durden de "Fight Club", Severus Snape de la serie de libros de Harry Potter, o Walter White de "Breaking Bad".'

    this.title1 = 'Spawn'
    this.paragraph1 = 'Spawn es un personaje de cómic creado por el escritor y dibujante Todd McFarlane. Hizo su primera aparición en "Spawn" #1, publicado por Image Comics en 1992. La historia sigue a Al Simmons, un agente del gobierno de los Estados Unidos que es asesinado en una misión y luego resucitado como un soldado del inframundo conocido como Spawn. Al Simmons, como Spawn, posee una variedad de habilidades sobrenaturales, incluida una fuerza y ​​agilidad sobrehumanas, la capacidad de manipular las sombras y crear objetos a partir de ellas, y un traje simbiótico que puede transformarse según su voluntad. A medida que avanza la serie, Spawn se enfrenta a una serie de desafíos, incluidos demonios, ángeles, y otras criaturas sobrenaturales, mientras lucha por encontrar su lugar en el mundo después de su muerte y resurrección. Spawn ha sido popular desde su creación y ha aparecido en numerosos cómics, así como en adaptaciones a la televisión, el cine y los videojuegos. Es conocido por su estética oscura y su enfoque maduro en temas como el bien y el mal, la redención y la identidad.'
    this.image1URL = 'https://m.media-amazon.com/images/I/81EpDg0YTpL._AC_UF1000,1000_QL80_.jpg'

    this.title2 = 'Juez Dredd'
    this.paragraph2 = 'El Juez Dredd es un personaje de cómic creado por el escritor John Wagner y el artista Carlos Ezquerra. Hizo su primera aparición en la revista británica "2000 AD" en 1977. Dredd es el protagonista de la serie de cómics "Judge Dredd", que se desarrolla en un futuro distópico en la Mega-Ciudad Uno, una megalópolis post-apocalíptica que se extiende a lo largo de la costa este de Estados Unidos. En este mundo futurista, los jueces son policías con amplios poderes judiciales que actúan como jueces, jurados y ejecutores. Dredd es uno de los jueces más temidos y respetados, conocido por su estricta interpretación de la ley y su implacable búsqueda de la justicia. A menudo se lo retrata como un personaje moralmente ambiguo, que sigue sus propias interpretaciones de la ley a veces draconianas. El personaje de Judge Dredd ha sido adaptado en numerosas formas de medios, incluyendo películas, series de televisión, videojuegos y novelas. Es uno de los personajes más icónicos y duraderos del cómic británico, y su serie ha sido elogiada por su sátira social y política, así como por su acción y violencia estilizadas.'
    this.image2URL = 'https://cdn.wallpapersafari.com/65/85/OpPzBZ.jpg'

    this.title3 = 'Deadpool'
    this.paragraph3 = 'Deadpool es un personaje de cómic creado por el escritor Fabian Nicieza y el dibujante/co-escritor Rob Liefeld. Hizo su primera aparición en "The New Mutants" #98 en 1991, publicado por Marvel Comics. Deadpool es conocido por su estilo de humor sarcástico, su tendencia a romper la cuarta pared (es decir, hablar directamente al lector), y su habilidad regenerativa que le permite curarse rápidamente de cualquier lesión, lo que lo hace prácticamente inmortal. El nombre real de Deadpool es Wade Wilson, un mercenario con un pasado oscuro que se somete a un experimento que lo deja con un poderoso factor de curación pero desfigura su cuerpo. Adopta el nombre de Deadpool y se embarca en una vida de aventuras, a menudo como mercenario, aunque a veces luchando del lado de los héroes. Deadpool es conocido por sus travesuras y su estilo de lucha poco convencional, que a menudo incluye armas de fuego y espadas, así como tácticas improvisadas y humorísticas. A lo largo de los años, se ha convertido en uno de los personajes más populares de Marvel Comics, protagonizando sus propias series de cómics, así como películas, videojuegos y otros medios. Su combinación única de acción, comedia y irreverencia lo ha convertido en un favorito de los fanáticos en todo el mundo.'
    this.image3URL = 'https://m.media-amazon.com/images/I/71XverDVBkL.jpg'

    this.title4 = 'Peacemaker'
    this.paragraph4 = 'Peacemaker es un personaje ficticio de cómics creado por Joe Gill y Pat Boyette. Hizo su primera aparición en "Fightin 5" #40, publicado por Charlton Comics en 1966. En los cómics originales, Peacemaker es Christopher Smith, un diplomático que se convierte en un vigilante luchando por la paz, utilizando una variedad de armas y habilidades para hacer cumplir su visión de justicia.  Sin embargo, es importante destacar que, más recientemente, Peacemaker ha ganado una gran atención debido a su adaptación en medios contemporáneos, especialmente en el universo cinematográfico de DC Comics. En este contexto, Peacemaker es interpretado por el actor John Cena y es uno de los personajes destacados en la película "The Suicide Squad" (2021), dirigida por James Gunn. En la película, Peacemaker es retratado como un mercenario extremista obsesionado con la paz que está dispuesto a hacer cualquier cosa para lograrla, incluso si eso significa matar a personas. Su enfoque extremo y su personalidad excéntrica lo hacen tanto un aliado como una fuente de conflicto dentro del equipo de villanos conocidos como el Escuadrón Suicida. Además de su aparición en la película "The Suicide Squad", Peacemaker también protagoniza una serie de televisión homónima, lanzada en 2022, que sigue sus aventuras en solitario después de los eventos de la película.'
    this.image4URL = 'https://m.media-amazon.com/images/I/81HaH1OfniL._AC_UF1000,1000_QL80_.jpg'

    this.title5 = 'Red Hood'
    this.paragraph5 = 'Red Hood es un personaje de cómic que ha sido interpretado por varias personas en el universo de DC Comics. El más conocido es Jason Todd, quien originalmente fue el segundo Robin, el compañero de Batman, después de Dick Grayson. Sin embargo, después de una controvertida votación en la que los lectores decidieron su destino, Jason Todd fue asesinado por el Joker en la historia "Death in the Family" (La Muerte en la Familia). Sin embargo, el personaje de Jason Todd fue traído de vuelta a la vida y asumió la identidad de Red Hood. Adoptó este nombre en honor al personaje original, el Joker, quien había usado ese alias antes de convertirse en el villano que conocemos.  Como Red Hood, Jason Todd es un personaje más oscuro y violento que Batman y el resto de los aliados de Batman. Tiene una relación complicada con el Caballero Oscuro y, a veces, trabaja en contra de él, aunque sus motivaciones no son siempre malvadas. Red Hood tiene habilidades de combate impresionantes y a menudo utiliza tácticas letales para enfrentarse a criminales, a menudo mostrando una actitud de "el fin justifica los medios".  El personaje de Red Hood ha aparecido en cómics, series de televisión animadas y videojuegos, y ha ganado una base de fanáticos significativa debido a su complejidad moral y su enfoque único en la lucha contra el crimen.'
    this.image5URL = 'https://cafans.b-cdn.net/images/Category_62215/subcat_204531/F8gGzrrV_0907231113041gpadd.jpg'

    this.title6 = 'Punisher/Frank Castle'
    this.paragraph6 = 'Punisher es un personaje de cómic creado por Gerry Conway, Ross Andru y John Romita Sr. para Marvel Comics. Hizo su primera aparición en "The Amazing Spider-Man" #129 en 1974. El Punisher es conocido por su brutalidad y su enfoque implacable para combatir el crimen, a menudo utilizando tácticas violentas y letales.  El nombre real del Punisher es Frank Castle, un veterano de guerra que se convierte en vigilante después de que su familia es asesinada por la mafia. Decide tomar la justicia en sus propias manos, declarando una guerra personal contra el crimen organizado y otros delincuentes. A diferencia de muchos otros superhéroes, el Punisher no tiene superpoderes sobrenaturales, sino que confía en su entrenamiento militar, su habilidad táctica y su arsenal de armas de fuego y equipo militar. El personaje de Punisher ha protagonizado numerosas series de cómics en solitario, así como también ha aparecido en equipos como Los Vengadores y Los Defensores en el universo de Marvel. Además de los cómics, el Punisher ha sido adaptado a varias películas, series de televisión y videojuegos. Es conocido por su sentido de la justicia inquebrantable y su enfoque implacable para perseguir a los criminales, lo que lo convierte en uno de los antihéroes más icónicos de Marvel Comics.'
    this.image6URL = 'https://m.media-amazon.com/images/I/51pkbpP-SIL.jpg'


  }

  render() {
    return html`
    <div id ="main">
      <div  class="first-title">
          <h1>${this.title}</h1> 
          <p>${this.paragraph}</p>
      </div>

      
        <h1>${this.title1}</h1> 
        <p>${this.paragraph1}</p>      
        <div class="anti-img-container">
          <img class="antiheroe-img" src="${this.image1URL}">
        </div>   
      

      
          <h1>${this.title2}</h1> 
          <p>${this.paragraph2}</p>      
          <div class="anti-img-container">
            <img class="antiheroe-img" src="${this.image2URL}">
          </div>  
      

      
          <h1>${this.title3}</h1> 
          <p>${this.paragraph3}</p>      
          <div class="anti-img-container">
            <img class="antiheroe-img" src="${this.image3URL}">
          </div>  
        

        
          <h1>${this.title4}</h1> 
          <p>${this.paragraph4}</p>      
          <div class="anti-img-container">
            <img class="antiheroe-img" src="${this.image4URL}">
          </div>  
        

        
          <h1>${this.title5}</h1> 
          <p>${this.paragraph5}</p>      
          <div class="anti-img-container">
            <img class="antiheroe-img" src="${this.image5URL}">
          </div>  
        
          
          <h1>${this.title6}</h1> 
          <p>${this.paragraph6}</p>      
          <div class="anti-img-container">
            <img class="antiheroe-img" src="${this.image6URL}">
          </div>  

    </div>
    `
  }


  static get styles() {
    return css`
      

      #main{
        background-color:black 
      }

      #main{
        color:red
      }

      .antiheroe-img{
        width: 20vw;
    }
    
    .anti-img-container{
      text-align:center;
    }

    .first-title{
      color:yellow
      
    }
    .first-title{
      text-align:center
    }

   h1{
    text-align:center
   }



    `
  }
}

window.customElements.define('antiheroe-element', Antiheroe)

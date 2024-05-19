import { LitElement, css, html } from 'lit'


export class Anime extends LitElement {
  static get properties() {
    return {
    
      /**
       * titulo inicial del html
       */
      title: { type: String },

      /**
       * parrafo de introduccion
       */
      paragraph: { type: String },

      /**
       * titulo del primer anime
       */
      title1: { type: String },

      /**
       * parrafo del primer anime
       */
      paragraph1: { type: String },

      /**
       * imagen del primer anime
       */

      image1URL: { type: String },

      /**
       * titulo del segundo anime
       */
      title2: { type: String },

      /**
       * parrafo del segundo anime
       */
      paragraph2: { type: String },

      /**
       * imagen del segundo anime
       */
      image2URL: { type: String },

      /**
       * titulo del tercer anime
       */
      title3: { type: String },

      /**
       * parrafo del tercer anime
       */
      paragraph3: { type: String },

      /**
       * imagen del tercer anime
       */
      image3URL: { type: String },

      /**
      * titulo del cuarto anime
      */
      title4: { type: String },

      /**
       * parrafo del cuarto anime
       */
      paragraph4: { type: String },

      /**
       * imagen del cuarto anime
       */
      image4URL: { type: String },


      /**
      * titulo del quinto anime
      */
      title5: { type: String },

      /**
       * parrafo del quinto anime
       */
      paragraph5: { type: String },

      /**
       * imagen del quinto anime
       */
      image5URL: { type: String },




    }
  }


  constructor() {
    super()
    this.title = 'Animes'
    this.paragraph = 'El anime es una forma de animación que se originó en Japón y se ha convertido en un fenómeno cultural global. Se caracteriza por su amplia gama de géneros y estilos artísticos, que van desde la acción y la aventura hasta el romance, la ciencia ficción, el terror y mucho más. A menudo, el anime está dirigido a un público diverso que abarca desde niños hasta adultos, y puede ser tanto para televisión como para cine, así como para formatos en línea. El término "anime" es la abreviatura de "animēshon", la adaptación japonesa de la palabra "animación".'

    this.title1 = ' Berserk'
    this.paragraph1 = '"Berserk" es un manga japonés escrito e ilustrado por Kentaro Miura. Se ha adaptado a varias formas de medios, incluyendo una serie de anime, películas de animación y videojuegos. La serie de anime "Berserk" sigue la historia de Guts, un guerrero solitario marcado por una vida de violencia y lucha. La trama se desarrolla en un mundo medieval oscuro y violento, donde Guts se une a un grupo de mercenarios liderado por Griffith, un joven y carismático líder con grandes ambiciones. La serie aborda temas de destino, amistad, traición y la lucha del bien contra el mal. La adaptación más conocida es la serie de anime de 1997, que adaptó parte de la historia del manga. Sin embargo, también hay otras adaptaciones, como películas de animación y una serie de anime CGI más reciente que sigue la historia más adelante en el manga.'
    this.image1URL = 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/08/Berserk-estrenara-nuevo-capitulo-en-septiembre.jpg'

    this.title2 = 'Dragon Ball'
    this.paragraph2 = 'Dragon Ball es una franquicia de medios japonesa creada por Akira Toriyama. Comenzó como un manga en 1984 y desde entonces ha expandido su alcance a series de anime, películas, videojuegos, juguetes y una variedad de productos relacionados. La historia sigue las aventuras de Goku, un guerrero Saiyan, mientras viaja por el universo en busca de las legendarias Esferas del Dragón, artefactos mágicos que conceden un deseo cuando se reúnen todas. A lo largo de su viaje, Goku y sus amigos luchan contra poderosos enemigos, exploran diferentes planetas y entrenan para volverse más fuertes. Dragon Ball ha sido increíblemente influyente en la cultura pop, especialmente en el ámbito del anime y los videojuegos.'
    this.image2URL = 'https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=480,height=720,quality=85/catalog/crunchyroll/257cdb6a1fdd566600a01eb0f9f73b22.jpe'

    this.title3 = 'Attak on Titan/Shingeki no Kyojin'
    this.paragraph3 = 'Attack on Titan, conocido en japonés como "Shingeki no Kyojin", es una serie de manga japonesa escrita e ilustrada por Hajime Isayama. La historia está ambientada en un mundo donde la humanidad está al borde de la extinción debido a la aparición de gigantes humanoides llamados "Titanes", que devoran a los seres humanos. Los sobrevivientes de la humanidad viven en ciudades rodeadas por enormes murallas para protegerse de los Titanes.La trama sigue a Eren Yeager, su hermana adoptiva Mikasa Ackerman y su amigo Armin Arlert, quienes se unen al ejército para luchar contra los Titanes después de que su ciudad es invadida y su madre es asesinada por uno de ellos. A medida que avanza la serie, se revelan secretos sobre la verdadera naturaleza de los Titanes, así como conspiraciones y conflictos dentro de la sociedad humana."Attack on Titan" ha ganado gran popularidad tanto en Japón como a nivel internacional debido a su trama intensa, personajes complejos y giros inesperados. Ha sido adaptado a una exitosa serie de anime, varias películas, novelas ligeras, videojuegos y otros medios. La serie de anime se ha destacado por su animación de alta calidad y su banda sonora épica, convirtiéndose en una de las producciones más influyentes en el género de la animación japonesa'
    this.image3URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2F9pzZ2csRoOpJoWuLCP0JayFG7c87c5KdEpZF_dXQ&s'

    this.title4 = 'Demon Slayer'
    this.paragraph4 = 'Demon Slayer es una serie de manga japonesa escrita e ilustrada por Koyoharu Gotouge. También se ha adaptado a un anime muy popular. La trama sigue a un joven llamado Tanjiro Kamado, quien se convierte en un cazador de demonios después de que su familia es asesinada por un demonio, excepto su hermana Nezuko, que se convierte en un demonio. Tanjiro se embarca en un viaje para vengar a su familia y encontrar una cura para Nezuko, mientras se enfrenta a numerosos demonios y desafíos. La serie es conocida por su animación de alta calidad, personajes memorables y emocionantes escenas de acción.    '
    this.image4URL = 'https://www.sheknows.com/wp-content/uploads/2024/03/how-to-watch-demon-slayer-season-4-FI.jpg'


    this.title5 = 'Castelvania'
    this.paragraph5 = '"Castlevania" es una serie de anime estadounidense que se estrenó en Netflix en 2017. Está basada en la famosa serie de videojuegos "Castlevania" de Konami. La trama sigue a Trevor Belmont, el último miembro sobreviviente del clan Belmont, quien se une a la maga Sypha Belnades y al hijo mestizo de Drácula, Alucard, para detener los planes malévolos del propio Drácula.   La serie es conocida por su narrativa oscura y madura, su animación de alta calidad y su fidelidad a la mitología de los juegos. Ha sido elogiada por los fanáticos tanto de la serie de videojuegos como del anime por su tratamiento respetuoso de la fuente material y su capacidad para expandir el universo de "Castlevania". La serie ha tenido varias temporadas y ha sido bien recibida tanto por la crítica como por el público '
    this.image5URL = 'https://es.web.img2.acsta.net/pictures/21/05/10/23/27/0599462.jpg'


  }

  render() {
    return html`
      <div id="main">
          <div  class="first-title">
            <h1>${this.title}</h1> 
            <p>${this.paragraph}</p>
          </div>
            
          <div class="berserk">
            <h1>${this.title1}</h1> 
            <p>${this.paragraph1}</p>
            <div class="anime-img-container">
              <img class="prota-img" src="${this.image1URL}">
            </div>
          </div>
          
            <div class="dragon">
            <h1>${this.title2}</h1> 
              <p>${this.paragraph2}</p>
              <div class="anime-img-container">
                <img class="prota-img" src="${this.image2URL}">
              </div>
          </div>

          <div class="aot">
            <h1>${this.title3}</h1> 
            <p>${this.paragraph3}</p>
            <div class="anime-img-container">
              <img class="prota-img" src="${this.image3URL}">
            </div>
          </div>

          <div class="ds">
            <h1>${this.title4}</h1> 
            <p>${this.paragraph4}</p>
            <div class="anime-img-container">
              <img class="prota-img" src="${this.image4URL}">
            </div>
          </div>
        

          <div class="cast">
            <h1>${this.title5}</h1> 
            <p>${this.paragraph5}</p>
            <div class="anime-img-container">
              <img class="prota-img" src="${this.image5URL}">
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
        background-color:#dd821b
      }
  
      .prota-img{
        width: 25vw
    }
    
    .anime-img-container{
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

    .berserk{
      color:#345cca
    }

    .dragon{
      color:green
    }

    .aot{
      color:purple
    }

    
    .ds{
      color:green
    }


    .cast{
      color:green
    }
    `
  }
}

window.customElements.define('anime-element', Anime)

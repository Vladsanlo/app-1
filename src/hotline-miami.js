import { LitElement, css, html } from 'lit'


export class HotlineMiami extends LitElement {
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
    this.title = 'Personajes de Hotline Miami'
    this.paragraph = 'Hotline Miami es un videojuego independiente lanzado en 2012, desarrollado por Dennaton Games y distribuido por Devolver Digital. El juego se sitúa en una versión alternativa de 1989 en Miami y sigue la historia de varios personajes que se encuentran inmersos en una serie de violentos conflictos con diferentes facciones criminales. La jugabilidad se centra en combates cuerpo a cuerpo y con armas de fuego en niveles de estilo arcade, con una estética retro pixelada y una banda sonora muy distintiva. El juego es conocido por su dificultad desafiante, su narrativa intrigante y su estilo visual único.'

    this.title1 = ' Jacket'
    this.paragraph1 = 'Es el protagonista principal del juego. Se le conoce por su chaqueta con una serpiente en la espalda. Jacket recibe misteriosas llamadas que le ordenan llevar a cabo una serie de violentas misiones.'
    this.image1URL = 'https://i.pinimg.com/736x/95/c4/fb/95c4fb8068118e535d1f73f7f30c8dec.jpg'

    this.title2 = 'Biker'
    this.paragraph2 = 'Un personaje jugable en la expansión "Hotline Miami 2: Wrong Number". Es un miembro de una banda de motoristas que investiga los acontecimientos relacionados con las llamadas misteriosas y los asesinatos.'
    this.image2URL = 'https://cdn-images.threadless.com/threadless-media/artist_shops/shops/rochaandpuckett/products/561759/shirt-1526583563-d714f73737afca1de9576eeb1666860e.png?v=3&d=eyJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiMDAwMDAwIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV0sICJmb3JjZSI6IGZhbHNlLCAib25seV9tZXRhIjogZmFsc2V9'

    this.title3 = 'Richter'
    this.paragraph3 = 'Un personaje jugable en "Hotline Miami 2: Wrong Number". Trabaja como limpiador para la mafia rusa y se ve envuelto en eventos violentos a raíz de las llamadas telefónicas.'
    this.image3URL = 'https://steamuserimages-a.akamaihd.net/ugc/949586755964068150/5C88F1F86A39153A651439883BBB509F708F858E/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'

    this.title4 = 'Evan Wright'
    this.paragraph4 = 'Un periodista que investiga los sucesos ocurridos en Hotline Miami. Es el narrador principal en "Hotline Miami 2: Wrong Number" y su investigación forma parte de la trama del juego.'
    this.image4URL = 'https://mrwallpaper.com/images/hd/evan-wright-hotline-miami-pi1aegp2hrmtbcum.jpg'

    this.title5 = 'Beard'
    this.paragraph5 = 'Un soldado estadounidense que aparece en "Hotline Miami 2: Wrong Number". Es amigo cercano de Jacket y se le muestra en varias situaciones durante la guerra en el escenario de Hawái.'
    this.image5URL = 'https://mrwallpaper.com/images/hd/beard-hotline-miami-pink-mlw5sobn7faal8t9.jpg'

    this.title6 = 'Tony'
    this.paragraph6 = ' es un personaje secundario en Hotline Miami. Él es el dueño de un club nocturno llamado "Tonys Club" en el juego. Tony es conocido por su estilo de vida extravagante y su personalidad excéntrica. Aunque no es un personaje jugable, interactúa con el protagonista, Jacket, y ofrece algunas misiones y diálogos que impulsan la trama del juego. Su club es un lugar recurrente en el juego y sirve como escenario para varias escenas clave.'
    this.image6URL = 'https://steamuserimages-a.akamaihd.net/ugc/1817762214575874427/8B4E80C86FB9B92F5F07AE7D0F5EA53050EF2206/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'


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
            <div class="player-img-container">
              <img class="killer-img" src="${this.image1URL}">
            </div>
          </div>
          
            <div class="two">
            <h1>${this.title2}</h1> 
              <p>${this.paragraph2}</p>
              <div class="player-img-container">
                <img class="killer-img" src="${this.image2URL}">
              </div>
          </div>

          <div class="three">
            <h1>${this.title3}</h1> 
            <p>${this.paragraph3}</p>
            <div class="player-img-container">
              <img class="killer-img" src="${this.image3URL}">
            </div>
          </div>

          <div class="four">
            <h1>${this.title4}</h1> 
            <p>${this.paragraph4}</p>
            <div class="player-img-container">
              <img class="killer-img" src="${this.image4URL}">
            </div>
          </div>
        

          <div class="five">
            <h1>${this.title5}</h1> 
            <p>${this.paragraph5}</p>
            <div class="player-img-container">
              <img class="killer-img" src="${this.image5URL}">
            </div>
          </div>

          
          <div class="six">
            <h1>${this.title6}</h1> 
            <p>${this.paragraph6}</p>
            <div class="player-img-container">
              <img class="killer-img" src="${this.image6URL}">
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
        background-color:#ff00bf
      }
  
      .killer-img{
        width: 25vw
    }
    
    .player-img-container{
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
      color:#9e0000
    }

    .two{
      color:#00fcda
    }

    .three{
      color:green
    }

    
    .four{
      color:#ff9900
    }


    .five{
      color:#4a77f3
    }

    .six{
      color:yellow
    }

    `
  }
}

window.customElements.define('hotline-miami', HotlineMiami)

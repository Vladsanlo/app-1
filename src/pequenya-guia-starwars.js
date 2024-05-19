import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class PequenyaGuiaStarwars extends LitElement {
  static get properties() {
    return {

      title: { type: String },


      paragraph1: { type: String },
      image1URL: { type: String },
      paragraph2: { type: String },


      title2: { type: String },
      paragraph3: { type: String },
      image2URL: { type: String },


      title3: { type: String },
      paragraph4: { type: String },
      image3URL: { type: String },

      title4: { type: String },
      paragraph5: { type: String },
      image4URL: { type: String },

      title5: { type: String },
      paragraph6: { type: String },
      image5URL: { type: String },


      title6: { type: String },
      paragraph7: { type: String },
      image6URL: { type: String },


      title7: { type: String },
      paragraph8: { type: String },
      image7URL: { type: String },


      title8: { type: String },
      paragraph9: { type: String },
      image8URL: { type: String },


      title9: { type: String },
      paragraph10: { type: String },
      image9URL: { type: String },


      title10: { type: String },
      paragraph11: { type: String },
      image10URL: { type: String },

      title11: { type: String },



    }
  }

  constructor() {
    super()

    this.title = 'STAR WARS'
    this.paragraph1 = 'Pequenya guia de personajes'
    this.image1URL = 'https://cloudfront-us-east-1.images.arcpublishing.com/prisachile/MQMTSIPKXRDAFCUSYCFHSQ2FME.jpg'

    this.paragraph2 = 'Jedis '

    this.title2 = 'Anakin Skywalker'
    this.paragraph3 = 'Anakin Skywalker, un hombre humano sensible a la Fuerza, fue un Caballero Jedi de la República Galáctica y el Elegido de la Fuerza. Durante las Guerras Clon, sus logros como comandante en el campo de batalla le valieron el apodo del Héroe Sin Miedo. Después de pasar al lado oscuro de la Fuerza, se hizo conocido como Darth Vader, un Señor Oscuro de los Sith y aprendiz del Emperador Darth Sidious. Como Lord Sith, Vader se volvió contra sus antiguos camaradas y dió caza a los Jedi sobrevivientes hasta su casi extinción. Se convirtió en un ejecutor del Imperio Galáctico, que trabajó para aplastar a la Alianza para Restaurar la República por oponerse a la voluntad de su Maestro Sith. Sin embargo, a pesar de sus acciones como Darth Vader, un destello del lado luminoso de la Fuerza permaneció dentro del antiguo Anakin Skywalker'
    this.image2URL = 'https://i.pinimg.com/736x/b6/bb/d7/b6bbd7de0ba27e749bbc8fbf6fdf83f6.jpg'

    this.title3 = 'Obi-Wan Kenobi'
    this.paragraph4 = 'Obi-Wan Kenobi fue un legendario Maestro Jedi humano que sirvió en el Alto Consejo Jedi durante los últimos añosde la Era de la República. Como General Jedi, Kenobi sirvió en el Gran Ejército de la República durante las Guerras Clon. Kenobi, sin embargo, se vio obligado a exiliarse como resultado de la Gran Purga Jedi. Como mentor, Kenobi fue responsable del entrenamiento de dos miembros de la familia Skywalker, Anakin Skywalker y Luke Skywalker, sirviendo ambos como su Padawan para aprender los caminos de la Fuerza.'
    this.image3URL = 'https://i.blogs.es/f6080f/obi-wan-kenobi/1366_2000.jpeg'

    this.title4 = 'Yoda'
    this.paragraph5 = 'Yoda fue un miembro masculino de una especie misteriosa. Era un reverenciado Maestro Jedi que sirvió como Gran Maestro de la Orden Jedi en los últimos días de la República Galáctica. Era famoso dentro de la Orden por su sabiduría, poderes de la Fuerza y combate con sables de luz, y vivió durante casi 900 años. Su tiempo durante los últimos días de la Orden Jedi y más allá lo convirtió en una figura consecuente en la historia galáctica.'
    this.image4URL = 'https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-yoda-16x9-xl.jpg.adapt.crop1x1.320w.jpg'

    this.title5 = 'Mace Windu'
    this.paragraph6 = 'Mace Windu fue un Maestro Jedi humano y miembro del Alto Consejo Jedi durante los últimos días de la República Galáctica. Nacido en el planeta Haruun Kal, Windu fue entrenado en los caminos de la Fuerza debido a su fuerte conexión con ella. Al ascender al rango de Maestro, empezó a ser conocido como el campeón de la Orden Jedi, un honor que acarreó hasta años después de su muerte. En algún punto de su carrera, Windu pasó a servir como Maestro de la Orden, el líder electo de la Orden Jedi.'
    this.image5URL = 'https://upload.wikimedia.org/wikipedia/en/b/bf/Mace_Windu.png'

    this.title6 = 'Qui-Gon Jinn'
    this.paragraph7 = 'Qui-Gon Jinn, un hombre humano sensible a la Fuerza, fue un venerable y rebelde Maestro Jedi que vivió durante los últimos años de la era de la República. Era un miembro sabio y respetado de la Orden Jedi, y se le ofreció un asiento en el Consejo Jedi que él decidió rechazar para seguir su propio camino. Siguiendo una filosofía centrada alrededor de la Fuerza Viva, Jinn se esforzó por seguir la voluntad de la Fuerza incluso cuando sus acciones estaban en conflicto con los deseos del Consejo. Después de encontrarse con Anakin Skywalker, Jinn lo llevó al Templo Jedi de Coruscant, convencido de que había encontrado al Elegido. Su último deseo fue que Skywalker se convirtiera en un Jedi y que finalmente devolviera el equilibrio a la Fuerza.'
    this.image6URL = 'https://upload.wikimedia.org/wikipedia/en/a/ad/Qui-Gon_Jinn.png'

    this.title11 = 'Sith'

    this.title7 = 'Darth Sidious/Sheev Palpatine'
    this.paragraph8 = 'Darth Sidious, nacido Sheev Palpatine y también conocido simplemente como el Emperador, fue un hombre humano Señor Oscuro de los Sith y Emperador del Imperio Galáctico, que gobernó desde el 19 ABY hasta el 4 DBY. Ascendiendo al poder en el Senado de la República como senador de Naboo, el Lord Sith en secreto conservó dos identidades, Sidious y Palpatine, usando ambas para avanzar en su carrera política. Orquestando la caída de la República Galáctica y de la Orden Jedi a través de las Guerras Clon, y luego estableciendo su reinado sobre la galaxia que duró hasta su muerte en la Batalla de Endor. Sin embargo, el lado oscuro de la Fuerza dio lugar a poderes que permitieron al Emperador regresar de la tumba.'
    this.image7URL = 'https://lumiere-a.akamaihd.net/v1/images/palpatine-return-of-the-jedi-tal_d881391a.jpeg?region=336,0,864,864'

    this.title8 = 'Maul'
    this.paragraph9 = 'Maul fue un zabrak dathomiriano sensible a la Fuerza y un guerrero del lado oscuro que sirvió como el aprendiz Señor Oscuro de los Sith Darth Maul durante los últimos años de la República Galáctica y reinó como señor del crimen durante el dominio del Imperio Galáctico. El hijo de la Madre Talzin de las Hermanas de la Noche, Maul fue tomado a una edad temprana por el Señor Oscuro de los Sith Darth Sidious, quien lo ungió como su primer aprendiz Sith, Darth Maul. Gracias a su entrenamiento, Maul se hizo fuerte en el lado oscuro de la Fuerza, convirtiéndose en un duelista y asesino experto que anhelaba revelar la continuada supervivencia de los Sith a la Orden Jedi. Durante la crisis en Naboo en el 32 ABY, Maul hizo frente al Maestro Jedi Qui-Gon Jinn y al Padawan Obi-Wan Kenobi. Aunque tuvo éxito en matar al primero, Maul fue derrotado y mutilado por el aprendiz de Jinn, quien dio al Lord Sith por muerto. Como resultado de la derrota y aparente muerte de Maul, Sidious lo reemplazó por el Conde Dooku, el mentor Jedi de Jinn que adoptó la identidad Sith de Darth Tyranus.'
    this.image8URL = 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/50/Darth_Maul_profile.png/250px-Darth_Maul_profile.png'

    this.title9 = 'General Grievous'
    this.paragraph10 = 'Grievous fue un señor de la guerra kaleesh que sirvió como oficial al mando en las fuerzas armadas de la Confederación de Sistemas Independientes durante los últimos años de la República Galáctica. Aunque era conocido por su rango de general, Grievous era el Comandante Supremo del Ejército Droide Separatista que hizo frente al Gran Ejército de la República a lo largo del conflicto pan-galáctico conocido como las Guerras Clon. Célebre por su crueldad y sus extensas mejoras cibernéticas, Grievous inspiraba miedo mientras viajaba por la galaxia, invadiendo mundos enteros y enfrentándose a los Caballeros Jedi de la República.'
    this.image9URL = 'https://preview.redd.it/what-would-general-grievous-do-if-he-found-out-who-actually-v0-t6ux7wahy6ib1.jpg?auto=webp&s=b881bc8993ff07b8b0af3e4a5931d2a3c1fc72bf'

    this.title10 = 'Conde Dooku'
    this.paragraph11 = 'Dooku, un hombre humano sensible a la Fuerza, fue un Lord Sith que lideró la Confederación de Sistemas Independientes como Jefe de Estado durante las Guerras Clon. A pesar de que una vez fue un Maestro Jedi, Dooku dejó la Orden Jedi y la República Galáctica después de desilusionarse con la corrupción en el gobierno. Dando la espalda a la luz, Dooku se unió al lado oscuro de la Fuerza y se convirtió en el aprendiz de Darth Sidious, un Señor Oscuro de los Sith, tomando el nombre de Darth Tyranus y reclamando su título como el Conde de Serenno. Con su maestro, que era secretamente el Canciller Supremo Sheev Palpatine, Dooku conspiró para derrocar tanto a la República como a los Jedi para que los Sith pudieran reclamar su anterior dominio. Con este fin, supervisó un creciente movimiento Separatista que finalmente resultó en la formación de la Confederación de Sistemas Independientes. Además de reunir a cientos de sistemas estelares rebeldes para la causa Separatista, Dooku estuvo involucrado en la creación de los soldados clon del Gran Ejército de la República, suministrando a los kaminoanos una plantilla de clonación, Jango Fett, así como un biochip de modificación conductual que contenía el Protocolo Clon 66. Como resultado de las maquinaciones de Dooku y Sidious, la galaxia se vio envuelta en las Guerras Clon en el 22 ABY.'
    this.image10URL = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrvjKD0p9xp3kwAFkXhiNMW23YkFJAcPSQO1ZtyVAS-_OFsQ_a3LZi24m0H1eImxOOgg-rIyHz9aKBucwECKe8hWAacUaKC3CNGJt2Ph0QEiVMr9aULTyc1kbCqsnjvyXydzM3SEV9D9ND/s1600/dooku.jpg'




  }

  render() {
    return html`
      <div id="main">
        <div  class="first-title">
          <h1>${this.title}</h1> 
          <p>${this.paragraph1}</p>
        </div>
        <div class="star-img-container">
        <img class="force-user-img" src="${this.image1URL}">
        </div>    
        
        <h1 class="second-title">${this.paragraph2}</h1>

        <div class="blue-saber">
          <h1>${this.title2}</h1> 
          <p>${this.paragraph3}</p>
          <div class="star-img-container">
            <img class="force-user-img" src="${this.image2URL}">
          </div>
      
          <h1>${this.title3}</h1> 
          <p>${this.paragraph4}</p>
          <div class="star-img-container">
            <img class="force-user-img" src="${this.image3URL}">
          </div>
        </div>

        <div class="green-saber">
          <h1>${this.title4}</h1> 
          <p>${this.paragraph5}</p>
          <div class="star-img-container">
            <img class="force-user-img" src="${this.image4URL}">
          </div>
        </div>

        <div class="purp-saber">
          <h1>${this.title5}</h1> 
          <p>${this.paragraph6}</p>
          <div class="star-img-container">
            <img class="force-user-img" src="${this.image5URL}">
          </div>
        </div>

        <div class="green-saber">
          <h1>${this.title6}</h1> 
          <p>${this.paragraph7}</p>
          <div class="star-img-container">
            <img class="force-user-img" src="${this.image6URL}">
          </div>
        </div>

        <div class="sith">
          <h1>${this.title11}</h1>

          <h1>${this.title7}</h1> 
          <p>${this.paragraph8}</p>
          <div class="star-img-container">
            <img class="force-user-img" src="${this.image7URL}">
          </div>

          <h1>${this.title8}</h1> 
          <p>${this.paragraph9}</p>
          <div class="star-img-container">
            <img class="force-user-img" src="${this.image8URL}">
          </div>

          <h1>${this.title9}</h1> 
          <p>${this.paragraph10}</p>
          <div class="star-img-container">
            <img class="force-user-img" src="${this.image9URL}">
          </div>
        </div>

      
      </div>
    `
  }


  static get styles() {
    return css`
  

      #main{
        background-color:#022458
      }

      .force-user-img{
        width: 25vw;
    }
    
    .star-img-container{
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

    .blue-saber{
      color:#345cca
    }

    .green-saber{ 
      color:green
    }

    .purp-saber{
      color:purple
    }

    .sith{
      color:red
    }

    `
  }

}

window.customElements.define('pequenya-guia-starwars', PequenyaGuiaStarwars)

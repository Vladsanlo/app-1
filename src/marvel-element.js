import { LitElement, css, html } from 'lit'

export class Marvel extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      title1: { type: String },
      paragraph1: { type: String },
      list1Element1: { type: String },
      list1Element2: { type: String },
      list1Element3: { type: String },
      list1Element4: { type: String },
      list1Element5: { type: String },
      list1Element6: { type: String },
      list1Element7: { type: String },
      list1Element8: { type: String },
      list1Element9: { type: String },
      list1Element10: { type: String },
      list1Element11: { type: String },
      list1Element12: { type: String },
      image1URL: { type: String },

      title2: { type: String },
      paragraph2: { type: String },
      list1Element13: { type: String },
      list1Element14: { type: String },
      list1Element15: { type: String },
      list1Element16: { type: String },
      image2URL: { type: String },

      title3: { type: String },
      paragraph3: { type: String },
      list1Element17: { type: String },
      list1Element18: { type: String },
      list1Element19: { type: String },
      list1Element20: { type: String },
      list1Element21: { type: String },
      list1Element22: { type: String },
      list1Element23: { type: String },
      list1Element24: { type: String },
      list1Element25: { type: String },
      list1Element26: { type: String },
      list1Element27: { type: String },
      list1Element28: { type: String },
      list1Element29: { type: String },
      list1Element30: { type: String },
      list1Element31: { type: String },
      image3URL: { type: String },

      title4: { type: String },
      paragraph4: { type: String },
      list1Element32: { type: String },
      list1Element33: { type: String },
      list1Element34: { type: String },
      list1Element35: { type: String },
      list1Element36: { type: String },
      list1Element37: { type: String },
      list1Element38: { type: String },
      list1Element39: { type: String },
      list1Element40: { type: String },
      list1Element41: { type: String },
      image4URL: { type: String },

      title5: { type: String },
      paragraph5: { type: String },
      list1Element42: { type: String },
      list1Element43: { type: String },
      list1Element44: { type: String },
      list1Element45: { type: String },
      list1Element46: { type: String },
      list1Element47: { type: String },
      list1Element48: { type: String },
      image5URL: { type: String },
    }
  }

  constructor() {
    super()
    this.title = 'Grupos de heroes y villanos de Marvel'

    this.title1 = 'X-MEN'
    this.paragraph1 = 'Los X-Men son un equipo de superhéroes ficticios que aparecen en los cómics estadounidenses publicados por Marvel Comics. Fueron creados por el escritor Stan Lee y el artista Jack Kirby, y debutaron en "The X-Men" #1 en septiembre de 1963. Los X-Men son mutantes, seres humanos que nacen con habilidades especiales que a menudo se manifiestan durante la adolescencia. Liderados por el Profesor Charles Xavier, los X-Men luchan por la coexistencia pacífica entre humanos y mutantes, defendiendo a ambos grupos contra amenazas mutantes y no mutantes por igual. Algunos de los personajes más icónicos de los X-Men incluyen a Wolverine, Cyclops, Jean Grey, Storm, Beast, y muchos otros. Su lucha contra la discriminación y la aceptación de la diversidad han sido temas fundamentales en muchas de sus historias,algunos de estos personajes son:'
    this.list1Element1 = 'Profesor X (Charles Xavier): Fundador y líder del equipo, un poderoso telepático y líder en la lucha por la coexistencia pacífica entre humanos y mutantes.'
    this.list1Element2 = 'Cyclops (Scott Summers): Uno de los primeros reclutas de Xavier, que emite ráfagas ópticas controladas a través de sus ojos.'
    this.list1Element3 = 'Jean Grey (Marvel Girl/Phoenix): Telepática y telequinética, y en ciertos puntos, hospeda la entidad cósmica conocida como Fénix.'
    this.list1Element4 = 'Wolverine (Logan): Un mutante con habilidades regenerativas, garras retráctiles y sentidos aumentados, además de un experto en combate cuerpo a cuerpo.'
    this.list1Element5 = 'Storm (Ororo Munroe): Capaz de controlar el clima, y una de las líderes más prominentes del equipo.'
    this.list1Element6 = 'Beast (Henry McCoy): Un científico con una apariencia bestial y habilidades físicas mejoradas.    '
    this.list1Element7 = 'Rogue: Con la capacidad de absorber las habilidades y recuerdos de otros mutantes con solo tocarlos.'
    this.list1Element8 = 'Gambit (Remy LeBeau): Con la habilidad de cargar objetos inanimados con energía explosiva y un maestro en el uso de cartas de juego como armas.'
    this.list1Element9 = 'Nightcrawler (Kurt Wagner): Con la capacidad de teletransportarse a través de distancias cortas y una apariencia física distintiva.    '
    this.list1Element10 = 'Iceman (Bobby Drake): Capaz de generar y manipular hielo a su voluntad.'
    this.list1Element11 = 'Colossus (Piotr Rasputin): Con la habilidad de transformarse en un ser de acero orgánico indestructible.'
    this.list1Element12 = 'Kitty Pryde (Shadowcat): Con la habilidad de atravesar objetos sólidos y unirse a ellos como "fantasma".'
    this.image1URL = 'https://cdn.atomix.vg/wp-content/uploads/2023/09/xmen.png'

    this.title2 = '4 Fantasticos'
    this.paragraph2 = 'Los Cuatro Fantásticos son otro equipo de superhéroes de Marvel Comics. Fueron creados por Stan Lee y Jack Kirby y aparecieron por primera vez en "The Fantastic Four" #1 en 1961.Los Cuatro Fantásticos son conocidos por explorar el espacio y el multiverso, enfrentarse a amenazas cósmicas y defender al mundo de peligros de todo tipo. Su título originalmente revolucionó la industria del cómic y sentó las bases para el Universo Marvel que conocemos hoy en día.Los miembros principales del equipo son:'
    this.list1Element13 = 'Sr. Fantástico (Reed Richards): El líder del grupo, posee una inteligencia superhumana y la capacidad de estirar y deformar su cuerpo en cualquier forma imaginable.'
    this.list1Element14 = 'La Mujer Invisible (Susan Storm-Richards): Esposa de Reed, puede volverse invisible y crear campos de fuerza invisibles.'
    this.list1Element15 = 'La Antorcha Humana (Johnny Storm): Hermano de Susan, puede encender su cuerpo en llamas y volar.'
    this.list1Element16 = 'La Cosa/La mole (Ben Grimm): Amigo de la infancia de Reed, posee una fuerza y resistencia sobrehumanas, así como una piel pétreo-naranja debido a una exposición a radiación cósmica.'
    this.image2URL = 'https://img.rtve.es/imagenes/cuatro-fantasticos-origen-del-universo-marvel/1471187611866.jpg'

    this.title3 = 'The Avengers'
    this.paragraph3 = '"Los Vengadores", un equipo de superhéroes de Marvel Comics. Los Vengadores es un grupo que ha tenido diferentes formaciones a lo largo de los años, pero generalmente incluye a héroes icónicos como Iron Man, Capitán América, Thor, Hulk, Viuda Negra y Ojo de Halcón, entre otros. Juntos, trabajan para proteger el mundo de amenazas sobrenaturales, extraterrestres y supervillanos. También son conocidos por sus adaptaciones cinematográficas, donde han protagonizado una serie de exitosas películas del Universo Cinematográfico de Marvel (MCU).'
    this.list1Element17 = 'Iron Man (Tony Stark)'
    this.list1Element18 = 'Capitán América (Steve Rogers)'
    this.list1Element19 = 'Thor'
    this.list1Element20 = 'Hulk (Bruce Banner)'
    this.list1Element21 = 'Viuda Negra (Natasha Romanoff)'
    this.list1Element22 = 'Ojo de Halcón (Clint Barton)'
    this.list1Element23 = 'Bruja Escarlata (Wanda Maximoff)'
    this.list1Element24 = 'Visión'
    this.list1Element25 = 'Capitana Marvel (Carol Danvers)'
    this.list1Element26 = 'Pantera Negra (T Challa)'
    this.list1Element27 = 'Spider-Man (Peter Parker)'
    this.list1Element28 = 'Ant-Man (Scott Lang) y la Avispa (Hope van Dyne)'
    this.list1Element29 = 'Doctor Strange (Stephen Strange)'
    this.list1Element30 = 'Falcon (Sam Wilson)'
    this.list1Element31 = 'Soldado del Invierno (Bucky Barnes)'
    this.image3URL = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a364ee04-6380-4393-a551-2199250f57bf/dbtspza-04318586-4f6e-4363-b1b9-b9f285b1d475.jpg/v1/fill/w_1024,h_626,q_75,strp/the_avengers___wallpaper_by_daviddv1202_dbtspza-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjI2IiwicGF0aCI6IlwvZlwvYTM2NGVlMDQtNjM4MC00MzkzLWE1NTEtMjE5OTI1MGY1N2JmXC9kYnRzcHphLTA0MzE4NTg2LTRmNmUtNDM2My1iMWI5LWI5ZjI4NWIxZDQ3NS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.D1AUjxXBzPIp_-Wq458tK5qIbcHjfuIW0C7sBpyYNx4'

    this.title4 = 'Defenders'
    this.paragraph4 = 'Los Defensores son otro equipo de superhéroes en el universo de Marvel Comics, aunque su formación y membresía han variado a lo largo de los años. Al igual que con los Vengadores, los miembros de los Defensores han variado en diferentes series de cómics y adaptaciones de medios. En el Universo Cinematográfico de Marvel (MCU), se ha creado una serie de televisión de Netflix llamada "The Defenders", que sigue a Daredevil, Jessica Jones, Luke Cage y Puño de Hierro.Algunos de los miembros más conocidos incluyen:'
    this.list1Element32 = 'Doctor Strange (Stephen Strange)'
    this.list1Element33 = 'Hulk (Bruce Banner)'
    this.list1Element34 = ' Namor el Submarinero'
    this.list1Element35 = 'El Hombre Hormiga (Hank Pym)'
    this.list1Element36 = 'La Valquiria (Brunnhilde)'
    this.list1Element37 = 'Silver Surfer (Norrin Radd)'
    this.list1Element38 = 'Daredevil (Matt Murdock)'
    this.list1Element39 = 'Jessica Jones    '
    this.list1Element40 = 'Luke Cage'
    this.list1Element41 = ' Puño de Hierro (Danny Rand) '
    this.image4URL = 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/07/defenders-comics-marvel.jpg?tf=1920x'

    this.title5 = 'Inhumans'
    this.paragraph5 = 'Los Inhumanos son una raza ficticia de superhumanos en el universo de Marvel Comics. Son el resultado de experimentos genéticos realizados por una raza alienígena conocida como los Kree. Los Inhumanos han tenido varias series de cómics propias y han aparecido en diversas historias de Marvel. También tuvieron una serie de televisión propia, "Inhumans", que se emitió en 2017. Algunos de los Inhumanos más destacados incluyen:'
    this.list1Element42 = 'Rayo Negro (Black Bolt): Líder de los Inhumanos, cuya voz es tan poderosa que puede destruir ciudades enteras con un simple susurro.'
    this.list1Element43 = 'Medusa: Esposa de Rayo Negro, cuyos largos cabellos prensiles le permiten manipular y controlar objetos.'
    this.list1Element44 = 'Karnak: Un estratega y artista marcial experto con la habilidad de percibir las debilidades en cualquier objeto o plan.'
    this.list1Element45 = 'Crystal: Hermana de Medusa, que tiene la habilidad de controlar los elementos naturales como el fuego, el agua y el aire.'
    this.list1Element46 = 'Gorgon: Posee piernas parecidas a las de un sátiro y la capacidad de generar poderosas ondas de choque con sus pisotones.'
    this.list1Element47 = 'Tríton: Tiene la capacidad de respirar bajo el agua y comunicarse telepáticamente con las criaturas marinas.'
    this.list1Element48 = 'Lockjaw: Un perro gigante con la capacidad de teleportarse a través del espacio y el tiempo.'
    this.image5URL = 'https://imagenes.heraldo.es/files/image_1920_1080/uploads/imagenes/2016/11/15/_52333bd91a4ac_f6e04941.jpg'
  }

  render() {
    return html`
      <div id="main">
       <h1 class="main-title">${this.title}</h1>
       <h1 class="subtitle">${this.title1}</h1>
       <p class="paragraphone">${this.paragraph1}</p>
       <ul>
          <li class="paragraphone"><i>${this.list1Element1}</i></li>
          <li class="paragraphone"><i>${this.list1Element2}</i></li>
          <li class="paragraphone"><i>${this.list1Element3}</i></li>
          <li class="paragraphone"><i>${this.list1Element4}</i></li>
          <li class="paragraphone"><i>${this.list1Element5}</i></li>
          <li class="paragraphone"><i>${this.list1Element6}</i></li>
          <li class="paragraphone"><i>${this.list1Element7}</i></li>
          <li class="paragraphone"><i>${this.list1Element8}</i></li>
          <li class="paragraphone"><i>${this.list1Element9}</i></li>
          <li class="paragraphone"><i>${this.list1Element10}</i></li>
          <li class="paragraphone"><i>${this.list1Element11}</i></li>
          <li class="paragraphone"><i>${this.list1Element12}</i></li>
       </ul>
       <div class="team-img-container">
         <img class="team-img" src="${this.image1URL}">
       </div>
       <h1 class="paragraphtwo">${this.title2}</h1>
       <p class="paragraphtwo">${this.paragraph2}</p>
       <ul>
          <li class="paragraphtwo"><i>${this.list1Element13}</i></li>
          <li class="paragraphtwo"><i>${this.list1Element14}</i></li>
          <li class="paragraphtwo"><i>${this.list1Element15}</i></li>
          <li class="paragraphtwo"><i>${this.list1Element16}</i></li>
       </ul>
       <div class="team-img-container">
          <img class="team-img" src="${this.image2URL}">
       </div>
       <h1 class="paragraphthree">${this.title3}</h1>
       <p class="paragraphthree">${this, this.paragraph3}</h1>
       <ul>  
          <li class="paragraphthree"><i>${this.list1Element17}</i></li>
          <li class="paragraphthree"><i>${this.list1Element18}</i></li>
          <li class="paragraphthree"><i>${this.list1Element19}</i></li>
          <li class="paragraphthree"><i>${this.list1Element20}</i></li>
          <li class="paragraphthree"><i>${this.list1Element21}</i></li>
          <li class="paragraphthree"><i>${this.list1Element22}</i></li>
          <li class="paragraphthree"><i>${this.list1Element23}</i></li>
          <li class="paragraphthree"><i>${this.list1Element24}</i></li>
          <li class="paragraphthree"><i>${this.list1Element25}</i></li>
          <li class="paragraphthree"><i>${this.list1Element26}</i></li>
          <li class="paragraphthree"><i>${this.list1Element27}</i></li>
          <li class="paragraphthree"><i>${this.list1Element28}</i></li>
          <li class="paragraphthree"><i>${this.list1Element29}</i></li>
          <li class="paragraphthree"><i>${this.list1Element30}</i></li>
          <li class="paragraphthree"><i>${this.list1Element31}</i></li>
       </ul>
       <div class="team-img-container">
         <img class="team-img" src="${this.image3URL}">
       </div>
      
       <div class="paragraphfour">
          <h1 >${this.title4}</h1>  
          <p >${this.paragraph4}</p>
          <ul>
            <li><i>${this.list1Element32}</i></li>
            <li><i>${this.list1Element33}</i></li>
            <li><i>${this.list1Element34}</i></li>
            <li><i>${this.list1Element35}</i></li>
            <li><i>${this.list1Element36}</i></li>
            <li><i>${this.list1Element37}</i></li>
            <li><i>${this.list1Element38}</i></li>
            <li><i>${this.list1Element39}</i></li>
            <li><i>${this.list1Element40}</i></li>
            <li><i>${this.list1Element41}</i></li>
         </ul>
         <div class="team-img-container">
          <img class="team-img" src="${this.image4URL}">
         </div>
      </div>
    
      <div class="paragraphfive">
        <h1>${this, this.title5}</h1>
        <p>${this.paragraph5}</p>
        <ul>
          <li><i>${this.list1Element42}<i></li>
          <li><i>${this.list1Element43}<i></li>
          <li><i>${this.list1Element44}<i></li>
          <li><i>${this.list1Element45}<i></li>
          <li><i>${this.list1Element46}<i></li>
          <li><i>${this.list1Element47}<i></li>
          <li><i>${this.list1Element48}<i></li>
        </ul>
        <div class="team-img-container">
         <img class="team-img" src="${this.image5URL}">
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
      }

      #main {
        background-color: rgb(47, 85, 85) ;
      }

      .main-title {
        color: red;
      }
      
      .subtitle {
        color:yellow;
      }
    
      .paragraphone{
        color:yellow;
      }

      .team-img{
        width: 25vw;
    } 
    
      .paragraphtwo{
        color: rgb(117, 108, 199)
        }

      .team-img-container{
        text-align:center;
      }

      .paragraphthree{
        color: red
      }

      .paragraphfour{
        color:white
      }

      .paragraphfive{
        color:purple
      }

    `
  }
}

window.customElements.define('marvel-element', Marvel)
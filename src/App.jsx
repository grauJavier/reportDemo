import {
  Article,
  Article__Header,
  Article__Interview,
  Article__Paragraph,
  Interview__Image,
  Interview__QA,
} from './components/Article';
import ScrollProgressBar from './components/ScrollProgressBar';
import Separator from './components/Separator';

function App() {
  return (
    <div className="px-2.5 pt-2 pb-12">
      <ScrollProgressBar />
      <Article>
        <Article__Header
          imgSrc="https://elpais.com/especiales/2019/frontera-sur/capitulo-1/img/1560851881_870643_1560952176_sumario_normal_recorte1.jpg"
          imgAlt="Doña Silvia, en el cementerio más bonito y triste del mundo"
          title="Doña Silvia, en el cementerio más bonito y triste del mundo"
        />
        <Separator />
        <Article__Paragraph>
          Busco al delegado de Xcalak, un cargo similar al alcalde pero con menos competencias, para
          una entrevista. Al menos una decena de testimonios recogidos apuntan a Luis Lorenzo López
          y a su segundo como los capos del lugar en asociación con su compadre, el alcalde de
          Mahahual, la cabecera municipal. De ellos dicen que son los encargados de comprar, equipar
          y pagar los campamentos y la mercancía. El delegado tiene que salir del pueblo, explica,
          pero me remite al subdelegado, que vive al final de la calle.
        </Article__Paragraph>
        <Article__Paragraph>
          A la sombra de las buganvilias y los cocoteros, dos familias amigas terminan de comer.
          Ríen, bromean y se sacan los restos de comida de la boca con el palillo dental. Una de
          ellas es la de Enrique Esteban Valencia y la otra, la del alcalde de Mahahual, Obed Durón
          Gómez. Sobre el mantel de cuadros hay restos de langosta y camarones y cuatro policías
          municipales aguardan de pie con el arma colgada del cuello. No tienen derecho a silla ni a
          comida familiar, pero interactúan con naturalidad con los hombres más poderosos de la
          región. Están a gusto.
        </Article__Paragraph>
        <Article__Interview>
          <Interview__Image
            imgSrc="https://elpais.com/especiales/2019/frontera-sur/capitulo-1/img/entrevista.jpg"
            imgAlt="Retrato de Subdelegado"
          />
          <div className="flex flex-col self-center relative mt-[-100dvh] w-[53rem]">
            <Interview__QA
              question="¿Qué propone para el sargazo? ¿Quiere que el Gobierno envíe gente para su limpieza, como proponen los hoteleros?, pregunto al subdelegado."
              answer="“Que no vengan, esa no es nuestra solución, no, aquí no necesitamos que venga nadie”, contesta. Al subdelegado no le hace ni pizca de gracia la posibilidad de que comiencen a llegar cuadrillas de gente extraña a revolver las playas del pueblo."
              intervieweeId="1"
            />
            <Interview__QA
              question="¿Cómo atiende el problema narcotráfico y el hecho de que los jóvenes se dediquen a esta actividad?"
              answer="“Yo no lo llamaría actividad. La gente es libre de caminar por donde quiera. No es un tema que nos incumba, hay autoridades para ello”, responde."
              intervieweeId="1"
            />
            <Interview__QA
              question="Pero es obvio que mucha gente se dedica a playear y su pueblo es un punto importante de entrada de droga."
              answer="“No sé de qué me habla. Es un tema que no nos incumbe”, contesta el alcalde y asiente su compadre."
              intervieweeId="2"
            />
            <Interview__QA
              question="¿Y los campamentos que hemos visto?"
              answer="“No sé qué información trae usted pero no son campamentos. La gente necesita tierra para vivir y si no tiene pues hay que dársela”, dice el alcalde de Mahahual."
              intervieweeId="2"
            />
          </div>
        </Article__Interview>
        <Article__Paragraph>
          ¿Qué propone para el sargazo? ¿Quiere que el Gobierno envíe gente para su limpieza, como
          piden los hoteleros?, pregunto al subdelegado.
        </Article__Paragraph>
        <Article__Paragraph>
          Cae la tarde en Xcalak y una ligera brisa se levanta moviendo las palmeras y las
          embarcaciones. La traducción de origen latín de “alisios” lo describe como “un viento
          suave y amable” que los ingleses tradujeron como trade wings, los vientos del comercio. La
          facilidad de Xcalak para crear palabras ha logrado también en este caso refinar el término
          fusionando ambas definiciones.
        </Article__Paragraph>
      </Article>
    </div>
  );
}

export default App;

import './Style.scss';

import Header from './components/header'
import Hero from './components/hero'
import TextSection from './components/TextSection'
import ImageSection from './components/ImageSection';

//Images:
import SeaImage from './assets/splitsektion-1.jpg';
import BirdImage from './assets//splitsektion-2.jpg';



function App() {


  return (
    <>
      <header>
        <Header></Header>
      </header>

      <main>
        <Hero></Hero>

        <section className="section__color">
        <TextSection 
        className='Txt__centered'
        h2="Pursuit of excellence"
        text="The idea of form follows function, a guiding credo ipsum dolor sit amet consectetur adipisicing elit. Velit unde veritatis ipsam nulla molestias inventore sint eaque deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nemo qui, natus atque possimus, illum illo velit iste esse sunt, nobis explicabo unde mollitia eum.
        "></TextSection>
        </section>

        <ImageSection image={SeaImage}
        >
        </ImageSection>

      </main>
    </>
  )
}

export default App

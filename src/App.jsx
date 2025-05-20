

import './Style.scss';

import Header from './components/header'
import Hero from './components/hero'
import TextSection from './components/TextSection'
import ImageSection from './components/ImageSection';

import './components/ImageSection.scss';

//Images:
import SeaImage from './assets/splitsektion-1.jpg';
import BirdImage from './assets//splitsektion-2.jpg';
import CategorySection from './components/CategorySection';
import FormSection from './components/FormSection';
import Footer from './components/footer';



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
        text="The idea of form follows function,
        a guiding credo ipsum dolor sit amet consectetur adipisicing elit.
        Velit unde veritatis ipsam nulla molestias inventore sint eaque deserunt.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        "></TextSection>
        </section>

        <ImageSection
        image={SeaImage}
        className='image__left'
        >
        </ImageSection>

        <CategorySection></CategorySection>


        <ImageSection
          image={BirdImage}
          className="image__right"
          >
        </ImageSection>


        <FormSection />
      </main>
      <Footer></Footer>
    </>

  );
}

export default App;

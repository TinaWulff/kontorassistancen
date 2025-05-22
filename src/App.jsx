import React from 'react';

import './Styles/Style.scss';

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TextSection from './components/TextSection.jsx'
import ImageSection from './components/ImageSection.jsx';
import Footer from './components/Footer';

import './components/ImageSection.scss';

//Images:
import SeaImage from './assets/splitsektion-1.jpg';
import BirdImage from './assets/splitsektion-2.jpg';
import CategorySection from './components/CategorySection';
import FormSection from './components/FormSection';




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
        text='The idea of "form follows function", a principle associated with the modernist design movement, was the starting place for our Voda collection. Its classic geometry and clean finishes unite into an industrial modern style, crafted for Australian living.. 
        '></TextSection>
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

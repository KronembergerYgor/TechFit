import React from 'react';
import FirstSession from '../components/body/FirstSession';
import SecondSession from '../components/body/SecondSession';
import ThirdSession from '../components/body/ThirdSession';
import FourthSession from '../components/body/FourthSession';
import Footer from '../components/body/Footer';
import TitleModalRegister from '../components/TitleModalRegister';
import BodyModalRegisters from '../components/BodyModalRegisters';
import Modal from '../components/Modal';
import { ScrollToTop } from '../components/ScrollToTop';
import Header from '../components/header/Header';

function Home() {




  return (
    <>
      <Header />

      <div className='containerGeral'>
      <div className='backgroundFirstSession' data-aos="fade-up" data-aos-delay="200">
        <FirstSession />
      </div>

      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="100">
        <SecondSession />
      </div>

      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="100">
        <ThirdSession />
      </div>

      <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="100">
        <FourthSession />
      </div>

      <Footer />

      <ScrollToTop />

      <Modal idModal="modalCadastro" titleModal={<TitleModalRegister />} bodyModal={<BodyModalRegisters />} />
    </div>
    
    </>
    
  );
}
export default Home;
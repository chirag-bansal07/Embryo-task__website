import './hero.css';
import hero from '..//images/hero-img.png'
function Hero(){
    return(
    <div className="home-hero">
      <div className='hero__heading'>
      <h1 className='hero_head'>Welcome To BITS Embryo</h1>
      <p>BITS Embryo</p>
      </div>
    <div className="home-hero__image">
      <img src={hero} alt='Hero Img' className='home-hero__img'/>
    </div>
    <div class="home-hero__button">
      <button className='button_'>Get Started</button>
    </div>
    <div className='home-hero__heading'>
      <h1>BITS Embryo</h1>
    </div>
    <div className='home-hero__para'>
      <p>BITS Embryo is an Institute body that aims to improve students' learning experience and exposure to various domains. We, at BITS Embryo, believe in
         'Borderless Classrooms & Bottomless Resources'. We are an enthusiastic closely-knit group that is responsible for organising talks by distinguished 
          professionals, in their respective fields, for the benefit of the students. Embryo is a project to foster strong collaboration of BITS students and BITS
          faculty with the alumni and friends of BITS Pilani. Through lecture series and collaborative projects, the students can get exposure to the cutting edge 
          research areas. They also get an opportunity to network with Alumni and friends of BITS, who are reputed academicians and industry leaders. We aim to 
          leverage BITSConnect to bring the alumni closer to the students and faculty. On Jan 9, 2013, BITSConnect 2.0 was inaugurated. A multi-million dollar 
          project which brings state of the art telepresence and interconnectivity to the campuses of BITS; it provides Embryo the platform to conduct high-quality
          cross campus talks, and to further enhance the remote learning experience that it has been providing across all the campuses for some time now. Embryo aims
          to help students of BITS Pilani become Leaders, Innovators and Entrepreneurs of tomorrow.
          We also invite and host the Chief Guests of OASIS and BOSM, the cultural and sports fest of BITS Pilani, respectively. Celebrities including Imtiaz Ali, S.S. Rajamouli,
          Shabbir Boxwala, Saharsh Kumar Shukla, Yogeshwar Dutt, Tigmanshu Dhulia, Tania Sachdev, Jitu Rai and many others have been hosted in the past. We had pre-BOSM Instagram 
          Live Sessions with Komalika Bari and Atanu Das & Deepika Kumari. During the 50th Edition of Oasis, we also hosted The Tabla Guy as an opening act during the EDM Nite Prof Show.
        </p>
    </div>
  </div>)
}
export default Hero;
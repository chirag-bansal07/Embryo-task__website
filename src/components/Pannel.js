import './pannel.css';
import dhruv from '..//images/Pannel/dhruv_shah.jpeg';
import Pratyush from '..//images/Pannel/pratyush.jpeg';
import Rahul from '..//images/Pannel/rahul.png';
import Rajesh from '..//images/Pannel/rajesh.jpg';
import sam from '..//images/Pannel/samaksh.jpeg';
import Sumantrk from '..//images/Pannel/sumantrak.jpeg';
import Tanmay from '..//images/Pannel/tanmay.jpg';
import Tanushree from '..//images/Pannel/tanushree_resized.png';
import Vikas from '..//images/Pannel/vikas.jpg';
function Pannel(){
  return(
  <div class="Pannel">
  <h1>Panel Discussions</h1>
  <h2>Gateway to GRE 2023</h2>
  <div className='pannel__container'>
    <div className="person_ID__container">
          <img src={Pratyush} alt='image' className='Lecture__image'></img>
          <h3>PRATYUSH ADMANABHAN</h3>
          <p>336/340, offered MS in Aeronautics and Astronautics at Purdue University</p>
          <h3>10 June, 2023</h3>
    </div>
    <div className="person_ID__container">
          <img src={Sumantrk} alt='image' className='Lecture__image'></img>
          <h3>SUMANTRAK MUKHERJEE</h3>
          <p>327/340, working as junior reasearcher at DFKI, Germany</p>
          <h3>10 June, 2023</h3>
    </div>
    <div className="person_ID__container">
          <img src={sam} alt='image' className='Lecture__image'></img>
          <h3>SAMAKSH JUDSON</h3>
          <p>327/340, offered MS Mechanical Engineering at Carnegie Mellon University</p>
          <h3>10 June, 2023</h3>
    </div>
    <div className="person_ID__container">
          <img src={dhruv} alt='image' className='Lecture__image'></img>
          <h3>DHRUV SHAH</h3>
          <p>326/340, offered MS Finance Engineering at University of California, Los Angeles</p>
          <h3>19 August, 2023</h3>
    </div>
  </div>
  <h2>Perspectives Unfolded</h2>
  <div className='pannel__container'>
    <div className="person_ID__container">
          <img src={Tanushree} alt='image' className='Lecture__image'></img>
          <h3>TANUSHREE BAGRODIA</h3>
          <p>Tanushree Bagrodia is the ex-CFO of UDAAN and CFO of Laxmi Organics.</p>
          <h3>19 March, 2023</h3>
    </div>
    <div className="person_ID__container">
          <img src={Rahul} alt='image' className='Lecture__image'></img>
          <h3>RAHUL BOTHRA</h3>
          <p>Rahul Bothra is the CFO of Swiggy.</p>
          <h3>19 March, 2023</h3>
    </div>
    <div className="person_ID__container">
          <img src={Tanmay} alt='image' className='Lecture__image'></img>
          <h3>TANMAY KUMAR</h3>
          <p>Tanmay Kumar is the CFO of Shiprocket.</p>
          <h3>19 March, 2023</h3>
    </div>
    <div className="person_ID__container">
          <img src={Rajesh} alt='image' className='Lecture__image'></img>
          <h3>RAJESH RAJU</h3>
          <p>Rajesh Raju is a BITS alumnus currently at Kalaari Capital as Managing Director</p>
          <h3>19 March, 2023</h3>
    </div>
    <div className="person_ID__container">
          <img src={Vikas} alt='image' className='Lecture__image'></img>
          <h3>VIKAS AGGARWAL</h3>
          <p>Vikas Aggarwal is the co-founder of We Founder Circle, India's largest angel investor network.</p>
          <h3>19 March, 2023</h3>
    </div>
  </div>

  </div>)
}
export default Pannel;
import './Lectures.css'
import giri from '..//images/Lectures/a_giri.jpeg';
import abp from '..//images/Lectures/abp.jpg';
import adwaita from '..//images/Lectures/adwaita.jpg';
import jayant from '..//images/Lectures/jayant_rathore.jpg';
import kiran from '..//images/Lectures/kiran-bedi.png';
import pratham from '..//images/Lectures/pratham.jpg';
import sandeep from '..//images/Lectures/sandeep_jain.jpg';
import satya from '..//images/Lectures/satya.jpeg';
function Lectures(){
    return(
    <section id="Lectures" className="Lectures__main">
      <h1>Previous Lectures</h1>
      <div className='Lectures-row1'>
        <div className="person_ID__container">
          <img src={satya} alt='image' className='Lecture__image'></img>
          <h3>INDIA'S SEMICONDUCTOR MISSION</h3>
          <h3>DR. SATYA GUPTA</h3>
          <p>Dr. Satya Gupta is a BITS alumnus with a bachelors in Electrical Engg, a Masters in Comp Sci from IIT Delhi and a PhD in neural networks from Old Dominion University, Norfolk. He is the current President of the VLSI Society of India</p>
          <h3>19 August, 2023</h3>
        </div>
        <div className="person_ID__container">
        <img src={abp} alt='image' className='Lecture__image'></img>
          <h3>DEMOCRATISING THE RUPEE</h3>
          <h3>DR AJAY BHUSHAN PANDEY</h3>
          <p>An IAS officer with a bachelors from IIT Kanpur and a Masters and PhD from University of Minnesota, Dr. Ajay Bhushan Pandey is the man responsible for bringing Aadhaar, GST and Direct Tax reforms in the country. He is the present chairman of NFRA</p>
          <h3>16 June, 2023</h3>
        </div>
        <div className="person_ID__container">
        <img src={sandeep} alt='image' className='Lecture__image'></img>
          <h3>THE CODING PUZZLE - BRINGING THE PIECES TOGETHER</h3>
          <h3>SANDEEP JAIN</h3>
          <p>Sandeep Jain is an IIT Roorkee alumnus who obtained his Master's degree in Computer Science & Engineering. Under his leadership, GeeksforGeeks has become one of the most trusted & comprehensive resources for computer science education.</p>
          <h3>22 April, 2023</h3>
        </div>
        <div className="person_ID__container">
        <img src={kiran} alt='image' className='Lecture__image'></img>
          <h3>LEADERSHIP PRACTICES THAT DELIVER</h3>
          <h3>KIRAN BEDI</h3>
          <p>The Iron Lady of India, Dr. Kiran Bedi, has been India's first and highest woman-ranking officer and has worked with the United Nations in New York. Dr. Bedi is a recipient of the prestigious Ramon Magsaysay Award and several other national and international decorations.</p>
          <h3>16 April, 2023</h3>
        </div>
      </div>
      <div className='Lectures-row2'>
        <div className="person_ID__container">
        <img src={jayant} alt='image' className='Lecture__image'></img>
          <h3>UPSC ASPIRATIONS</h3>
          <h3>JAYANT SINGH RATHORE</h3>
          <p>Jayant Singh Rathore is a BITS Alumnus who cleared the Civil Services Exam with an exceptional AIR-59 and got into IAS-Gujrat Cadre.</p>
          <h3>7 April, 2023</h3>
        </div>
        <div className="person_ID__container">
        <img src={pratham} alt='image' className='Lecture__image'></img>
          <h3>BUILDING THE STUDENT TALENT POOL</h3>
          <h3>PRATHAM MITTAL</h3>
          <p>Pratham Mittal is the founder of Master's Union and co-founder of Outgrow, a platform used by top agencies and Fortune 500 companies. He is also a partner at 606 Ventures.</p>
          <h3>5 April, 2023</h3>
        </div>
        <div className="person_ID__container">
        <img src={giri} alt='image' className='Lecture__image'></img>
          <h3>BEING BITSIAN: CARVING A SUCCESSFUL CAREER IN OPERATIONS RESEARCH</h3>
          <h3>ABHIK GIRI</h3>
          <p>Abhik Giri is a BITS Alumnus and currently an Operations Research Professional with 12+ years of industry experience in Mathematical Optimization.</p>
          <h3>5 March, 2023</h3>
        </div>
        <div className="person_ID__container">
        <img src={adwaita} alt='image' className='Lecture__image'></img>
          <h3>LESSONS FROM THE IVIES: SUSTAINABLE FASHION</h3>
          <h3>ADWAITA NAYAR</h3>
          <p>Adwaita Nayar is the co-Founder of Nykaa and the CEO of Nykaa Fashion.</p>
          <h3>26 February, 2023</h3>
        </div>
      </div>
      <div className='Lecture__button'>
        <button className='button_'><a href='https://drive.google.com/file/d/1BMwvZQsBqcipkQFD7wEOy6tg7GK8nYe-/view' target='blank'>Past talk INFO</a></button>
      </div>
    </section>
    )

}
export default Lectures;
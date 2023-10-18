import ge from'..//images/partners/ge.png'
import rr from '..//images/partners/RR.png'
import SE from '..//images/partners/SE.png'
import xanadu from '..//images/partners/xanadu.png'
import zulip from '..//images/partners/zulip.png'
function APOGEE(){
    return(
      <div className='APOGEE'>
        <div className='Apogee-main'>
          <h1>APOGEE</h1>
          <p>APOGEE, the ISO 9001:2008 certified technical fest of BITS, Pilani is a large scale event that has attracted connoissuers of engineering and technology over the years. It represents the zenith of science and engineering in a landscape of future vissionaries and scientists</p>
        </div>
        <div className='apogee-innovation-challenge'>
          <h2>APOGEE Innovation Challenge</h2>
          <p>Apogee Innovation Challenge is a kernel event of Apogee, which provides a platform for students from different colleges of the country to work on the real life problem statements posed by companies. But how does it work?</p>
          <div>
            <l>Problem Statement Released By Companies</l>
            <l>Students Form Teams Of 1 To 3 Members</l>
            <l>Teams Select Problem Statements And Start Working On It. They Have To Submit The Solution Before The Specified Deadline</l>
            <l>Judges From Companies Select Top 5 Teams</l>
            <l>Winners Are Usually Rewarded In Terms Of Cash Prizes, Internships Or Goodies</l>
          </div>
        </div>
        <div className='partcipate'>
          <h2>Why participate?</h2>
          <div>
            <l>By Associating With Apogee Innovation Challenge, The Company Becomes An Event Partner Of Apogee And Would Be Publicised On The Apogee Website And Facebook Page.</l>
            <l>The Company Can Use The Ingenuinity Of Some Of The Brightest Young Minds Of The Country To Get A Pool Of Innovative Approaches For Solving A Particular Problem.</l>
            <l>Being One Of The Major Events Of Apogee And A Unique Concept, This Event Would Get Wide Media Coverages From Leading Media Sources In India.</l>
          </div>
          </div>
          <div>
            <h2>Previous Partners</h2>
            <p>These companies have associated with APOGEE as Industrial Partner in the past:</p>
            <div>
              <img src={rr} alt='Rolls-royce' />
              <img src={SE} alt='SCNEIDER-ELECTRIC' />
              <img src={zulip} alt='ZULIP' />
              <img src={ge} alt='GE HEALTHCARE' />
              <img src={xanadu} alt='XANADU'/>
            </div>
          </div>
        </div>
    )
}
export default APOGEE;

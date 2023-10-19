import './Team.css'
import anish from '..//images/Team/anish.jpg'
import jainam from '..//images/Team/jainam2.jpg'
import maitrey from '..//images/Team/maitrey.jpg'
import nahata from '..//images/Team/nahata.jpg'
import nishit from '..//images/Team/nishit.jpg'
import prof from '..//images/Team/prof.jpeg'
import sachika from '..//images/Team/sachika.jpeg'
import sandhu from '..//images/Team/sandhu.jpg'
import thorat from '..//images/Team/thorat.jpg'
function Team(){
    return(
        <div className='Team'>
            <div className='Team__prof'>
                <h2>professer in charge</h2>
                <img src={prof} alt='DR. RISHIKESH VAIDYA' className='team_img' />
            </div>
            <div className='Team__students'>
                <h2>Student Team</h2>
                <div className='Team-stu row1'>
                    <img src={nishit} alt='Nishit Soni' className='team_img'></img>
                    <img src={jainam} alt='Jainam Hemani' className='team_img'></img>
                    <img src={thorat} alt='Tanishq Thorat' className='team_img'></img>
                    <img src={anish} alt='Anish Hatua' className='team_img'></img>
                </div>
                <div className='Team-stu row2'>
                    <img src={sachika} alt='Sachika lala' className='team_img'></img>
                    <img src={maitrey} alt='Maintery Patel' className='team_img'></img>
                    <img src={nahata} alt='Shubham Nahata' className='team_img'></img>
                    <img src={sandhu} alt='Saksham Sandhu' className='team_img'></img>
                </div>

            </div>
        </div>
    )
}
export default Team;
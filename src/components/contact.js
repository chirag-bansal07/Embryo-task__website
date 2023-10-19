import'./contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Contact(){
    return(<div className="contact">
        <h1>Contact Us</h1>
        <div className="contacts">
            <div className="location">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" style={{color: "#1f5122",}} /> 
            <p>BITS Pilani</p>
            <p>Pilani,Rajasthan 333031</p>
            </div>
            <div className="mail">
            <FontAwesomeIcon icon="fa-solid fa-envelope" style={{color: "#1f512e",}} />
            <p>f20210672@pilani.bits-pilani.ac.in</p>
            </div>
            <div className="number">
            <FontAwesomeIcon icon="fa-solid fa-phone" style={{color: "#1f5132",}} />
            <p>+91 7738536656</p>
            </div>
            <div className="socials">
                <a href="https://www.facebook.com/EmbryoClub/" target="blanck">
                    <FontAwesomeIcon icon="fa-brands fa-facebook" style={{color: "#1f5129",}} /></a>
                <a href="https://www.instagram.com/bitsembryo/?hl=en" target="blanck">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" style={{color: "#1f513a",}} /></a>
                <a href="https://www.linkedin.com/company/embryo-bits/?originalSubdomain=in" target="blanck">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" style={{color: "#25511f",}} /></a>
            </div>

        </div>
    </div>
    )
    
}
export default Contact;
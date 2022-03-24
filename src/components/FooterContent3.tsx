import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'
import twitter from '../assets/twitter.svg'
import email from '../assets/email.svg'
import '../styles/FooterContent3.css'


export function FooterContent3(){
    return(
        <div className="footer-content3-container">
            <div>
                <a href="">www.rocketseat.com.br</a>
            </div>

            <div className="socials">
            <div><img className='socials-img' src={instagram} alt="" /></div>
            <div><img className='socials-img' src={youtube} alt="" /></div>
            <div><img className='socials-img' src={twitter} alt="" /></div>
            <div><img className='socials-img' src={email} alt="" /></div>
            </div>
        </div>
    )
}
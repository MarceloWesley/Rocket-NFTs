import logo from '../assets/logo.svg'
import arrow from '../assets/arrow-black.svg'
import '../styles/FooterContent1.css'


export function FooterContent1(){
    return(
        <div className="logo-footer-container">
            <div className="logo-footer">
            <div className='footer-logo'><img src={logo} alt="" /></div>
            <div className='arrow-footer-container'><a href="#Header"><img src={arrow} alt="" /></a></div>
            </div>
        </div>
    )
}
import logo from '../assets/logo.svg'
import logoMetaMask from '../assets/logo_MetaMask.svg'
import {useState } from 'react'
import { BackGround } from './BackGround1'



export function Header(){
    const [isOpen, setIsOpen] = useState(Boolean)
  
  
    function active(){
     
        if(isOpen === true){
           return setIsOpen(false)
        }

       return setIsOpen(true)
    }

    return(
        <header className="header" id='Header'>
       
            <img src={logo} alt="" />
                <nav  className='navigation' >
                    <ul>
                        <li><a href="">Comprar NFT</a></li>
                        <li><a href="">Sobre</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                
                </nav>

                <nav  className={isOpen ? 'menu-mobile showMenu' : 'menu-mobile'} >
                    <ul>
                        <li><a href="">Comprar NFT</a></li>
                        <li><a href="">Sobre</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Conectar Carteira</a></li>
                    </ul>

                    
                <div className='closeMenu' onClick={() => active()}>
                    <div className='line4'></div>
                    <div className='line5'></div>
                </div>
                </nav>

                <div className='mobile-menu' onClick={() => active()}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>

            <button className="button-meta-mask">
                <img src={logoMetaMask} alt="" />
                <span>Conectar Carteira</span>
            </button>
        </header>
    )
}
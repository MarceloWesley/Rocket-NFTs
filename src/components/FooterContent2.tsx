import '../styles/FooterContent2.css'

export function FooterContent2(){
    return(
        <div className="Footer-content2-container">
            <div className='title-footer-container'>
                <div className='title-footer'>
                    <h2>Fique por dentro  <br /> <span>todas as novidades</span></h2>
                </div>
                <div className='footer-input-container'>
                    <input type="email" name="" id="" 
                    placeholder="nft@rocketseat.com.br"/>
                    <button type="submit">Enviar</button>
                </div>
            </div>

            <div className="footer-navegation-container">
                <nav>
                    <ul>
                        <li><a href="#">Empresa</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Time</a></li>
                        <li><a href="#">Carreira</a></li>
                        </ul>

                        <ul>
                            <li><a href="#">Mapa</a></li>
                            <li><a href="#">Galeria</a></li>
                            <li><a href="#">Populares</a></li>
                            <li><a href="#">Vendas</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>

                        <ul>
                            <li><a href="#">Links</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Termos</a></li>
                            <li><a href="#">Politica</a></li>
                            <li><a href="#">Ajuda</a></li>
                        </ul>

                   
                </nav>

            </div>
        </div>
    )
}
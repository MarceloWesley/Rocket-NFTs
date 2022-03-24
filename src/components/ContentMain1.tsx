import groupAvatars from '../assets/group-avatars.png'
import badge from '../assets/badge.svg'

export function Main1(){
    return(
        <section className="section">
            <div className="artistas-selecionados">
            <div className="texto-artistas-selecionados">
                <p>Mercado digital para colecionaveis em <br /> criptos
                    e tokens não fungivel (NFT).
                   <br /> Compre, venda e descubra ativos digitais
                    exclusivos para você.
                </p>
            </div>
            <div className="artistas-selecionados-container-img">
            <img src={groupAvatars} alt="" />
            <div className="artistas-selecionados-container-texto">
                <p>+10</p>
                <p>Artistas selecionados</p>
            </div>
            </div>
            </div>

            <div className="texto-principal-section" >
            <h1>Descubra a verdadeira <br /> arte digital e <br /> colecione
                diversas <br /> <span>NFTs</span>
            </h1>

            <div className="logo-rocket">
            <img src={badge} alt="" />
            </div>
            </div>

           
        </section>
    )
}
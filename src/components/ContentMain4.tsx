import { CardArtistas } from "./Card-Artistas"
import artista1 from '../assets/artista-1.png'
import artista2 from '../assets/artista-2.png'
import artista3 from '../assets/artista-3.png'
import artista4 from '../assets/artista-4.png'
import artista5 from '../assets/artista-5.png'
import artista6 from '../assets/artista-6.png'
import arrow from '../assets/arrow-orange.svg'


export function Content(){
    return(
        <>
          <div className="artistas-title">
                <h2>Melhores <span>artistas</span></h2>
            </div>
        <div className="artistas-container">
          
            <div className="artistas1">
            <CardArtistas artistaImg={artista1} artistaName='Mayk Brito'
            artistaQtdFotos='80 fotografias'/>
            <CardArtistas artistaImg={artista2} artistaName='Jakeliny G.'
            artistaQtdFotos='99 fotografias'/>
            <CardArtistas artistaImg={artista3} artistaName='João L'
            artistaQtdFotos='50 fotografias'/>
            </div>

            <div className="artistas2">
            <CardArtistas artistaImg={artista4} artistaName='Tamires Santos'
            artistaQtdFotos='43 fotografias'/>
           <CardArtistas artistaImg={artista5} artistaName='Ana Silva'
            artistaQtdFotos='28 fotografias'/>
            <CardArtistas artistaImg={artista6} artistaName='Diego F.'
            artistaQtdFotos='20 fotografias'/>
            </div>
        </div>

        <div className="artistas-arrow">
            <p>Veja todos os artistas</p>
            <img src={arrow} alt="" />
        </div>
        </>
    )
}
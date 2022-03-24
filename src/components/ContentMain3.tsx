import { Card } from "./Card-Astronauta"
import astronauta2 from '../assets/galeria-2.png'
import astronauta7 from '../assets/galeria-7.png'
import astronauta3 from '../assets/galeria-3.png'
import astronauta8 from '../assets/galeria-8.png'



export function Content(){
return(
    
    <>
     <div className="container-title">
            <h2><span>Populares</span> da Semana</h2>
        </div>
       
        <div className="content-container">
            <div className="content1">
            <Card astronautaImg={astronauta2} astronautaNumber='Astronauta 1' 
            astronautaName='Mayk Brito' astronautaRKT='1.50 RKT'/>
            <Card astronautaImg={astronauta7} astronautaNumber='Astronauta 3'  
            astronautaName='João Inácio' astronautaRKT='3.75 RKT'/>
            </div>
            <div className="content2">
            <Card astronautaImg={astronauta3} astronautaNumber='Astronauta 2'  
            astronautaName='Jakeliny Gracielly' astronautaRKT='2.0 RKT'/>
            <Card astronautaImg={astronauta8} astronautaNumber='Astronauta 4'  
            astronautaName='Tamires Santos' astronautaRKT='4.30 RKT'/>
            </div>
            
        </div>
   
    </>
)
}
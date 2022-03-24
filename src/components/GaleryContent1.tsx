import astronauta1 from '../assets/galeria-1.png'
import astronauta2 from '../assets/galeria-2.png'
import astronauta3 from '../assets/galeria-3.png'
import astronauta4 from '../assets/galeria-4.png'
import astronauta5 from '../assets/galeria-5.png'
import astronauta6 from '../assets/galeria-6.png'
import astronauta7 from '../assets/galeria-7.png'
import astronauta8 from '../assets/galeria-8.png'



export function Galery(){
   
    return(
        <section className="galery">
            <div className="galery1">
            <div className='card'><img src={astronauta1} alt="" /></div>
            <div className='card'><img src={astronauta2} alt="" /></div>
            <div className='card'><img src={astronauta3} alt="" /></div>
            <div className='card'><img src={astronauta4} alt="" /></div>
            </div>

            <div className="galery2">
            <div className='card'><img src={astronauta5} alt="" /></div>
            <div className='card'><img src={astronauta6} alt="" /></div>
            <div className='card'><img src={astronauta7} alt="" /></div>
            <div className='card'><img src={astronauta8} alt="" /></div>
            </div>
        </section>
    )
}
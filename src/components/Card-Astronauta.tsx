import '../styles/Card-Astronauta.css'
import arrow from '../assets/arrow-white.svg'

type CardProps = {
astronautaImg: string,
astronautaNumber: string,
astronautaName: string,
astronautaRKT: string
}

export function Card(props: CardProps) {
    return (
        <div className="card-contentMain3">

            <div className="title">
                <h3>{props.astronautaNumber}</h3>
                <div><img src={arrow} alt="" /></div>
            </div>

            <div className="astronauta">
                <p>{props.astronautaName}</p>
                <p>{props.astronautaRKT}</p>
            </div>

            <div className="container-imgMain3">
                <img src={props.astronautaImg} alt="" />
            </div>
        </div>
    )
}




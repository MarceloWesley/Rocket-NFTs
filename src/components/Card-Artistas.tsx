import '../styles/Card-Artistas.css'

type ArtistasProps = {
    artistaImg: string,
    artistaName: string,
    artistaQtdFotos: string
}

export function CardArtistas(props: ArtistasProps){
return(
    <div className="card-artista">
        <div className='img-artista-container'><img src={props.artistaImg} alt="" /></div>
        <div className='artista-info-container'>
            <p className='artistname'>{props.artistaName}</p>
            <p className='photo'>{props.artistaQtdFotos}</p>
        </div>
    </div>
)
}
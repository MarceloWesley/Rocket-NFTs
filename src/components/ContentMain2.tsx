import Banner from '../assets/banner.png'

export function Content(){
    return(
        <div className='container-block'>
    <div className="statistic-text-container">
        <div className="statistic-text-1">
       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Similique laudantium nulla est <br /> veritatis adipisci, sit <span>incidunt</span>,
         excepturi a beatae <br /> facilis repudiandae, numquam sequi.
          Laudantium quas impedit dignissimos tenetur rerum ea.</p>

          <a href="#">Lorem Impsum</a>
        </div>
    
        <div className="statistic-text-2">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Similique laudantium nulla est <br /> veritatis adipisci, sit <span>incidunt</span>,
         excepturi a beatae <br /> facilis  repudiandae, numquam sequi.
          Laudantium quas impedit dignissimos tenetur rerum ea.</p>

           <a href="#">Lorem Impsum</a>
        </div>
    </div>
    
    <div className="container-img">
    <img src={Banner} alt="" />
    </div>
</div>
    )
}
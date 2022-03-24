import {Header} from './Header'
import {Main1} from './ContentMain1'
import { Galery } from './GaleryContent1'


export function BackGround(){
    return(
        <div className="bg-container">
            <Header/>
            <Main1/>
            <Galery/>
            
        </div>
    )
       
    
}
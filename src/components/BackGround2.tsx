import { Content } from "./ContentMain2"
import { Sidebar } from "./SidebarMain2"

export function BackGround2(){
    return(
        <div className="bg-container2">
            <div className="container-limit">
            <Sidebar/>
            <Content/>
            </div>
        </div>
    )
}
import "./main.scss"
import Header from "../header/Header"
import Figure from "../figure/Figure"
import Contents from "../contents/Contents"
import Comments from "../comments/Comments"

function Main(){
    return(
        <main>
            <Header/>
            <Figure/>
            <Contents/>
            <Comments/>
        </main>
    )
}

export default Main
import "./side.scss"
import Search from "../search/Search"
import Categories from "../categories/Categories"
import Widgets from "../widgets/Widgets"

function Side(){
    return(
        <section className="sideBar">
            <div>
                <Search/>
            </div>
            <div>
                <Categories/>
            </div>
            <div>
                <Widgets/>
            </div>
            
        </section>
    )
}

export default Side
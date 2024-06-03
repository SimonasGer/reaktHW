import "./categories.scss"

function Categories(){
    return(
        <div className="categories">
            <div id="catTitle"><p>Categories</p></div>
            <div id="listLinks">
                <div id="list1">
                    <a href="">Web Design</a>
                    <a href="">HTML</a>
                    <a href="">Freebies</a>
                </div>
                <div id="list2">
                    <a href="">JavaScript</a>
                    <a href="">CSS</a>
                    <a href="">Tutorials</a>
                </div>
            </div>
        </div>
    )
}

export default Categories
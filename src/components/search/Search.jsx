import "./search.scss"

function Search(){
    return(
        <div className="search">
            <div><p>Search</p></div>
            <fieldset>
                <input type="text" placeholder="Enter search term..." />
                <button>Go!</button>
            </fieldset>
        </div>
    )
}

export default Search
import "./nav.scss"

function Nav (){
    return (
        <nav role="navigation">
            <h2>Start Bootstrap</h2>
            <ul className="regular">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li className="blog">Blog</li>
            </ul>
            <details  id="menuToggle">
                <summary>
                </summary>
                <ul className="burger">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li className="blog">Blog</li>
                </ul>
            </details>
        </nav>
    );
}

export default Nav
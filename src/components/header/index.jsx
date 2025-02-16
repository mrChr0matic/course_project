import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss"

const Header = ()=>{
    return (
        <div className="nav-wrapper">
            <div className="navbar">
                <div className="icon-name">
                    <p>CYBERGRAM</p>
                </div>
                <div className="search">
                    <form className="search-box">
                        <input type="text" placeholder=" " />
                        <button type="reset"></button>
                    </form>
                </div>
                <div className="right-corner">
                    <p className="trending">Trending</p>
                    <p className="login">Login</p>
                </div>
            </div>
        </div>
    )
}

export default Header;
import "./styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe,faNewspaper,faComputer,faLock,faCoins } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () =>{
    return (
        <div className="sidebar">
            <div className="topics">
                <h3>Topics</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faNewspaper}/> News</li>
                    <li><FontAwesomeIcon icon={faComputer}/> Technology</li>
                    <li><FontAwesomeIcon icon={faGlobe}/> World</li>
                    <li><FontAwesomeIcon icon={faLock}/> Security</li>
                    <li><FontAwesomeIcon icon={faCoins}/> Crypto</li>
                </ul>
            </div>
            <div className="communities">
                <h3>Communities</h3>
                <ul>
                    <li><a href="/community" className="community">c/Crypto</a></li>
                    <li><a href="/community" className="community">c/Hackers</a></li>
                    <li><a href="/community" className="community">c/Networks</a></li>
                    <li><a href="/community" className="community">c/Testing</a></li>
                    <li><a href="/community" className="community">c/QnA</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
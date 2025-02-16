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
                    <li>c/Crypto</li>
                    <li>c/Hackers</li>
                    <li>c/Networks</li>
                    <li>c/Testing</li>
                    <li>c/QnA</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
import { Link } from "react-router-dom";  // ✅ Use Link for routing
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faNewspaper, faComputer, faLock, faCoins } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { getAllCommunity } from "../../api/api";

const Sidebar = (props) => {
    const [comms, setComms] = useState([]);

    useEffect(() => {
        const commList = async () => {
            try {
                const data = await getAllCommunity();
                setComms(data);
            } catch (err) {
                console.error("Error fetching communities:", err);
            }
        };

        commList();
    }, []);

    const handleClick = (name) =>{
        props.setCommunity(name);
    }
    return (
        <div className="sidebar">
            <div className="topics">
                <h3>Topics</h3>
                <ul>
                    <li><FontAwesomeIcon icon={faNewspaper} /> News</li>
                    <li><FontAwesomeIcon icon={faComputer} /> Technology</li>
                    <li><FontAwesomeIcon icon={faGlobe} /> World</li>
                    <li><FontAwesomeIcon icon={faLock} /> Security</li>
                    <li><FontAwesomeIcon icon={faCoins} /> Crypto</li>
                </ul>
            </div>
            <div className="communities">
                <h3>Communities</h3>
                <ul>
                    {comms.map((comm) => (
                        <li key={comm.id}>
                            <Link to={`/community/${comm.name}`} className="community" onClick={()=>handleClick(comm)}>c/{comm.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

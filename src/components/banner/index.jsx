import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import { useState } from "react";
import { joinCommunity } from "../../api/api";

const Banner = (props) => {
    const [isJoined, setIsJoined] = useState(false); 
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        props.setPost(!props.post);
    };

    const joinComm = async () => {
        if (!props.commId) {
            console.error("Community ID is missing");
            return;
        }
        
        setLoading(true);
        try {
            await joinCommunity(props.commId);
            setIsJoined(true); 
        } catch (error) {
            console.error("Failed to join community:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="banner">
            <div className="image">
                <img 
                    src={props.banner || "https://2456764.fs1.hubspotusercontent-eu1.net/hub/2456764/hubfs/cyberattack_1200x627.jpg"} 
                    alt="banner" 
                    className="pic"
                />
            </div>
            <div className="icon">
                <img 
                    src={props.icon || "https://2456764.fs1.hubspotusercontent-eu1.net/hub/2456764/hubfs/cyberattack_1200x627.jpg"} 
                    alt="icon" 
                    className="icon-pic"
                />
            </div>
            <div className="banner-title">
                <p className="title">c/{props.title}</p>
                <div className="buttons">
                    <div className="post" onClick={handleClick}>
                        <FontAwesomeIcon icon={faPlus} className="plus"/> <span>Post</span>
                    </div>
                    <div className={`join ${isJoined ? "joined" : ""}`} onClick={joinComm}>
                        {loading ? "Joining..." : isJoined ? "Joined" : "Join"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

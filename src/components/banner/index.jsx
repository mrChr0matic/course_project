import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import { useEffect,useState } from "react";

const Banner = (props) =>{

    const handleClick = () =>{
        props.setPost(!props.post)
    }

    return (
        <div className="banner">
            <div className="image">
                <img src={props.banner ? props.banner : "https://2456764.fs1.hubspotusercontent-eu1.net/hub/2456764/hubfs/cyberattack_1200x627.jpg"} alt="banner" className="pic"/>
            </div>
            <div className="icon">
                <img src={props.icon ? props.icon : "https://2456764.fs1.hubspotusercontent-eu1.net/hub/2456764/hubfs/cyberattack_1200x627.jpg"} alt="icon" className="icon-pic"/>
            </div>
            <div className="banner-title">
                <p className="title">c/{props.title}</p>
                <div className="buttons">
                    <div className="post" onClick={handleClick}>
                        <FontAwesomeIcon icon={faPlus} className="plus"/> <span>Post</span>
                    </div>
                    <div className="join">
                        Join
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner;
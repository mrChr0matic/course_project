import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const Banner = () =>{
    return (
        <div className="banner">
            <div className="image">
                <img src="\banner.jpg" alt="banner" className="pic"/>
            </div>
            <div className="icon">
                <img src="/icon.jpg" alt="icon" className="icon-pic"/>
            </div>
            <div className="banner-title">
                <p className="title">c/Hackers</p>
                <div className="buttons">
                    <div className="post">
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
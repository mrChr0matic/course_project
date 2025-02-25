import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUp, faArrowDown, faShare } from "@fortawesome/free-solid-svg-icons";
import './styles.scss'

const Item = (props) =>{
    return (
        <div className="item">
            <div className="author">
                <h1 className="item-title">{props.title}</h1>
                <div className="author-details">
                    <p className="auth">{props.author}</p>
                    <p className="comm">c/{props.community}</p>
                </div>
            </div>
            {
                props.image ? 
                <div className="image">
                    <div className="image-div" style={{backgroundImage: `url(${props.image})`}}>
                    </div>
                    <img src={props.image} alt="img_err" className="post-image" />
                </div>
                : <></>
            }
            <p className="item-content"> {props.content}
            </p>
            <div className="votes">
                <div className="up">
                    <FontAwesomeIcon icon={faArrowUp} className="ico-up"/> <span>{props.upvotes}</span>
                </div>
                <div className="down">
                    <FontAwesomeIcon icon={faArrowDown} className="ico-down"/> <span>{props.downvotes}</span>
                </div>
                <div className="share">
                    <FontAwesomeIcon icon={faShare} className="ico-share"/> <span>Share</span>
                </div>
            </div>
        </div>
    )
}

export default Item;
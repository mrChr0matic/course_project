import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUp, faArrowDown, faShare } from "@fortawesome/free-solid-svg-icons";
import './styles.scss'

const Item = () =>{
    return (
        <div className="item">
            <h1 className="item-title">Title</h1>
            <p className="item-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Totam, quis esse aliquid iusto accusantium possimus in eligendi vero quas?
                 Maxime culpa suscipit aliquam tenetur veritatis tempore tempora eius, nihil quidem doloribus.
                  Temporibus iure eum eligendi necessitatibus quam. Necessitatibus, veniam exercitationem delectus
                   ratione quasi impedit architecto. Alias fugit quaerat mollitia aliquid?
            </p>
            <div className="votes">
                <div className="up">
                    <FontAwesomeIcon icon={faArrowUp} className="ico-up"/> <span>10</span>
                </div>
                <div className="down">
                    <FontAwesomeIcon icon={faArrowDown} className="ico-down"/> <span>10</span>
                </div>
                <div className="share">
                    <FontAwesomeIcon icon={faShare} className="ico-share"/> <span>Share</span>
                </div>
            </div>
        </div>
    )
}

export default Item;
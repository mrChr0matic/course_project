import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown, faShare } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import { useState } from "react";
import { votePost } from "../../api/api";

const Item = (props) => {
    const [voteState, setVoteState] = useState(null); 
    const [upvotes, setUpvotes] = useState(props.upvotes);
    const [downvotes, setDownvotes] = useState(props.downvotes);

    const upvotePost = async () => {
        console.log(props.key + "is the post id");
        try {
            await votePost("upvote", props.id);

            if (voteState === "upvote") {
                setUpvotes((prev) => prev - 1);
                setVoteState(null);
            } else {
                setUpvotes((prev) => prev + 1);
                if (voteState === "downvote") setDownvotes((prev) => prev - 1);
                setVoteState("upvote");
            }
        } catch (err) {
            console.error("Error voting:", err);
        }
    };

    const downvotePost = async () => {
        try {
            await votePost("downvote", props.id);

            if (voteState === "downvote") {
                setDownvotes((prev) => prev - 1);
                setVoteState(null);
            } else {
                setDownvotes((prev) => prev + 1);
                if (voteState === "upvote") setUpvotes((prev) => prev - 1);
                setVoteState("downvote");
            }
        } catch (err) {
            console.error("Error voting:", err);
        }
    };

    return (
        <div className="item">
            <div className="author">
                <h1 className="item-title">{props.title}</h1>
                <div className="author-details">
                    <p className="auth">{props.author}</p>
                    <p className="comm">c/{props.community}</p>
                </div>
            </div>
            {props.image && (
                <div className="image">
                    <div className="image-div" style={{ backgroundImage: `url(${props.image})` }}></div>
                    <img src={props.image} alt="img_err" className="post-image" />
                </div>
            )}
            <p className="item-content">{props.content}</p>
            <div className="votes">
                <div className={`up ${voteState === "upvote" ? "voted" : ""}`} onClick={upvotePost}>
                    <FontAwesomeIcon icon={faArrowUp} className="ico-up" /> <span>{upvotes}</span>
                </div>
                <div className={`down ${voteState === "downvote" ? "voted" : ""}`} onClick={downvotePost}>
                    <FontAwesomeIcon icon={faArrowDown} className="ico-down" /> <span>{downvotes}</span>
                </div>
                <div className="share">
                    <FontAwesomeIcon icon={faShare} className="ico-share" /> <span>Share</span>
                </div>
            </div>
        </div>
    );
};

export default Item;

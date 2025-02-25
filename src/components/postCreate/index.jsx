import "./styles.scss";
import { useState } from "react";

const CreatePost = (props) =>{
    const [title, setTitle] = useState("");
    const [content,setContent] = useState("");
    const [postImage, setPostImage] = useState(null);
    const [loading,setLoading] =useState(false);

    const handleImageChange = (e) => {
        setPostImage(e.target.files[0]); 
    };

    const handleSubmit = () =>{
        props.setPost(!props.post)
    }

    return (
        <div className="create-post">
            <div className="outer-box">
                <form className="box">
                    <input
                        type="text"
                        required
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="post-title"
                    />
                    <input
                        type="text"
                        required
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="post-content"
                    />
                    <div className="images">
                        <div className="img">
                            <label>Post Image: <span>Choose File</span>
                                <input type="file" onChange={handleImageChange} accept="image/*" className="img-input-here"/>
                            </label>
                            {postImage && <p className="postprev">{postImage.name}</p>}
                        </div>
                    </div>
                    <button type="button" className="button"  disabled={loading} onClick={handleSubmit}>
                        {loading ? "Creating..." : "Post"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost;
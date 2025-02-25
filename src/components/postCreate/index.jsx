import "./styles.scss";
import { useState } from "react";
import { createPost as createPostAPI, uploadImage as uploadImageAPI } from "../../api/api";

const CreatePost = (props) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [postImage, setPostImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleImageChange = (e) => {
        setPostImage(e.target.files[0]);
    };

    const handleSubmit = async () => {
        if (!title || !content) {
            setError("Title and content are required");
            return;
        }

        setLoading(true);
        setError("");

        try {
            let imageUrl = null;
            if (postImage) {
                imageUrl = await uploadImageAPI(postImage);
            }
            await createPostAPI(props.communityId, title, content, imageUrl);
            alert("Post created successfully!");
            props.setPost(false); 
        } catch (err) {
            setError("Failed to create post. Try again.");
            console.error("Error:", err);
        } finally {
            setLoading(false);
        }
    };

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
                            <label>
                                Post Image: <span>Choose File</span>
                                <input type="file" onChange={handleImageChange} accept="image/*" className="img-input"/>
                            </label>
                            {postImage && <p className="postprev">{postImage.name}</p>}
                        </div>
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="button" className="button" disabled={loading} onClick={handleSubmit}>
                        {loading ? "Creating..." : "Post"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;

import { useState } from "react";
import axios from "axios";
import "./styles.scss";
import { createCommunity } from "../../api/api";
import { uploadImage as uploadImageAPI } from "../../api/api";

const Create = () => {
    const [selected, setSelected] = useState("Public");
    const [title, setTitle] = useState("");
    const [banner, setBanner] = useState(null);
    const [icon, setIcon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleBannerChange = (e) => {
        setBanner(e.target.files[0]); 
    };

    const handleIconChange = (e) => {
        setIcon(e.target.files[0]);
    };


    const handleUploadImage = async (file) => {
        try {
            const url = await uploadImageAPI(file);
            return url;
        } 
        catch (err) {
            console.error("Upload error:", err);
            throw new Error("Image upload failed");
        }
    };


    const handleSubmit = async () => {
        if (!title || !banner || !icon) {
            setError("Please fill all fields and select images");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const uploadedBannerUrl = await handleUploadImage(banner);
            const uploadedIconUrl = await handleUploadImage(icon);

            const response = await createCommunity(title,uploadedBannerUrl,uploadedIconUrl);

            console.log("Community Created:", response.data);
            alert("Community created successfully!");
        } 
        catch (err) {
            console.log("Error creating community:", err);
        } 
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="create">
            <form className="box">
                <input
                    type="text"
                    required
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="title"
                />
                <div className="privacy">
                    <span>Privacy type:</span>
                    <select value={selected} onChange={(e) => setSelected(e.target.value)} className="dropdown">
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                    </select>
                </div>
                <div className="images">
                    <div className="img">
                        <label>Banner Image: <span>Choose File</span>
                            <input type="file" onChange={handleBannerChange} accept="image/*" className="img-input"/>
                        </label>
                        {banner && <p>{banner.name}</p>}
                    </div>
                    <div className="img">
                        <label>Icon Image: <span>Choose File</span>
                            <input type="file" onChange={handleIconChange} accept="image/*" className="img-input"/>
                        </label>
                        {icon && <p>{icon.name}</p>}
                    </div>
                </div>
                {error && <p className="error">{error}</p>}
                <button type="button" className="button" onClick={handleSubmit} disabled={loading}>
                    {loading ? "Creating..." : "Post"}
                </button>
            </form>
        </div>
    );
};

export default Create;

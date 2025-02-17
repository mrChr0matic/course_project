import { useState } from "react";
import "./styles.scss"

const Create = () => {
    const [selected, setSelected] = useState("Public");
    const [title, setTitle] = useState("");
    const [banner, setBanner] = useState(null);
    const [icon, setIcon] = useState(null);

    const handleBannerChange = (e) => {
        setBanner(URL.createObjectURL(e.target.files[0])); 
    };

    const handleIconChange = (e) => {
        setIcon(URL.createObjectURL(e.target.files[0]));
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
                    <span>Privacy type : </span>
                    <select value={selected} onChange={(e) => setSelected(e.target.value)} className="dropdown">
                        <option value="Public" className="options">Public</option>
                        <option value="Private" className="options">Private</option>
                    </select>
                </div>
                <div className="images">
                    <div className="img">
                        <label>Banner Image : <span>Choose File</span>
                            <input type="file" onChange={handleBannerChange} accept="image/*" className="img-input"/>
                        </label>
                        {banner && <img src={banner} alt="Banner Preview" className="preview"/>}
                    </div>
                    <div className="img">
                        <label>Icon Image : <span>Choose File</span>
                            <input type="file" onChange={handleIconChange} accept="image/*" className="img-input"/>
                        </label>
                        {icon && <img src={icon} alt="Icon Preview" className="preview small" />}
                    </div>
                </div>
                <button type="button" className="button">Post</button>
            </form>
        </div>
    );
};

export default Create;

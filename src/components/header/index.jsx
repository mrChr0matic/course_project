import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./styles.scss"
import Login from "../login";

const Header = (props)=>{
    const handleClick = () =>props.setLogin(!props.login);

    return (
        <div className="nav-wrapper">
            <div className="navbar">
                <div className="icon-name">
                    <p><a href="/" className="title">CYBERGRAM</a></p>
                </div>
                <div className="search">
                    <form className="search-box">
                        <input type="text" placeholder=" " />
                        <button type="reset"></button>
                    </form>
                </div>
                <div className="right-corner">
                    <a className="create" href="/create">Create Community</a>
                    <p className="trending">Trending</p>
                    <p className="login" onClick={handleClick}>Login</p>
                </div>
            </div>
        </div>
    )
}

export default Header;
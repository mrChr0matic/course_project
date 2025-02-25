import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import { userLogin } from "../../api/api";

const Login = (props) => {
    const [isLogin, setIsLogin] = useState(true); 
    const [pfp, setPfp] = useState(null);
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });
    const [signupData, setSignupData] = useState({
        email: '',
        username: '',
        password: '',
        profilePicture: null,
    });
    const [showPassword, setShowPassword] = useState(false); 

    const handleLoginChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignupChange = (e) => {
        if (e.target.name === "profilePicture") {
            setSignupData({
                ...signupData,
                profilePicture: e.target.files[0].name,
            });
            setPfp(e.target.files[0].name);
        } else {
            setSignupData({
                ...signupData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const toggleForm = () => setIsLogin(!isLogin);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); 
    };

    const handleClick = () => props.setLogin(!props.login);
    
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await userLogin(loginData.username, loginData.password);

            localStorage.setItem("token", data); 

            console.log("Login successful:", data);
            props.setLogin(false);
            console.log(localStorage.getItem("token"))
        } 
        catch (err) {
            console.error("Login error:", err.response?.data || err.message);
        }
    };



    return (
        <div className="background">
            <div className="login">
                <FontAwesomeIcon icon={faClose} className="close" onClick={handleClick}/>
                {isLogin ? (
                    <form className="login-form" onSubmit={handleLoginSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            required
                            value={loginData.username}
                            onChange={handleLoginChange}
                            className="input-text"
                            autoComplete="off"
                        />
                        <div className="password-input">
                            <input
                                type={showPassword ? "text" : "password"} 
                                name="password"
                                placeholder="Password"
                                required
                                value={loginData.password}
                                onChange={handleLoginChange}
                                className="input-text pass"
                                autoComplete="off"
                            />
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye} 
                                className="eye-icon"
                                onClick={togglePasswordVisibility}
                            />
                        </div>
                        <button type="submit" className="login" >Login</button>
                        <p>
                            Don't have an account? <span onClick={toggleForm} className="toggler">Sign Up</span>
                        </p>
                    </form>
                ) : (
                    <div className="signup-form">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={signupData.email}
                            onChange={handleSignupChange}
                            className="input-text"
                            autoComplete="off"
                        />
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            required
                            value={signupData.username}
                            onChange={handleSignupChange}
                            className="input-text"
                            autoComplete="off"
                        />
                        <div className="password-input">
                            <input
                                type={showPassword ? "text" : "password"} 
                                name="password"
                                placeholder="Password"
                                required
                                value={signupData.password}
                                onChange={handleSignupChange}
                                className="input-text pass"
                                autoComplete="off"
                            />
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye} 
                                className="eye-icon"
                                onClick={togglePasswordVisibility}
                            />
                        </div>
                        <div className="pfp-div">
                            <label htmlFor="profile-pic">
                                Profile picture:
                                <input
                                    type="file"
                                    id="profile-pic"
                                    name="profilePicture"
                                    onChange={handleSignupChange}
                                />
                            </label>
                            {pfp && <img src={pfp} alt="Profile preview" className="preview" />}
                            <p className="app-name">CYBERGRAM</p>
                        </div>
                        <button type="submit" className="login">Sign Up</button>
                        <p>
                            Already have an account? <span onClick={toggleForm} className="toggler">Sign In</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;

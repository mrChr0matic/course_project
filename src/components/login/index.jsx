import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";
import { userLogin, userSignup, uploadImage } from "../../api/api"; 

const Login = (props) => {
    const [isLogin, setIsLogin] = useState(true);
    const [pfp, setPfp] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

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
                profilePicture: e.target.files[0],
            });
            setPfp(URL.createObjectURL(e.target.files[0])); 
        } else {
            setSignupData({
                ...signupData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const toggleForm = () => setIsLogin(!isLogin);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const handleClick = () => props.setLogin(!props.login);

    const handleUploadImage = async (file) => {
        try {
            return await uploadImage(file);
        } catch (err) {
            console.error("Upload error:", err);
            throw new Error("Image upload failed");
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const data = await userLogin(loginData.username, loginData.password);
            localStorage.setItem("token", data);
            console.log("Login successful:", data);
            props.setLogin(false);
        } catch (err) {
            console.error("Login error:", err.response?.data || err.message);
            setError("Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            let profilePictureUrl = null;

            if (signupData.profilePicture) {
                profilePictureUrl = await handleUploadImage(signupData.profilePicture);
            }

            const response = await userSignup(signupData.email,signupData.username,signupData.password);

            console.log("Signup successful:", response);
            setIsLogin(true); 
        } catch (err) {
            console.error("Signup error:", err.response?.data || err.message);
            setError("Signup failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="background">
            <div className="login">
                <FontAwesomeIcon icon={faClose} className="close" onClick={handleClick} />
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
                        {error && <p className="error">{error}</p>}
                        <button type="submit" className="login" disabled={loading}>
                            {loading ? "Logging in..." : "Login"}
                        </button>
                        <p>
                            Don't have an account? <span onClick={toggleForm} className="toggler">Sign Up</span>
                        </p>
                    </form>
                ) : (
                    <form className="signup-form" onSubmit={handleSignupSubmit}>
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
                            <label htmlFor="profile-pic">Profile picture:
                                <input
                                    type="file"
                                    id="profile-pic"
                                    name="profilePicture"
                                    onChange={handleSignupChange}
                                    accept="image/*"
                                />
                            </label>
                            {pfp && <img src={pfp} alt="Profile preview" className="preview" />}
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button type="submit" className="login" disabled={loading}>
                            {loading ? "Signing up..." : "Sign Up"}
                        </button>
                        <p>
                            Already have an account? <span onClick={toggleForm} className="toggler">Sign In</span>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;

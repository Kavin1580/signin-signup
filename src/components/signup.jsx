import { Link } from 'react-router-dom'
import "../styles/signup.css"
const Signup = () => {

    return (
        <div className="nav">
            <div className="nav1">
                <h1>Foodiee</h1>
            </div>
            <div className='container'>

                <div className="login-form">
                    
                    <div className="form">
                        <div className="view">
                            <h1>Welcome Back</h1>
                            <div className="login-form1">
                                <h4>Login to continue</h4>
                            </div>
                        </div>
                        <form action="" >
                            <h1>Login</h1>

                            <label
                                style={{
                                    "font-size": "12.5px",
                                    color: "#000",
                                    opacity: ".8",
                                    "font-weight": "400",
                                }}
                                htmlFor="Email"
                            >
                                Email
                            </label>
                            <input
                                style={{
                                    "background-color": "#eee",
                                    border: "none",
                                    padding: "12px 15px",
                                    margin: "8px 0",
                                    width: "100%",
                                }}
                                type="text"

                                placeholder="enter email address"
                            />
                            <br />
                            <label
                                style={{
                                    "font-size": "12.5px",
                                    color: "#000",
                                    opacity: ".8",
                                    "font-weight": "400",
                                }}
                                htmlFor="Password"
                            >
                                Name
                            </label>
                            <input
                                style={{
                                    "background-color": "#eee",
                                    border: "none",
                                    padding: "12px 15px",
                                    margin: "8px 0",
                                    width: "100%",
                                }}
                                type="email"

                                placeholder="enter name"
                            />
                            <br />
                            <label
                                style={{
                                    "font-size": "12.5px",
                                    color: "#000",
                                    opacity: ".8",
                                    "font-weight": "400",
                                }}
                                htmlFor="Password"
                            >
                                Password
                            </label>

                            <input
                                style={{
                                    "background-color": "#eee",
                                    border: "none",
                                    padding: "12px 15px",
                                    margin: "8px 0",
                                    width: "100%",
                                }}
                                type="password"
                                placeholder="enter password"
                            />
                            <br />
                            <button
                                style={{
                                    "border-radius": "20px",
                                    border: "1px solid #05acff",
                                    "background-color": "#05acff",
                                    color: "#FFFFFF",
                                    "font-size": "12px",
                                    "font-weight": "bold",
                                    padding: "12px 45px",
                                    "letter-spacing": "1px",
                                    "text-transform": "uppercase",
                                    transition: "transform 80ms ease-in",
                                }}
                            >
                                Sign Up
                            </button>
                        </form>

                    </div>
                </div>
                <div className="image">
                        <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=626&ext=jpg" alt="" />
                    </div>

                <div className="sign_up">
                    <h5> already a User <span><Link to='/login'> Sign in</Link> </span></h5>

                </div>
                <div>

                </div>
            </div>


        </div>
    );
}

export default Signup;
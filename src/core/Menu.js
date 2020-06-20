import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { signout, isAuthenticated } from "../auth"
const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" }
    } else {
        return { color: "#ffffff" }
    }
}



const Menu = ({ history }) => {
    // console.log(isAuthenticated())
    return (

        <div>
            <ul className="nav nav-tabs bg-primary">
                {!isAuthenticated() ? (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, "/")} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, "/signup")} to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, "/signin")} to="/signin">Signin</Link>
                        </li>
                    </>
                )
                    :
                    (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, "/")} to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" onClick={() => signout(() => { history.push("/signin") })} style={isActive(history, "/signin"), { cursor: "pointer", color: "#ffffff" }} >Logout</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">{isAuthenticated().user.name}</Link>
                            </li>
                        </>
                    )
                }



            </ul>
        </div>
    )
}

export default withRouter(Menu)

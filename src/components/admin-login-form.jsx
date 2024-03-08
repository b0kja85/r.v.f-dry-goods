import React from "react";

export default function AdminLoginForm() {
    return (
        <div className="admin--login-form">
            <div className="admin--LF-BG">
                <h1 className="admin--LF-greetings">Welcome, Admin!</h1>
                <form>
                    <input type="text" placeholder="Username" id="admin--username" name="admin--username" required />
                    <input type="password" placeholder="Password" id="admin--password" name="admin--password" required />
                    <button type="submit" className="admin--login-btn">LOGIN</button>
                </form>
            </div>    
        </div>
    )
}
import React from "react";
import { useState } from "react";

function ConditionalRendering() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <>
            <h2>Conditional Rendering Example</h2>
            {isLoggedIn ? (
                <div>
                    <h3>Welcome back!</h3>
                    <button onClick={handleLogout} className="btn btn-primary">
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    <h3>Please log in</h3>
                    <button onClick={handleLogin} className="btn btn-success">
                        Login
                    </button>
                </div>
            )}
        </>
    );
}

export default ConditionalRendering;

import React from 'react'

export const LoginScreen = () => {
    return (
        <>
            <h3>Login</h3>

            <form>
                <input 
                    type="text"
                    placeholder="email"
                    name="email"
                />    

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                />

                <button
                    type="submit"
                >
                    Login
                </button>

                <hr />
                
                <div>
                    <p>
                        Login with social networks
                    </p>

                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img src="" alt="" className="google-icon"/>
                        </div>
                        <p className="btn-text">
                            <p>Sign in with google</p>
                        </p>
                    </div>
                </div>
            </form>  
        </>
    )
}

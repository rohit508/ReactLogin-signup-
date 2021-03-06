import React from 'react'

function login(props) {

    const { email,
        setEmail,
        password,
        setPassword,
        handlelogin,
        handleSignup,
        hasAcount,
        sethasAcount,
        emailError,
        passwordError } = props


    return (
        <section className="login">
            <div
                className="loginContainer">
                <label>Username</label>
                <input type='text' autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>

                <label>Password</label>
                <input type='password' required value={password} onChange={(e) => setPassword(e.target.value)} />


                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAcount ? (
                        <>
                            <button type="button" class="btn btn-primary" onClick={handlelogin} >Sign in</button>
                            <p>

                                don't have an account ?
                            <span onClick={() => sethasAcount(!hasAcount)}>sign up</span></p>

                        </>) : (
                            <>
                                <button type="button" class="btn btn-primary" onClick={ handleSignup} >Sign up</button>


                                <p> have an account ? <span onClick={() => sethasAcount(!hasAcount)}>sign in</span></p>

                            </>
                        )

                    }





                </div>
                <div className="damo">
                    <p>Email : admin@gmail.com</p>
                    <p>pass : @admin5</p>

                </div>

            </div>

        </section>
    )
}

export default login

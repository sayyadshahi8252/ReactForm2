import React, { useState } from 'react'
import '../App.css'

const SignUp = () => {
    let [ Email, setEmail ] = useState("");
    let [ Password, setPassword ] = useState("")
    let [ Confirmpassword, setConfirmpassword ] = useState("")
    let [ emailvalidate, setemailvalidate ] = useState(null)
    let [ passwordvalidate, setpasswordvalidate ] = useState(null)
    let [ confirmpasswordvalidate, setconfirmpasswordvalidate ] = useState(null)

    function handleEmail(value) {
        setEmail(value)
        const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setemailvalidate(emailpattern.test(value))
        console.log(value)
    }

    function handlePassword(value) {
        setPassword(value)
        console.log(Password)
        if (value.length >= 8) {
            setpasswordvalidate(true)
        } else {
            setpasswordvalidate(false)
        }
    }

    function handleConfirmassword(value) {
        setConfirmpassword(value)
        console.log(Confirmpassword)
        if (Password === value) {
            setconfirmpasswordvalidate(true)
        } else {
            setconfirmpasswordvalidate(false)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(emailvalidate)
        console.log(passwordvalidate)
        console.log(confirmpasswordvalidate)
        console.log(Email, Password, Confirmpassword)
        if (emailvalidate && passwordvalidate && confirmpasswordvalidate) {
            alert("Form submitted successfully!")
        } else {
            alert("Form cannot be submitted!")
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <br></br>
            <input type="email" name="" id="email"
                value={Email}
                onChange={(e) => handleEmail(e.target.value)}
                style={{
                    border: emailvalidate === null ? "2px solid red" : emailvalidate === true ? "2px solid green" : "2px solid red"
                }}
            />
            {emailvalidate === null ? <p>Invalid email format</p> : emailvalidate === true ? "" : <p>Invalid email format</p>}
            <br></br>
            <label htmlFor="password">Password:</label>
            <br></br>
            <input type="password" name="" id="password"
                value={Password}
                onChange={(e) => handlePassword(e.target.value)}
                style={{
                    border: passwordvalidate === null ? "2px solid red" : passwordvalidate === true ? "2px solid green" : "2px solid red"
                }}
            />
              {passwordvalidate === null ?   <p>Password must be at least 8 character</p>: passwordvalidate === true ? "" :    <p>Password must be at least 8 character</p>}
         
            <br></br>
            <label htmlFor="confirmpassword">Confirm Password:</label>
            <br></br>
            <input type="password" name="" id="confirmpassword"
                value={Confirmpassword}
                onChange={(e) => handleConfirmassword(e.target.value)}
                style={{
                    border: confirmpasswordvalidate === null ? "2px solid red" : confirmpasswordvalidate === true ? "2px solid green" : "2px solid red"
                }}
            />
              {confirmpasswordvalidate === null ?<p>Password do not match</p>: confirmpasswordvalidate === true ? "" :            <p>Password do not match</p>}
            <br></br>
            <div className="btn">
                <button>Sign Up</button>
            </div>
        </form>
    )
}

export default SignUp

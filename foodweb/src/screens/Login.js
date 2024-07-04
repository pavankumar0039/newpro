import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    let navigate=useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/api/loginuser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        });
        const json = await res.json();
        console.log(json);
        if(!json.success)
        {
            alert("enter valid credentials");
        }
        if(json.success)
        {
            localStorage.setItem("loginemail",email)
            navigate("/");
        }
    };

    return (
        <>
            <div className='d-flex justify-content-center align-items-center loginbackgroundimage' style={{ height: "100vh" }}>

                <form style={{ width: "22rem", zIndex: "2", color: "white" }} onSubmit={handleSubmit}>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h1 className='h1'>Login</h1>
                            <p>or <Link to="/Signup" style={{ color: "orange" }}>create an account</Link></p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={email} onChange={handleChange} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={password} onChange={handleChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: ''
    });

    const { username, email, password, confirmPassword, address } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        console.log('Address:', address);
        const res= await fetch("http://localhost:5000/api/createuser",{
            method:"POST",
            headers:{ // Fixing the typo 'header' to 'headers'
                'Content-Type':'application/json' // Fixing the typo 'Contenttype' to 'Content-Type'
            },
            body: JSON.stringify({ // Sending 'location' instead of 'address'
                name: username,
                email: email,
                password: password,
                location: address // Sending 'location' instead of 'address'
            })   
        });
        const json= await res.json();
        if(json.success===true)
            {
                alert("you successfully singned up");
                
            }
            else
            {
                alert("once again sign up with new creadentials")
            }
    };
    return (
        <>
            <div className='d-flex justify-content-center align-items-center loginbackgroundimage' style={{ height: "100vh" }}>
                <form style={{ width: "22rem", zIndex: "2", color: "white" }} onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h1 className='h1'>SignUp</h1>
                            <p>or <Link to="/Login" style={{ color: "orange" }}>Login to your account</Link></p>
                        </div>
                        <div></div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="username" className="form-control" id="exampleusername" name="username" value={username} onChange={handleChange} aria-describedby="emailHelp" />

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

                    <div className="mb-3">
                        <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
                        <input type="text" className="form-control" id="exampleInputAddress1" name="address" value={address} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}

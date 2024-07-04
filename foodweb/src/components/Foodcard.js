import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Foodcard(props) {
    const navigate = useNavigate();
    const options = props.options;
    const keysoption = Object.keys(options);
    const firstOption = Object.entries(options)[0];
    const firstKey = firstOption[0];

    const [quantity, setQuantity] = useState('1');
    const [size, setSize] = useState(firstKey);

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    const Addtocart = async () => {
        const itemname = props.foodname;
        const imgurl = props.imgurl;
        const itemsize = size;
        const itemquantity = quantity;
        const itemprice = parseInt(quantity) * parseInt(options[size]);
        const email = localStorage.getItem('loginemail');

        if (email) {
            const res = await fetch("http://localhost:5000/api/orderdata", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    imgurl: imgurl,
                    name: itemname,
                    size: itemsize,
                    quantity: itemquantity,
                    price: itemprice
                })
            });

            const json = await res.json();

            if (!json.success) {
                alert("Enter valid credentials");
            } else {
                navigate("/cart");
            }
        } else {
            alert("Please log in");
            navigate("/login");
        }
    };
    
    const addtofavourties = async () => {
        const itemname = props.foodname;
        const imgurl = props.imgurl;
        const itemsize = size;
        const itemquantity = quantity;
        const itemprice = parseInt(quantity) * parseInt(options[size]);
        const email = localStorage.getItem('loginemail');
        try {
            const response = await fetch("http://localhost:5000/api/favouriteinsertdata", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: itemname,
                    imgurl: imgurl,
                    size: itemsize,
                    quantity: itemquantity,
                    price: itemprice,
                    email: email
                })
            });
           if(response.status===200)
            {
                alert("successfully added");
            }
            else
            {
                alert("failed to add it already exits")
            }

        } catch (error) {
            console.error("Error loading data:", error);
        }
    }
    return (
        <div className="shadow menu-item-card p-3 mb-3">

            <div className='row'>
                <img
                    src={props.imgurl}
                    alt='image_1'
                    className="menu-item-image mw-50 col"
                    style={{ height: "10rem", maxWidth: "60%" }}
                />
                <div className='col'>
                    <select
                        className="form-select form-select-xs row my-3"
                        aria-label=".form-select-sm example"
                        onChange={handleQuantityChange}
                    >
                        <option>Quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <div className='my-10'></div>
                    <select
                        className="form-select form-select-xs row my-3 "
                        aria-label=".form-select-sm example"
                        onChange={handleSizeChange}
                    >
                        <option>Size</option>
                        {keysoption.map((data) => (
                            <option key={data} value={data}>{data}</option>
                        ))}
                    </select>
                    <div className="row mr-2 ">
                        <button
                            type='button'
                            className="btn btn btn-secondary"
                            onClick={Addtocart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="menu-card-title col-">{props.foodname}</h1>
                <div className='fs-3' style={{ cursor: "pointer" }} onClick={addtofavourties}>
                    <i className="fas fa-regular fa-heart"></i>
                </div>
            </div>
            <div className='row'>
                <h4 className='h4 col-6'>Total Price</h4>
                <h4 className='h4 col-2 my-0 pd-0'>==</h4>
                <h4 className='h4 text-primary col-4'>{parseInt(quantity) * parseInt(options[size])}</h4>
            </div>
        </div>
    );
}

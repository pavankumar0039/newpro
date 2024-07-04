import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const email = localStorage.getItem('loginemail');

  // Memoize loadCart to prevent unnecessary re-renders
  const loadCart = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/api/orderdatafind", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      const data = await response.json();

      console.log(data);
      setCartItems(data[0]); // Assuming the response is an array of cart items
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }, [email]);

  const deleteCartItem = async (item) => {
    const { name, size } = item;
    try {
      const response = await fetch("http://localhost:5000/api/orderdatadelete", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, name, size })
      });

      if (response.ok) {
        const responseData = await response.text();
        if (responseData === "Order deleted successfully") {
          loadCart();
        } else {
          navigate("/cart");
        }
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    loadCart();
  }, [loadCart]); // Include loadCart in the dependency array

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      cartItems.forEach(item => {
        total += item.price * item.quantity;
      });
      setTotalPrice(total);
    };
    calculateTotalPrice();
  }, [cartItems]);

  return (
    <div className='container'>
      {cartItems.length !== 0 ? (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Size</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td style={{ width: "20%", height: "20%" }}>
                    <img src={item.imgurl} alt='' style={{ width: "100%", height: "100%" }} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.size}</td>
                  <td>{item.price}
                    <div className='d-inline ml-3'>
                      <i className="fas fa-trash" onClick={() => deleteCartItem(item)}></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='d-flex justify-content-around'>
            <h2>Total Price: {totalPrice}</h2>
            <button type="button" class="btn btn-primary">checkout</button>
          </div>
        </>
      ) : (
        <div className='d-flex justify-content-center align-items-center h2 ' style={{ height: "100vh", width: "100%" }}>
          Cart is Empty
        </div>
      )}
    </div>
  );
}

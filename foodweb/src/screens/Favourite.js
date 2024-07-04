import React, { useEffect, useState, useCallback } from 'react';

export default function Favourite() {
  const [favouriteItems, setFavouriteItems] = useState([]);
  const email = localStorage.getItem('loginemail');

  const loaddata = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/api/getfavouritedata", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      setFavouriteItems(data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }, [email]);

  const deleteFavourite = useCallback(async (item) => {
    const name = item.name;
    
    try {
      const response = await fetch("http://localhost:5000/api/favouritedeletedata", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          name: name,
        })
      });

      if (response.status === 200) {
        alert("Successfully removed");
        loaddata();
      } else {
        alert("Failed to remove");
      }
    } catch (err) {
      console.error("Error deleting favourite:", err);
    }
  }, [email, loaddata]);

  useEffect(() => {
    loaddata();
  }, [loaddata]);

  return (
    <div className='container'>
      {favouriteItems.length !== 0 ? (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th> 
              </tr>
            </thead>
            <tbody>
              {favouriteItems.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td style={{ width: "20%", height: "20%" }}>
                    <img src={item.imgurl} alt='' style={{ width: "100%", height: "100%" }} />
                  </td>
                  <td>{item.name}</td>
                  <td>
                    <button onClick={() => deleteFavourite(item)} className="btn btn-success">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className='d-flex justify-content-center align-items-center h2' style={{ height: "100vh", width: "100%" }}>
          Favourites is Empty
        </div>
      )}
    </div>
  );
}

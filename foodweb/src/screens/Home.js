import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Crousal from '../components/Crousal';
import Foodcard from '../components/Foodcard';

export default function Home() {
  const [foodcat, setFoodCat] = useState([]);
  const [fooditem, setFoodItem] = useState([]);


  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      setFoodItem(data[0]);
      setFoodCat(data[1]);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();

  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (value) => {
    setSearchTerm(value);

  };

  return (
    <>

      <Navbar onSearchChange={handleSearchChange} />
      <Crousal />

      <div className="container" >
        {foodcat.map((category) => (
          <div key={category._id} className='row mb-3'>
            <div className='fs-3 m-3'>{category.CategoryName}</div>
            <hr />
            {fooditem
              .filter(item => item.CategoryName === category.CategoryName && item.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map(filteritem => (
                <div key={filteritem._id} className='col-12 col-md-6 col-lg-4'>
                  <Foodcard
                    foodname={filteritem.name}
                    options={filteritem.options[0]}
                    imgurl={filteritem.img}
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

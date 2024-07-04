import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [search, setSearch] = useState('');
  const [style1, setstyle1] = useState('mainprofilecontainer1');
  const addhover=()=>{
     setstyle1('mainprofilecontainer')
  }
  const removehover=()=>{
    setstyle1('mainprofilecontainer1')
 }
  const searchChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setSearch(value);
    props.onSearchChange(value); 
  }

  const searchClick = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" style={props.changeboarder}>
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
                className="food-munch-logo" alt='image_1'
              />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className='mr-5'>
                <form className="d-flex" onSubmit={searchClick}>
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "20rem" }} value={search} onChange={searchChange} />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>

              <div className="navbar-nav  d-flex justify-content-around align-items-center" style={{ width: "45%" }}>
                <Link className="nav-link active d-flex justify-content-center align-items-center" id="navItem1" to="#wcuSection">
                  Offers
                  <span className="sr-only">(current)</span>
                </Link>
               
                {localStorage.getItem('loginemail')==null?
                 
                <Link className="nav-link " to="/login" id="navItem3" style={{ color: "green" }}>Sign-In</Link>:
                ( <Link className="nav-link d-flex justify-content-center align-items-center " to="/cart" id="navItem4">
               
                <i className="fas fa-regular fa-life-ring fa-lg mr-1"></i>
                Help
              </Link>)
                 
                }
                <Link className="nav-link d-flex justify-content-center align-items-center " to="/cart" id="navItem4">
                  <i className="fas fa-shopping-cart  fa-lg mr-1"></i>
                  Cart
                </Link>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <i className="fas fa-user-circle  fa-2x"></i>
              <Link className="nav-link" to="#followUsSection" id="navItem4" onMouseOver={addhover} >{localStorage.getItem('loginemail')!=null?(localStorage.getItem('loginemail').slice(0,5)+".."):"xxx.."}</Link>
            </div>
          </div>

        </nav>
        
        <div className='d-inline-flex justify-content-end' style={{width:"100vw" ,height: "25rem", position:"absolute",zIndex:"1"}}>
          <div  className={`${style1}`} onMouseOver={addhover} onMouseOut={removehover}>
              <div style={{height:"4rem"}}>
              </div>
              <hr />
              <hr  />
              <div className='d-flex flex-column mb-5 justify-content-around' style={{height:'70%'}} >
                <div className='h4 ml-5 profileitems'>Profile</div>
                <div className='h4 ml-5 profileitems'>Orders</div>
                 <div className='h4 ml-5 profileitems'>Swag one</div>
                 <div className='h4 ml-5 profileitems'><Link to="/Favourite.js" alt="">Favourite</Link></div>
                 <div className='h4 ml-5 profileitems'>Log Out</div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

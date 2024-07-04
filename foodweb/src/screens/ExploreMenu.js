import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function ExploreMenu() {
    var changeboarder = {
        borderBottom: "1px solid black"
    };
    return (
        <>
            <div>
                <Navbar changeboarder={changeboarder} />
            </div>

            <div className='Container_1' style={{ height: "7rem" }}>

            </div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="menu-section-heading">Explore Menu</h1>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="shadow menu-item-card p-3 mb-3">
                                < img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png" alt='image_1'
                                    className="menu-item-image w-100"
                                />
                                <h1 className="menu-card-title">Non-Veg Starters</h1>
                                <Link to="" className="menu-item-link">
                                    View All
                                    <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="shadow menu-item-card p-3 mb-3">
                                < img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png" alt='image_1'
                                    className="menu-item-image w-100"
                                />
                                <h1 className="menu-card-title">Veg Starters</h1>
                                <Link to="" className="menu-item-link">
                                    View All
                                    <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="menu-item-card shadow p-3 mb-3">
                                < img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png" alt='image_1'
                                    className="menu-item-image w-100"
                                />
                                <h1 className="menu-card-title">Soups</h1>
                                <Link to="" className="menu-item-link">
                                    View All
                                    <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="menu-item-card shadow p-3 mb-3">
                                < img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png" alt='image_1'
                                    className="menu-item-image w-100"
                                />
                                <h1 className="menu-card-title">Fish & Sea food</h1>
                                <Link to="" className="menu-item-link">
                                    View All
                                    <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="menu-item-card shadow p-3 mb-3">
                                < img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png" alt='image_1'
                                    className="menu-item-image w-100"
                                />
                                <h1 className="menu-card-title">Main Course</h1>
                                <Link to="" className="menu-item-link">
                                    View All
                                    <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="menu-item-card shadow p-3 mb-3">
                                < img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png" alt='image_1'
                                    className="menu-item-image w-100"
                                />
                                <h1 className="menu-card-title">Noodles</h1>
                                <Link to="" className="menu-item-link">
                                    View All
                                    <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="menu-item-card shadow p-3 mb-3">
                                < img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-gluten-img.png" alt='image_1'
                                    className="menu-item-image w-100"
                                />
                                <h1 className="menu-card-title">Salads</h1>
                                <Link to="" className="menu-item-link">
                                    View All
                                    <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="menu-item-card shadow p-3 mb-3">
                                < img
                                    src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png" alt='image_1'
                                    className="menu-item-image w-100"
                                />
                                <h1 className="menu-card-title">Desserts</h1>
                                <Link to="" className="menu-item-link">
                                    View All
                                    <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-5 border border-info">
                <div className="healthy-food-section pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <div className="text-center">
                                    <img
                                        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png"
                                        className="healthy-food-section-img" alt='image_1'
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-7">
                                <h1 className="healthy-food-section-heading">
                                    Fresh, Healthy, Organic, Delicious Fruits
                                </h1>
                                <p className="healthy-food-section-description">
                                    Say no to harmful chemicals and go fully organic with our range of
                                    fresh fruits and veggies. Pamper your body and your senses with
                                    the true and unadulterated gifts from mother nature. with the true
                                    and unadulterated gifts from mother nature.
                                </p>
                                <Link to="https://www.youtube.com/watch?v=cqcVT-X2hXs" target="_blank">
                                    <button className="custom-button">Watch Video</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

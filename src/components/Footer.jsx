import React from 'react'
import { Pr, Pr21 } from '../assets/Index';
import '../Style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";




const Footer = () => {
  return (
    <>
        <div className="container-fluid footerBackgroundIMG mt-lg-0 mt-4">
        <div className="container pt-5">
          <div className="text-center">
              <h3 className="footHead1">Excellent</h3>
                <div className="star-rating text-center mt-3">
                  <FontAwesomeIcon icon={faStar} className="fa-regular fa-star" style={{color: "#fcfcfc", backgroundColor: "#00A859", width: "47px", height: "37px"}} ></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar} className="fa-regular fa-star" style={{color: "#fcfcfc", backgroundColor: "#00A859", width: "47px", height: "37px"}} ></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar} className="fa-regular fa-star" style={{color: "#fcfcfc", backgroundColor: "#00A859", width: "47px", height: "37px"}} ></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar} className="fa-regular fa-star" style={{color: "#fcfcfc", backgroundColor: "#00A859", width: "47px", height: "37px"}} ></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faStar} className="fa-regular fa-star" style={{color: "#fcfcfc", backgroundColor: "#00A859", width: "47px", height: "37px"}} ></FontAwesomeIcon>
              </div>
              <p className="CustomP-14-400 text-white mt-3">Based on 13,586 reviews</p>
              <div>
                <span><FontAwesomeIcon icon={faStar}  style={{color: "#047c58", width: "35px", height: "25px"}}></FontAwesomeIcon></span>
                <span className="text-white fs-5">Trustpilot</span>
              </div>
          </div>
          <div className="row mt-lg-5 mt-5 pt-lg-3">
            <div className="col-sm-12 col-md-4 col-lg-3">
              <div className="div text-white">
                <p className="customFotterp">Customer Service</p>
                <p className="CustomP-16-400">Order Lookup</p>
                <p className="CustomP-16-400">Bulk Order</p>
                <p className="CustomP-16-400">Shipping & Delivery</p>
                <p className="CustomP-16-400">Discounts</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3">
              <div className="div text-white">
                <p className="customFotterp">About Us</p>
                <p className="CustomP-16-400">News & Blogs</p>
                <p className="CustomP-16-400">Supplier</p>
                <p className="CustomP-16-400">Terms & condition</p>
                <p className="CustomP-16-400">Privacy Policy</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-2">
              <div className="div text-white">
                <p className="customFotterp">Need Help?</p>
                <p className="CustomP-16-400">Contact Us</p>
                <p className="CustomP-16-400">FAQs</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-2">
              <div className="div text-white">
                <p className="customFotterp">Privacy</p>
                <p className="CustomP-16-400">Terms & Condition</p>
                <p className="CustomP-16-400">Privacy Polivcy</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-2 my-lg-5 my-5">
              <div className="div text-white">
                <p className="customFotterp">Follow Us</p>
                <img src="./images/Social.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid FooterbackG">
        <div className="container py-lg-4">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-lg-0 mt-3">
              <img src={Pr} style={{width: "40px", height: "40px"}} alt=""/>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 mt-lg-0 mt-3">
              <img src={Pr21} alt=""/>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5 mt-lg-0 mt-3">
              <small>Copyright © 2024 FoodieAmazon. All Rights Reserved</small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer

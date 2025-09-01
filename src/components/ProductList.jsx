import React from 'react'
import {Pr1, Pr2, Pr3, Pr4, Pr5, Pr6, Pr7, Pr8, Pt1, Pr9, Pt3, Pr10, Pr11, Pr12, Pr13, Pr14, Pr15, Pr16, Pr17, Pr18, Pr19, Pr20} from '../assets/Index';
import '../Style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";
import { faHeart  } from "@fortawesome/free-regular-svg-icons";


const ProductList = () => {
  return (
    <>
    <div className="container">
        <div className="row ">
            <div className="col-sm-12 col-md-12 col-lg-4 mt-lg-0 mt-3">
               {/* first card here  */}
              <div className="border-0 " id="imgWidth">
                <img src={Pt1} className="card-img-top w-sm-100" alt="..."/>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title CustomP-14-400 my-3 my-lg-3">Coconut Flakes</h5>
                    <a className="text-reset " href="#">
                      <FontAwesomeIcon icon={faHeart} className="fa-regular fa-heart"></FontAwesomeIcon>
                    </a> 
                  </div>
                  <p className="card-text cardtitle-Black">Organic Almond Delight</p>

                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="div">
                      <span><FontAwesomeIcon icon={faStar} className="fa-solid fa-star" style={{color: "#f27907"}}></FontAwesomeIcon></span>
                      <span>5.0 (18)</span>
                    </div>
                    <span className="fw-bold">$110</span>
                  </div>
                </div>
                  <button className="btn  mt-4 hover-underline mb-5 mb-lg-0" >Add to cart</button>
              </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-4 mt-lg-0 mt-3">
                  {/* second card here   */}
                <div className="border-0 " id="imgWidth">
                  <img src={Pr9} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title CustomP-14-400 my-3 my-lg-3">Coconut Flakes</h5>
                      <a className="text-reset " href="#">
                        <FontAwesomeIcon icon={faHeart} className="fa-regular fa-heart"></FontAwesomeIcon>
                      </a> 
                    </div>
                    <p className="card-text cardtitle-Black">Berry Bliss Bites</p>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="div">
                        <span><FontAwesomeIcon icon={faStar} className="fa-solid fa-star" style={{color: "#f27907"}}></FontAwesomeIcon></span>
                        <span>5.0 (18)</span>
                      </div>
                      <span className="fw-bold">$139</span>
                    </div>
                  </div>
                    <button className="btn customBtn mt-4 hover-underline mb-5 mb-lg-0">Add to cart</button>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-4 mt-lg-0 mt-3">
                 {/* third card here  */}
                <div className="border-0 " id="imgWidth">
                  <img src={Pt3} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title CustomP-14-400 my-3 my-lg-3">Coconut Flakes</h5>
                      <a className="text-reset " href="#">
                        <FontAwesomeIcon icon={faHeart} className="fa-regular fa-heart"></FontAwesomeIcon>
                      </a> 
                    </div>
                    <p className="card-text cardtitle-Black">Coconut Crunchies</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="div">
                        <span><FontAwesomeIcon icon={faStar} className="fa-solid fa-star" style={{color: "#f27907"}}></FontAwesomeIcon></span>
                        <span>5.0 (18)</span>
                      </div>
                      <span className="fw-bold">$399</span>
                    </div>
                  </div>
                    <button className="btn customBtn mt-4 hover-underline mb-5 mb-lg-0">Add to cart</button>
                </div>
              </div>
          </div>
    </div>
        
    </>
  )
}

export default ProductList

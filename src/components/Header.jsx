import React from 'react'
import { Link } from 'react-router-dom'
import { Pr } from '../assets/Index';
import '../Style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faShoppingBag, faUser} from "@fortawesome/free-solid-svg-icons";
import { faHeart  } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container">
      <img src={Pr} style={{width: "50px", height: "50px"}} alt=""/>
       <div className="position-relative me-3 d-lg-none d-md-none">
              <a href="./cart.html"><i className="fa-solid fa-bag-shopping fa-2x w-75" style={{color: "#0F0B0B"}} ></i> 
              <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
                  5
                  <span className="visually-hidden">items in cart</span>
              </span>
              </a>
        </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
          <li className="nav-item mx-3">
            <Link to={'/'} className="nav-link text-dark fw-bold"  href="">Home</Link>
          </li>
          <li className="nav-item mx-3">
            <Link to={'./products'} className="nav-link NavClr "  href="./product.html">Our Products</Link>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link NavClr"  href="./health-benefit.html">Health Benefits</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link NavClr "  href="#">Blogs</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link NavClr"  href="#">FAQS</a>
          </li>
        </ul>
        <div className="">
          
        </div>
        <form className="d-flex">
          <div className="d-flex align-items-center">
            <span className="input-group-text border-0 me-lg-5 pe-lg-4" style={{background: "transparent", border: "none"}} id="search-addon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <a className="text-reset me-3" href="#">
              <FontAwesomeIcon icon={faHeart} />
            </a>
            <div className="position-relative me-3">
              <a href="./cart.html"><FontAwesomeIcon icon={faShoppingBag} className="fa-solid fa-bag-shopping fa-2x w-75" style={{color: "#0F0B0B"}}></FontAwesomeIcon></a> 
              <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
                  5
                  <span className="visually-hidden">items in cart</span>
              </span>
           </div>
            <a className="text-reset me-3" href="./">
              <FontAwesomeIcon icon={faUser} className="fa-solid fa-user fa-1x"></FontAwesomeIcon>
            </a>
            <button className="btn btn-success " type="submit">Contact us</button>
          </div>
        </form>
      </div>
    </div>
    </nav>
    </>
  )
}

export default Header

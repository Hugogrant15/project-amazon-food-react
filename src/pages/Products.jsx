import React from 'react'
import '../Style.css'
import ProductList from '../components/ProductList';
import {Pr22, Pr23, Pr24, Pr25, Pr26, Pr27, Pr28, Pr29, Pr30} from '../assets/Index'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faNairaSign } from "@fortawesome/free-solid-svg-icons";
import {   } from "@fortawesome/free-regular-svg-icons";

const Products = () => {
  return (
    <>
         {/* product section 1 starts here   */}
    <div className="container">
        <div className="row mt-lg-5 pt-lg-5 pt-3 mt-5">
            <div className="col-sm-12 col-md-12 col-lg-7">
                <img src={Pr22} className="productImage1" alt=""/>
                <div className="">
                <img src={Pr23} className="w-75 mx-lg-5 px-lg-5" alt=""/>

                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 ">
                <p className="CustomP-14-400">Coconut Flakes</p>
                <h2>Coconut Crunchies</h2>
                <div className="div">
                  <del><small><span><FontAwesomeIcon icon={faNairaSign} className="fa-solid fa-naira-sign"></FontAwesomeIcon></span>120 </small></del>
                  <span id="OrangeDoll" className="mt-lg-3 mt-3"><FontAwesomeIcon icon={faNairaSign}  style={{color: "#ec8209"}}></FontAwesomeIcon>60</span>
                </div>
                <div className="div mt-lg-3 mt-3">
                  <span><FontAwesomeIcon icon={faStar}  style={{color: "#f27907"}}></FontAwesomeIcon></span>
                  <span>5.0 (37)</span>
                </div>
                <ul className="list-unstyled">
                    <li className="mt-lg-3 mt-3">Variety:
                        <ul>
                        <li>are unaffected by this style</li>
                        <li>will still show a bullet</li>
                        <li>and have appropriate left margin</li>
                        </ul>
                    </li>
                    <div className="mt-lg-3 mt-3">
                      <span className="fw-bold">Quality:</span>
                      <span>
                        <button className=" quantityBtn">-</button>
                        <button className="quantityBtN2">1</button>
                        <button className="quantityBtn">+</button>
                      </span>
                    </div>
                    
                    <li className="mt-lg-3 mt-3 CustomP-16-400">Our Date-Coconut Delight combines the rich<br/> sweetness of organic date syrup with the tropical<br/> flavor of coconut flakes, creating a snack that’s both<br/> indulgent and healthy.</li>
                     <button className=" customBtn10 mt-4 ">Add to cart</button>
                      <button className=" customBtn11 mt-4 ">Add to cart</button>
                </ul>
            </div>
        </div>
     </div>
    {/* product section 1 ends here   */}

     {/* product section 2 (AbOUT THIS PRODUCT)   */}
    <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7 mt-lg-5 mt-5">
                <p className="cardtitle-Black12">About This Product</p>
                <ul className="list-unstyled">
                    <li className="CustomP-16-400">Indulge in the natural crunch and flavor of our Crunchy Nut Mix, a<br/> blend of premium nuts roasted to perfection. This mix includes<br/> almonds, cashews, and walnuts, providing a delicious and<br/> nutritious snack that is rich in protein and healthy fats.  
                        <ul className="mt-lg-3 mt-3">
                        <li>Blend of organic almonds, cashews, and walnuts</li>
                        <li>Lightly roasted to enhance natural flavors</li>
                        <li> No added oils or preservatives</li>
                        </ul>
                    </li>
                </ul>
                <small className="CustomP-16-400"><span style={{color: "#000", fontWeight: "bold"}}>Benefits: </span>Excellent source of protein and healthy fats. Supports<br/> heart health and brain function. Satisfies hunger and boosts<br/> energy.</small>
            </div>
        </div>

         {/* product section 3 (CUSTOMER REVIEW)  */}
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7 mt-lg-3 mt-3">
                <p className="cardtitle-Black ">customer review</p>
                <small className="CustomP-14-4000">77 rewiews</small>
                <div className="mt-lg-3 mt-3">
                    <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                    <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                </div>
                <img src={Pr24} className="mt-lg-3 productImage1" alt=""/>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-5 mt-lg-3 mt-3">
                <p className="cardtitle-Black">How would you rate this?</p>
                <div>
                    <FontAwesomeIcon icon={faStar}  style={{color: "#01060e"}}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}  style={{color: "#01060e"}}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}  style={{color: "#01060e"}}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}  style={{color: "#01060e"}}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}  style={{color: "#01060e"}}></FontAwesomeIcon>
                </div>
                <form action="">
                    <label for="inputEmail4" className="form-label mt-lg-3 mt-3 CustomP-14-4000">Add a headline</label>
                    <input type="text" className="form-control mt-lg-3 mt-3" id="inputEmail4" placeholder="Write a summary of your review"/>

                    <label for="inputEmail4" className="form-label CustomP-14-4000 mt-lg-4">Write a review</label>
                    <div className="form-floating">
                        <textarea className="form TextArea1 mt-lg-3 mt-3 productImage1" placeholder=" Tell us what you think"  id="floatingTextarea2" ></textarea>
                        <label for="floatingTextarea2"></label>
                    </div>
                    <button className=" LightGbtn mt-lg-3 mt-3 py-lg-2" type="submit">Submit Review</button>
                </form>
            </div>
        </div>
    </div>

    {/* product section 4 (CARDS SECTION  */}

    <div className="container mt-lg-5 mt-5">
      <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 mt-3 mt-lg-0">
              <div className="card shadow cardWidth" style={{width: "22rem"}}>
                  <div className="card-body">
                      <img src={Pr25} alt=""/>
                      <h5 className="card-title mt-lg-3">Sarah Taylor</h5>
                      <div>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          
                      </div>
                      <h5 className="card-subtitle mb-2 text-muted mt-lg-3 cardtitle-Black">Organic Fruit Bites</h5>
                      <p className="card-text CustomP-14-400">They're the perfect snack for my kids<br/> and I feel great knowing they're eating<br/> something healthy and natural.</p>
                  </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mt-3 mt-lg-0">
              <div className="card shadow cardWidth" style={{width: "22rem"}}>
                  <div className="card-body">
                      <img src={Pr26} alt=""/>
                      <h5 className="card-title mt-lg-3">Sarah Taylor</h5>
                      <div>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                      </div>
                      <h5 className="card-subtitle mb-2 text-muted mt-lg-3 cardtitle-Black">Organic Fruit Bites</h5>
                      <p className="card-text CustomP-14-400">They're the perfect snack for my kids<br/> and I feel great knowing they're eating<br/> something healthy and natural.</p>
                  </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mt-3 mt-lg-0">
              <div className="card shadow cardWidth" style={{width: "22rem"}}>
                  <div className="card-body">
                      <img src={Pr27} alt=""/>
                      <h5 className="card-title mt-lg-3">Sarah Taylor</h5>
                      <div>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                      </div>
                      <h5 className="card-subtitle mb-2 text-muted mt-lg-3 cardtitle-Black">Organic Fruit Bites</h5>
                      <p className="card-text CustomP-14-400">They're the perfect snack for my kids<br/> and I feel great knowing they're eating<br/> something healthy and natural.</p>
                  </div>
              </div>
          </div>
      </div>
      <div className="row mt-lg-5">
          <div className="col-sm-12 col-md-12 col-lg-4 mt-3 mt-lg-0">
              <div className="card shadow cardWidth" style={{width: "22rem"}}>
                  <div className="card-body">
                      <img src={Pr28} alt=""/>
                      <h5 className="card-title mt-lg-3">Sarah Taylor</h5>
                      <div>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                      </div>
                      <h5 className="card-subtitle mb-2 text-muted mt-lg-3 cardtitle-Black">Organic Fruit Bites</h5>
                      <p className="card-text CustomP-14-400">They're the perfect snack for my kids<br/> and I feel great knowing they're eating<br/> something healthy and natural.</p>
                  </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mt-3 mt-lg-0">
              <div className="card shadow cardWidth" style={{width: "22rem"}}>
                  <div className="card-body">
                      <img src={Pr29} alt=""/>
                      <h5 className="card-title mt-lg-3">Sarah Taylor</h5>
                      <div>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                      </div>
                      <h5 className="card-subtitle mb-2 text-muted mt-lg-3 cardtitle-Black">Organic Fruit Bites</h5>
                      <p className="card-text CustomP-14-400">They're the perfect snack for my kids<br/> and I feel great knowing they're eating<br/> something healthy and natural.</p>
                  </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mt-3 mt-lg-0">
              <div className="card shadow cardWidth" style={{width: "22rem"}}>
                  <div className="card-body">
                      <img src={Pr30} alt=""/>
                      <h5 className="card-title mt-lg-3">Sarah Taylor</h5>
                      <div>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                          <span><FontAwesomeIcon icon={faStar}  style={{color: "#e68805"}}></FontAwesomeIcon></span>
                      </div>
                      <h5 className="card-subtitle mb-2 text-muted mt-lg-3 cardtitle-Black">Organic Fruit Bites</h5>
                      <p className="card-text CustomP-14-400">They're the perfect snack for my kids<br/> and I feel great knowing they're eating<br/> something healthy and natural.</p>
                  </div>
              </div>
          </div>
      </div>
      

        
    </div>

     {/* product section 5 (OUR POPULAR PRODUCTS) */}
      {/* section header here  */}
    <div className="container mb-lg-5">
      <h2 className="mt-lg-5 mt-5 pt-lg-3 cardHeader-black">Similar Products</h2>
        
      <div className="hero2head d-flex justify-content-between align-items-center">
        <span className="my-lg-4 CustomP-16-400">Browse our most popular snacks and make your day<br/> more beautiful and glorious.</span>
        <button type="button" className="btn btn-outline-success fw-bold browseBTN my-lg-0 my-5">Browse all</button>
      </div>
      <ProductList/>
      
    </div>
    
     {/* product section 5 ends here   */}
    </>
  )
}

export default Products

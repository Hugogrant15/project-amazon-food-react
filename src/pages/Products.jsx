import React from 'react'
import {Pr22, Pr23} from '../assets/Index'

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
                  <del><small><span><i className="fa-solid fa-naira-sign"></i></span>120 </small></del>
                  <span id="OrangeDoll" className="mt-lg-3 mt-3"><i className="fa-solid fa-naira-sign" style={{color: "#ec8209"}}></i>60</span>
                </div>
                <div className="div mt-lg-3 mt-3">
                  <span><i className="fa-solid fa-star" style={{color: "#f27907"}}></i></span>
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
                     <button className="btn customBtn10 mt-4 ">Add to cart</button>
                      <button className="btn customBtn11 mt-4 ">Add to cart</button>
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
                    <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                    <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                    <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                    <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                    <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                </div>
                <img src="./images/Login/Frame 17997.png" className="mt-lg-3 productImage1" alt=""/>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-5 mt-lg-3 mt-3">
                <p className="cardtitle-Black">How would you rate this?</p>
                <div>
                    <i className="fa-solid fa-star" style={{color: "#01060e"}}></i>
                    <i className="fa-solid fa-star" style={{color: "#01060e"}}></i>
                    <i className="fa-solid fa-star" style={{color: "#01060e"}}></i>
                    <i className="fa-solid fa-star" style={{color: "#01060e"}}></i>
                    <i className="fa-solid fa-star" style={{color: "#01060e"}}></i>
                </div>
                <form action="">
                    <label for="inputEmail4" className="form-label mt-lg-3 mt-3 CustomP-14-4000">Add a headline</label>
                    <input type="text" className="form-control mt-lg-3 mt-3" id="inputEmail4" placeholder="Write a summary of your review"/>

                    <label for="inputEmail4" className="form-label CustomP-14-4000 mt-lg-4">Write a review</label>
                    <div className="form-floating">
                        <textarea className="form TextArea1 mt-lg-3 mt-3 productImage1" placeholder="Tell us what you think"  id="floatingTextarea2" ></textarea>
                        <label for="floatingTextarea2"></label>
                    </div>
                    <button className="btn LightGbtn mt-lg-3 mt-3 py-lg-2" type="submit">Submit Review</button>
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
                      <img src="./images/Login/Ellipse 28.png" alt=""/>
                      <h5 className="card-title mt-lg-3">Sarah Taylor</h5>
                      <div>
                          <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                          <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                          <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                          <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                          <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                      </div>
                      <h5 className="card-subtitle mb-2 text-muted mt-lg-3 cardtitle-Black">Organic Fruit Bites</h5>
                      <p className="card-text CustomP-14-400">They're the perfect snack for my kids<br/> and I feel great knowing they're eating<br/> something healthy and natural.</p>
                  </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mt-3 mt-lg-0">
              <div className="card shadow cardWidth" style={{width: "22rem"}}>
                  <div className="card-body">
                      <img src="./images/Login/Ellipse 28.png" alt=""/>
                      <h5 className="card-title mt-lg-3">Sarah Taylor</h5>
                      <div>
                          <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                          <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                          <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                          <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                          <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                          
                      </div>
                      <h5 className="card-subtitle mb-2 text-muted mt-lg-3 cardtitle-Black">Organic Fruit Bites</h5>
                      <p className="card-text CustomP-14-400">They're the perfect snack for my kids<br/> and I feel great knowing they're eating<br/> something healthy and natural.</p>
                  </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mt-3 mt-lg-0">
              <div className="card shadow cardWidth" style={{width: "22rem"}}>
                  <div className="card-body">
                      <img src="./images/Login/Ellipse 28.png" alt=""/>
                      <h5 className="card-title mt-lg-3">Sarah Taylor</h5>
                      <div>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
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
                      <img src="./images/Login/Ellipse 28.png" alt=""/>
                      <h5 className="card-title mt-lg-3">Sarah Taylor</h5>
                      <div>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                      </div>
                      <h5 className="card-subtitle mb-2 text-muted mt-lg-3 cardtitle-Black">Organic Fruit Bites</h5>
                      <p className="card-text CustomP-14-400">They're the perfect snack for my kids<br/> and I feel great knowing they're eating<br/> something healthy and natural.</p>
                  </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mt-3 mt-lg-0">
              <div className="card shadow cardWidth" style={{width: "22rem"}}>
                  <div className="card-body">
                      <img src="./images/Login/Ellipse 28.png" alt=""/>
                      <h5 className="card-title mt-lg-3">Sarah Taylor</h5>
                      <div>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                      </div>
                      <h5 className="card-subtitle mb-2 text-muted mt-lg-3 cardtitle-Black">Organic Fruit Bites</h5>
                      <p className="card-text CustomP-14-400">They're the perfect snack for my kids<br/> and I feel great knowing they're eating<br/> something healthy and natural.</p>
                  </div>
              </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mt-3 mt-lg-0">
              <div className="card shadow cardWidth" style={{width: "22rem"}}>
                  <div className="card-body">
                      <img src="./images/Login/Ellipse 28.png" alt=""/>
                      <h5 className="card-title mt-lg-3">Sarah Taylor</h5>
                      <div>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
                        <span><i className="fa-solid fa-star" style={{color: "#e68805"}}></i></span>
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
    <div className="container">
      <h2 className="mt-lg-5 mt-5 pt-lg-3 cardHeader-black">Similar Products</h2>
        
      <div className="hero2head d-flex justify-content-between align-items-center">
        <span className="my-lg-4 CustomP-16-400">Browse our most popular snacks and make your day<br/> more beautiful and glorious.</span>
        <button type="button" className="btn btn-outline-success fw-bold browseBTN my-lg-0 my-5">Browse all</button>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-4">
           {/* first card here   */}
          <div className="border-0 " id="imgWidth">
            <img src="./images/Images.png" className="card-img-top w-sm-100" alt="..."/>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title CustomP-14-400 my-3 my-lg-3">Coconut Flakes</h5>
                <a className="text-reset " href="#">
                  <i className="fa-regular fa-heart"></i>
                </a> 
              </div>
              <p className="card-text cardtitle-Black">Organic Almond Delight</p>

              <div className="d-flex justify-content-between align-items-center ">
                <div className="div">
                  <span><i className="fa-solid fa-star" style={{color: "#f27907"}}></i></span>
                  <span>5.0 (18)</span>
                </div>
                <span className="fw-bold">$110</span>
              </div>
            </div>
              <button className="btn customBtn mt-4 hover-underline">Add to cart</button>
          </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 mt-lg-0 mt-4 ">
            {/* second card here   */}
            <div className="border-0 " id="imgWidth">
              <img src="./images/Images (1).png" className="card-img-top" alt="..."/>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title CustomP-14-400 my-3 my-lg-3">Coconut Flakes</h5>
                  <a className="text-reset " href="#">
                    <i className="fa-regular fa-heart"></i>
                  </a> 
                </div>
                <p className="card-text cardtitle-Black">Berry Bliss Bites</p>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="div">
                    <span><i className="fa-solid fa-star" style={{color: "#f27907"}}></i></span>
                    <span>5.0 (18)</span>
                  </div>
                  <span className="fw-bold">$139</span>
                </div>
              </div>
                <button className="btn customBtn mt-4 hover-underline">Add to cart</button>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 mt-lg-0 mt-4">
            {/* third card here   */}
            <div className="border-0 " id="imgWidth">
              <img src="./images/Images (2).png" className="card-img-top" alt="..."/>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title CustomP-14-400 my-3 my-lg-3">Coconut Flakes</h5>
                  <a className="text-reset " href="#">
                    <i className="fa-regular fa-heart"></i>
                  </a> 
                </div>
                <p className="card-text cardtitle-Black">Coconut Crunchies</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="div">
                    <span><i className="fa-solid fa-star" style={{color: "#f27907"}}></i></span>
                    <span>5.0 (18)</span>
                  </div>
                  <span className="fw-bold">$399</span>
                </div>
              </div>
                <button className="btn customBtn mt-4 hover-underline">Add to cart</button>
            </div>
          </div>
      </div>
    </div>
    
     {/* product section 5 ends here   */}
    </>
  )
}

export default Products

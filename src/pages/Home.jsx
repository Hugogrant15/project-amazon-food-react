import React from 'react'
import {Pr1, Pr2, Pr3, Pr4, Pr5, Pr6, Pr7, Pr8, Pt1, Pr9, Pt3, Pr10, Pr11, Pr12, Pr13, Pr14} from '../assets/Index';
import '../Style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <>
      <div className="container-fluid ContainHeight ">
        <div className="container mt-lg-5 pt-lg-4 mt-4 section1Relative">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 mt-lg-5 pt-lg-5">
              <p id="interBlack">Discover the Pure Taste of Nature</p>
              <h1 className="mt-4"><span id="Green1">Organic</span><span id="Orange1"> Snacks</span><br/><span id="Green1"> Made</span><span id="Orange1"> with</span><span id="Green1"> Love,</span><br/><span id="Green1"> Just</span><span id="Orange1"> for</span><span id="Green1"> You!</span></h1>
              <button className="btn hero1Btn mt-5 liquid-morph-element mb-5 mb-lg-0 py-lg-4">Show Now<i className="fa-solid fa-shop ms-lg-3 ms-md-3 ms-3" style={{color: "#ffffff"}}></i></button>
              <img src={Pr2} className="mt-lg-5 mt-4 " alt=""/>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6  ">
              <div className="">
              <img className="w-100 image-fluid starRelative " src={Pr1} alt="" style={{width: "100px", position: "relative"}} /> 
              </div>
                <div className="star-rating  hero1absolute text-center ">
                    <i className="fa-regular fa-star starIcon" style={{color: "#fcfcfc", backgroundColor: "#F58634", width: "47px", height: "35px"}} ></i>
                  <i className="fa-regular fa-star" style={{color: "#fcfcfc", backgroundColor: "#F58634", width: "47px", height: "35px"}}></i>
                    <i className="fa-regular fa-star" style={{color: "#fcfcfc", backgroundColor: "#F58634", width: "47px", height: "35px"}}></i>
                    <i className="fa-regular fa-star" style={{color: "#fcfcfc", backgroundColor: "#F58634", width: "47px", height: "35px"}}></i>
                    <i className="fa-regular fa-star" style={{color: "#fcfcfc", backgroundColor: "#F58634", width: "47px", height: "35px"}}></i> 
                </div>
                <div className="div ">
                  
                </div>
                <div className=" d-flex zflex mt-lg-4"> 
                  <div className="d-flex align-items-center ">
                    <img src={Pr3} alt=""/>
                    <div className="div">
                      <small>Fast Delivery</small>
                      <small> Deliver within 30<br/> Minutes</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={Pr4} alt=""/>
                    <div className="div">
                      <small>Fast Delivery</small>
                      <small> Deliver within 30<br/> Minutes</small>
                    </div>
                  </div>
                    <div className="d-flex align-items-center">
                    <img src={Pr5} alt=""/>
                    <div className="div">
                      <small>Fast Delivery</small>
                      <small> Deliver within 30<br/> Minutes</small>
                    </div>
                  </div>
                </div>  
            </div>
          </div>
        </div> 
        <div className="H1background" style={{backgroundImage: `url(${Pr8})`}}>
          <img className="Abs12 img-fluid d-none d-lg-block d-md-block " src={Pr6}  alt=""/>
          <img src={Pr7} className=" Abs12 d-lg-none d-md-none d-block" alt=""/>
        </div> 
      </div>

         {/* Hero section 2(our popular product) starts here 
        section header here  */}
        <div className="container">
          <h2 className="mt-lg-3 cardHeader-black ">Our Popular Products</h2>
            
          <div className="hero2head d-flex justify-content-between align-items-center">
            <span className="my-lg-4 my-4 CustomP-16-400 ">Browse our most popular snacks and make your day<br/> more beautiful and glorious.</span>
            <button type="button" className="btn btn-outline-success fw-bold btnhero2  py- py-lg-3 py-3 my-lg-0 my-4">Browse All</button>
          </div>

          <div className="row ">
            <div className="col-sm-12 col-md-12 col-lg-4 mt-lg-0 mt-3">
               {/* first card here  */}
              <div className="border-0 " id="imgWidth">
                <img src={Pt1} className="card-img-top w-sm-100" alt="..."/>
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
                  <button className="btn customBtn mt-4 hover-underline mb-5 mb-lg-0">Add to cart</button>
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
                    <button className="btn customBtn mt-4 hover-underline mb-5 mb-lg-0">Add to cart</button>
                </div>
              </div>
          </div>
        </div>
          {/* hero section 2 ends here  */}

          
           {/* hero section  3 (high quality organic snacks)   */}
        <div className="container mt-lg-5 pt-lg-5 mt-5">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="div">
                <img src={Pr10} alt="" className="img-fluid mt-lg-5 pt-lg-3 zoom"/>
                <div className="text-lg-center">
                  <button className=" btn  rounded-pill mb-5 mb-lg-0 " id="liquid-morph-element"> 100% Organic</button>
                </div>
                
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-7">
              <div className="div">
                <h1 className="CustomGreenH1">HIGH QUALITY</h1>
                <h1 className="Customorange">ORGANIC SNACKS</h1>
                <p className="CustomP-16-400">At Foodie Amazon, we believe in the power of nature to provide wholesome,<br/> delicious snacks. Our journey began with a simple mission: to bring the pure<br/> taste of nature to your doorstep. We are dedicated to creating snacks that are<br/> not only delicious but also healthy and free from artificial additives. Our major<br/> focus is on providing organic snacks that are made with the finest ingredients<br/> sourced from sustainable farms.<br/> Our commitment to quality means that you won't find any gums, preservatives,<br/> or artificial sugars in our products. Instead, we use natural sweeteners and<br/> preservatives to ensure that every bite is as healthy as it is tasty.</p>
                <p className="CustomP-16-400 fst-italic" style={{fontSize: "14px"}}>Our vision is to become a household name in organic snacks, known for our commitment to quality and sustainability.</p>
                <img src={Pr11} alt=""/>
                <p>Chief Executive Officer</p>
              </div>
            </div>
          </div>
        </div>
         {/* Hero section 3 ends here  */}


          {/* hero section 4 (Bulk Order) starts here   */}
        <section class=" hero4background">
          <div class="container mt-lg-5 pt-lg-5 mt-5 pt-5">
             {/* header section here  */}
            <div class="text-center ">
              <h1 class="cardHeader-black">Bulk Orders</h1>
              <p class="CustomP-16-400">Our snacks are free from artificial additives, providing a pure and wholesome snacking experience. Discover<br/> our range of delightful organic treats designed to satisfy your cravings while supporting a healthy lifestyle.</p>
            </div>

            <div class="row mt-lg-5 pt-lg-3">
              <div class="col-sm-12 col-md-6 col-lg-3 mt-lg-0 mt-3">
                 {/* first card here */}
                <div class="border-0 rounded-3 text-center bg-white py-3" >
                  <div class="div  ">
                    <img class="BulkCard" src={Pr12} alt=""/>
                    <p class="cardtitle-Black mt-3">Organic Almond Delight</p>
                    <p class="CustomP-16-400">Crunchy almonds<br/> coated with a touch<br/> of organic honey,<br/> perfect for a healthy<br/> snack.</p>
                    <button class="btn btn-outline-success px-5 mt-3 py-lg-3 py-3 ourProdctBTN" style={{border: "2px solid #00A859"}}>ORDER NOW <i class="fa-solid fa-chevron-right ms-3" style={{color: "#00A859"}}></i></button>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-3 mt-lg-0 mt-3">
                 {/* second card here  */}
                <div class="border-0 rounded-3 text-center bg-white py-3" >
                  <div class="div ">
                    <img class="BulkCard" src={Pr13} alt=""/>
                    <p class="cardtitle-Black mt-3">Berry Bliss Bites</p>
                    <p class="CustomP-16-400">Crunchy almonds<br/> coated with a touch<br/> of organic honey,<br/> perfect for a healthy<br/> snack.</p>
                    <button class="btn btn-outline-success px-5 mt-3 py-lg-3 py-3 ourProdctBTN" style={{border: "2px solid #00A859"}}>ORDER NOW <i class="fa-solid fa-chevron-right ms-3" style={{color: "#00A859"}}></i></button>

                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-3 mt-lg-0 mt-3">
                {/* third card here  */}
                <div class="border-0 rounded-3 text-center bg-white py-3" >
                  <div class="div ">
                    <img class="BulkCard" src={Pr14} alt=""/>
                    <p class="cardtitle-Black mt-3">Coconut Crunchies</p>
                    <p class="CustomP-16-400">A delightful mix of<br/> organic berries and<br/> nuts, offering a burst<br/> of flavor in every<br/> bite.</p>
                    <button class="btn btn-outline-success px-5 mt-3 py-lg-3 py-3 ourProdctBTN" style={{border: "2px solid #00A859"}}>ORDER NOW <i class="fa-solid fa-chevron-right ms-3" style={{color: "#00A859"}}></i></button>

                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-3 mt-lg-0 mt-3 ">
                {/* fourth card here   */}
                <div class="border-0 rounded-3 text-center  py-3 hero4GreenCard" >
                  <div class="div mt-lg-5 mt-5 pt-lg-3 pt-5">
                    <p class="text-white mt-lg-5 mt-5 pt-4 fw-bold" >Others</p>
                    <p class="text-white mt-lg-3 mt-3">Milk, Tools, Spice, etc.</p>
                    <button class="btn Hero4Btn  mt-lg-5 mt-4">See Others <i class="fa-solid fa-chevron-right ms-3" style={{color: "#fff"}}></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* hero section 4 ends here  */}


         {/* Hero section 5 our new products starts here  */}
       
    <div class="container">
      <h2 class="mt-lg-5 mt-5 pt-5 pt-lg-3 cardHeader-black">Our New Products</h2>
         {/* section header here */}
      <div class="hero2head d-flex justify-content-between align-items-center">
        <span class="my-lg-4 my-4 CustomP-16-400">Browse our most popular snacks and make your day<br/> more beautiful and glorious.</span>
        <button type="button" class="btn btn-outline-success fw-bold btnhero2 mb-5 mb-lg-0 py-lg-3 py-3">Browse All</button>
      </div>

      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
           {/* first card here   */}
          <div class="border-0 Image6Card1" >
            <img src={Pt1} class="card-img-top" alt="..."/>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="card-title CustomP-14-400 my-3 my-lg-3">Coconut Flakes</h5>
                <a class="text-reset " href="#">
                  <i class="fa-regular fa-heart"></i>
                </a> 
              </div>
              <p class="card-text cardtitle-Black">Organic Almond Delight</p>

              <div class="d-flex justify-content-between align-items-center">
                <div class="div">
                  <span><i class="fa-solid fa-star" style={{color: "#f27907"}}></i></span>
                  <span>5.0 (18)</span>
                </div>
                <span class="fw-bold">$110</span>
              </div>
            </div>
              <button class="btn customBtn mt-4 hover-underline mb-4 mb-lg-0 ">Add to cart</button>
          </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
             {/* second card here   */}
            <div class="border-0 Image6Card1">
              <img src={Pr9} class="card-img-top" alt="..."/>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="card-title CustomP-14-400 my-3 my-lg-3">Coconut Flakes</h5>
                  <a class="text-reset " href="#">
                    <i class="fa-regular fa-heart"></i>
                  </a> 
                </div>
                <p class="card-text cardtitle-Black">Berry Bliss Bites</p>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="div">
                    <span><i class="fa-solid fa-star" style={{color: "#f27907"}}></i></span>
                    <span>5.0 (18)</span>
                  </div>
                  <span class="fw-bold">$139</span>
                </div>
              </div>
                <button class="btn customBtn mt-4 hover-underline mb-4 mb-lg-0">Add to cart</button>
            </div>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
             {/* third card here   */}
            <div class="border-0 Image6Card1 " >
              <img src={Pt3} class="card-img-top" alt="..."/>
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="card-title CustomP-14-400 my-3 my-lg-3">Coconut Flakes</h5>
                  <a class="text-reset " href="#">
                    <i class="fa-regular fa-heart"></i>
                  </a> 
                </div>
                <p class="card-text cardtitle-Black">Coconut Crunchies</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="div">
                    <span><i class="fa-solid fa-star" style={{color: "#f27907"}}></i></span>
                    <span>5.0 (18)</span>
                  </div>
                  <span class="fw-bold">$399</span>
                </div>
              </div>
                <button class="btn customBtn mt-4 hover-underline mb-4 mb-lg-0">Add to cart</button>
            </div>
          </div>
      </div>
    </div>
     {/* Hero section 5 ends here  */}
    </>
  )
}

export default Home

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// const LiveStock = () => {
//   return (
//     <>
//       <Carousel
//         additionalTransfrom={0}
//         arrows={true}
//         autoPlay
//         autoPlaySpeed={0.2}
//         centerMode={false}
//         className="my-bottom-50"
//         containerClass="container-with-dots"
//         customTransition="all 1s linear"
//         dotListClass=""
//         draggable
//         focusOnSelect={false}
//         infinite
//         itemClass=""
//         keyBoardControl
//         minimumTouchDrag={80}
//         pauseOnHover
//         renderArrowsWhenDisabled={false}
//         renderButtonGroupOutside={false}
//         renderDotsOutside={false}
//         responsive={{
//           desktop: {
//             breakpoint: {
//               max: 3000,
//               min: 1024,
//             },
//             items: 3,
//             partialVisibilityGutter: 40,
//           },
//           mobile: {
//             breakpoint: {
//               max: 464,
//               min: 0,
//             },
//             items: 1,
//             partialVisibilityGutter: 30,
//           },
//           tablet: {
//             breakpoint: {
//               max: 1024,
//               min: 464,
//             },
//             items: 2,
//             partialVisibilityGutter: 30,
//           },
//         }}
//         rewind={false}
//         rtl={false}
//         shouldResetAutoplay={false}
//         showDots={false}
//         sliderClass=""
//         slidesToSlide={0.1}
//         swipeable
//         transitionDuration={1000}
//       >
//         <div className="my-b-shadow h-200 md-11 down-3 my-col-11 xs-container xs-centere my-bottom-10">
//           <span className="px14 my-container down-3 interBold md-px20 xs-px15">
//             Livestock Management
//           </span>
//           {/* <div className=" down-2 md-12  my-container md-down-2 xs-down-1">
//             <span className="xs-px12 InterLight faded px12 md-px13">
//               We specialize in the breeding and care of healthy, grass-fed
//               cattle, goats, and pigs, adhering to the highest standards of
//               animal welfare and organic production.
//             </span>
//           </div> */}
//           <div className="my-col-12 xs-12 h-200 img-container">
//             <img
//               src="https://img.freepik.com/free-photo/veterinarian-doctor-with-tablet-examining-pigs-pig-farm_342744-358.jpg?ga=GA1.1.699054498.1719408236&semt=ais_hybrid"
//               alt=""
//             />
//           </div>
//           <div className="md-down-4 md-10 md-off-1 my-container xs-container xs-down-5 down-3"></div>
//         </div>

//         <div className="my-b-shadow h-200 md-11 down-3 my-col-11 xs-container xs-centere my-bottom-10">
//           <span className="px14 my-container down-3 interBold md-px20 xs-px15">
//             Pasture Management
//           </span>
//           {/* <div className=" down-2 md-12  my-container md-down-2 xs-down-1">
//             <span className="xs-px12 InterLight faded px12 md-px13">
//               Our advanced grazing techniques ensure the best possible pasture
//               quality, supporting livestock health 
//             </span>
//           </div> */}
//           <div className="my-col-12 xs-12 h-200 img-container pro-2">
           
//           </div>
//           <div className="md-down-4 md-10 md-off-1 my-container xs-container xs-down-5 down-3"></div>
//         </div>

//         <div className="my-b-shadow h-200 rad-20 md-11 down-3 my-col-11 xs-container xs-centere my-bottom-10">
//           <span className="px14 my-container down-3 interBold md-px20 xs-px15">
//             Organic Meats & Dairy
//           </span>
//           {/* <div className=" down-2 md-12  my-container md-down-2 xs-down-1">
//             <span className="xs-px12 InterLight faded px12 md-px13">
//               Every product from Anioma Ranch is 100% organic, chemical-free,
//               and designed to me...
//             </span>
//           </div> */}
//           <div className="my-container down-3 xs-12 h-200 img-container pro-3">
           
//           </div>
//           <div className="md-down-4 md-10 md-off-1 my-container xs-container xs-down-5 down-3"></div>
//         </div>

//         <div className="my-b-shadow h-200 md-11 down-3 my-col-11 xs-container xs-centere my-bottom-10">
//           <span className="px14 my-container down-3 interBold md-px20 xs-px15">
//             Innovation & Training Hub
//           </span>
//           {/* <div className=" down-2 md-12  my-container md-down-2 xs-down-1">
//             <span className="xs-px12 InterLight faded px12 md-px13">
//               We serve as a center for knowledge sharing, training, and
//               collaboration, equipping farmers and stakeholders with the tools
//               to adopt sustainable and innovative ranching practices.
//             </span>
//           </div> */}
//           <div className="my-col-12 xs-12 h-200 img-container pro-4">
           
//           </div>
//           <div className="md-10 md-off-1 my-container xs-container xs-down-5 down-3"></div>
//         </div>

//         <div className="my-b-shadow h-200 md-11 down-3 my-col-11 xs-container xs-centere my-bottom-10">
//           <span className="px14 my-container down-3 interBold md-px20 xs-px15">
//             Community Engagement
//           </span>
//           <div className=" down-2 md-12  my-container md-down-2 xs-down-1">
//             <span className="xs-px12 InterLight faded px12 md-px13">
//               Through job creation, conflict resolution, and empowerment
//               programs, we work hand-in-hand with local communities to drive
//               economic growth and social harmony.
//             </span>
//           </div>
//           <div className="my-col-12 xs-12 h-200 img-container pro-4">
//             <img
//               src="https://img.freepik.com/premium-photo/multiethnic-startup-business-team-discussing-new-business-plan-working-laptop-tablet-computer-while-learning-about-drone-technology-new-business-advancement_530697-17625.jpg?ga=GA1.1.699054498.1719408236&semt=ais_hybrid"
//               alt=""
//             />
//           </div>
//           <div className="md-10 md-off-1 my-container xs-container xs-down-5 down-3"></div>
//         </div>


//       </Carousel>
//     </>
//   );
// };

// export default LiveStock;




import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
const LiveStock = () => {
  const Navigate = useNavigate();
    return ( <>
     <Carousel 
 additionalTransfrom={0}
 arrows={true}
 autoPlaySpeed={3000}
 centerMode={false}
 className="my-bottom-50"
 containerClass="container"
 dotListClass=""
 draggable
 focusOnSelect={false}
 infinite
 itemClass=""
 keyBoardControl
 minimumTouchDrag={80}
 pauseOnHover
 renderArrowsWhenDisabled={false}
 renderDotsOutside
 responsive={{
   desktop: {
     breakpoint: {
       max: 3000,
       min: 1024
     },
     items: 1
   },
   mobile: {
     breakpoint: {
       max: 464,
       min: 0
     },
     items: 1
   },
   tablet: {
     breakpoint: {
       max: 1024,
       min: 464
     },
     items: 1
   }
 }}
 rewind={false}
 rewindWithAnimation={false}
 rtl={false}
 shouldResetAutoplay
 showDots
 sliderClass=""
 slidesToSlide={1}
 swipeable
    >
    <div className="my-col-11 ls-centered-align space-30 down-10">
     <div className="my-col-5 xs-12 m-12">
      <div className="img-container h-600">
        {/* <div className="   */}
        <img className="rad-20" src="https://img.freepik.com/free-photo/group-pigs-domestic-animals-pig-farm_342744-522.jpg?t=st=1733141750~exp=1733145350~hmac=8daf837896e65d6b73602e32cea790b171994472d8d56739cad450552719baa1&w=740" alt="" />
              
        </div>
     </div>
     <div className="my-col-6 off-1 xs-12 md-12 xs-down-5 ls-centered-align xs-centered">
      <div>
      <div><span className="px25 poppings-Bold">Pig <span className="rol">Farming</span> <i className="fas fa-angle-right poppings-Bold  mg-10 faded-sol"></i> </span></div>
       <div className="my-mother justif xs-down-3 md-down-2 down-1">
        <span className="px15 xs-px15 faded poppings-Light">We specialize in the breeding and care of healthy, grass-fed cattle, goats, and pigs, adhering to the highest standards of animal welfare and organic production.</span>
       </div>
       <div className="my-mother down-4 xs-down-10 md-down-5"> <button  onClick={()=> {Navigate('/contact_us')}} className="my-btn-sm my-b-shadow  xs-px15 xs-px15 bg-white red c-pointer poppings-Light px12 rad-10">View More</button></div>
      </div>  
    </div>
    </div>

    <div className="my-mother ls-centered-align space-30 down-10">
     <div className="my-col-5 xs-12 m-12">
      <div className="img-container h-600">
        {/* <div className="   */}
        <img className="rad-20" src="https://img.freepik.com/free-photo/group-pigs-domestic-animals-pig-farm_342744-522.jpg?t=st=1733141750~exp=1733145350~hmac=8daf837896e65d6b73602e32cea790b171994472d8d56739cad450552719baa1&w=740" alt="" />
              
    
        </div>
     </div>
     <div className="my-col-6 off-1 xs-12 md-12 xs-down-5 ls-centered-align xs-centered">
      <div>
      <div className="my-mother xs-down-2 md-down-2"><span className="px20 xs-px20 black poppings-Bold">Pasture Management</span></div>
       <div className="my-mother justif xs-down-3 md-down-2 down-1">
        <span className="px13 xs-px15 faded poppings-Light">In our pig farming, or swine production, we are focused on the breeding, raising, and management of pigs for meat (pork) and other by-products.</span>
       </div>
       <div className="my-mother down-4 xs-down-10 md-down-5"> <button  onClick={()=> {Navigate('/contact_us')}} className="my-btn-sm xs-px15 bg-red white c-pointer interBold px12 rad-10">View More</button></div>
      </div>
    </div>
    </div>

    <div className="my-mother ls-centered-align space-30 down-10">
     <div className="my-col-5 xs-12 m-12">
      <div className="img-container h-600">
        {/* <div className="   */}
        <img
              src="https://img.freepik.com/free-photo/flat-lay-keto-diet-still-life_23-2149179553.jpg?ga=GA1.1.699054498.1719408236&semt=ais_hybrid"
              alt=""
              className="rad-20"
            />
        </div>
     </div>
     <div className="my-col-6 off-1 xs-12 md-12 xs-down-5 ls-centered-align xs-centered">
      <div>
      <div className="my-mother xs-down-2 md-down-2"><span className="px20 xs-px20 black poppings-Bold">Organic Meats & Dairy</span></div>
       <div className="my-mother justif xs-down-3 md-down-2 down-1">
        <span className="px13 xs-px15 faded poppings-Light">Every product from Anioma Ranch is 100% organic, chemical-free, and designed to meet the nutritional and ethical expectations of today’s health-conscious consumers.</span>
       </div>
       <div className="my-mother down-4 xs-down-10 md-down-5"> <button  onClick={()=> {Navigate('/contact_us')}} className="my-btn-sm xs-px15 bg-red white c-pointer interBold px12 rad-10">Contact Us</button></div>
      </div>
    </div>
    </div>

    <div className="my-mother ls-centered-align space-30 down-10">
     <div className="my-col-5 xs-12 m-12">
      <div className="img-container h-600">
        {/* <div className="   */}
        <img
              src="https://img.freepik.com/premium-photo/multiethnic-startup-business-team-discussing-new-business-plan-working-laptop-tablet-computer-while-learning-about-drone-technology-new-business-advancement_530697-17625.jpg?ga=GA1.1.699054498.1719408236&semt=ais_hybrid"
              alt=""
              className="rad-20"
            />
        </div>
     </div>
     <div className="my-col-6 off-1 xs-12 md-12 xs-down-5 ls-centered-align xs-centered">
      <div>
      <div className="my-mother xs-down-2 md-down-2"><span className="px20 xs-px20 black poppings-Bold"> Innovation & Training Hub</span></div>
       <div className="my-mother justif xs-down-3 md-down-2 down-1">
        <span className="px13 xs-px15 faded poppings-Light">We serve as a center for knowledge sharing, training, and collaboration, equipping farmers and stakeholders with the tools to adopt sustainable and innovative ranching practices.</span>
       </div>
       <div className="my-mother down-4 xs-down-10 md-down-5"> <button  onClick={()=> {Navigate('/contact_us')}} className="my-btn-sm xs-px15 bg-red white c-pointer interBold px12 rad-10">Contact Us</button></div>
      </div>
    </div>
    </div>

    <div className="my-mother ls-centered-align space-30 down-10">
     <div className="my-col-5 xs-12 m-12">
      <div className="img-container h-600">
        {/* <div className="   */}
        <img
         src="https://img.freepik.com/free-photo/medium-shot-people-travel-agency-office_23-2150801512.jpg?ga=GA1.1.699054498.1719408236&semt=ais_hybrid"
          alt=""
          className="rad-20"
            />
        </div>
     </div>
     <div className="my-col-6 off-1 xs-12 md-12 xs-down-5 ls-centered-align xs-centered">
      <div>
      <div className="my-mother xs-down-2 md-down-2"><span className="px20 xs-px20 black poppings-Bold">Community Engagement</span></div>
       <div className="my-mother justif xs-down-3 md-down-2 down-1">
        <span className="px13 xs-px15 faded poppings-Light">Through job creation, conflict resolution, and empowerment programs, we work hand-in-hand with local communities to drive economic growth and social harmony.</span>
       </div>
       <div className="my-mother down-4 xs-down-10 md-down-5"> <button  onClick={()=> {Navigate('/contact_us')}} className="my-btn-sm xs-px15 bg-red white c-pointer interBold px12 rad-10">Contact Us</button></div>
      </div>
    </div>
    </div>


  
     </Carousel>
    </> );
}
 
export default LiveStock;

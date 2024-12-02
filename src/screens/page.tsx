import Cards from "../component/cards";
import NavBar from "../component/nav";
import News from "../component/news";
import WhyChoose from "../component/whyChoose";
import Projects from "../component/whyChoose";
import Services from "../component/services";
import vid from "../images/17556777-uhd_3840_2160_24fps.mp4";
import Fade from "react-reveal"
import Snowfall from 'react-snowfall';


const Home = () => {
  return (
    <>
      <NavBar />
      <div className="bg-landing xs-down-6">
        <video controls={false} autoPlay muted loop id="myVideo" className="">
          <source src={vid} type="video/mp4" />
        </video>
      </div>
        <div className="dark-scarf hidden-xs  ">
      <Snowfall
          color="white"       // Color of snowflakes
          snowflakeCount={50} // Number of snowflakes
            />
          <Fade bottom>
          <div className="my-container centred down-30">
            <div className="my-col-8 o-2"><span className="px40 white poppings-Bold">Welcome to <span className="">Anioma</span> <span className="faded-sol">Ranch</span>  and <span className="faded-sol">Produce</span> Ltd</span></div>
            <div className="my-col-10 off down-3"><span className="white InterLight px15">Revolutionizing Livestock Management, Empowering Communities, Securing Tomorrow</span></div>
             <div className="my-mother centerd-elements down-5 centeed">
            <Fade bottom>
               <button className="my-btn-sm bg-red white c-pointer poppings-Bold px12 rad-10">Contact Us</button>
             </Fade>
             <Fade bottom>
               <button className="my-btn-sm mg-10 c-pointer bg-white poppings-Bold px12 rad-10">About Us</button>
               </Fade>
             </div>
          </div>
          </Fade>
        </div>
        
        <div className="my-mother down-1 my-bottom-50">
          {/* <div className="my-container"> <WhyChoose/></div> */}
          <div className="my-container centered-align down-5">
          <Fade left>
            <div className="my-col-6 down-5">
               <div><span className="px20 poppings-Bold">About Us</span></div>
                <div className="px13 my-mother down-3 faded">
                At Anioma Ranch and Produce Ltd., we are transforming the face of livestock management in Nigeria and beyond. Our mission is to redefine ranching by combining cutting-edge technology with eco-friendly practices to produce premium organic meats and dairy products. Specializing in the ethical rearing of cattle, goats, and pigs, we prioritize sustainable pasture management and integrated farming techniques that promote environmental conservation, community development, and food security.
                </div>
              <div className="my-mother down-5">
              <Fade top>
              <button className="my-btn-sm bg-red white c-pointer poppings-Bold px12 rad-10 my-b-shadow">Contact Us</button>
              </Fade>
              </div>
            </div>
            </Fade>
            <Fade right>
            <div className="my-col-5 off-1 down-10">
              <div className="img-container h-600 rad-20"><img className="rad-10" src="https://img.freepik.com/free-photo/separated-grilled-ribs-wooden-board-side-view_141793-12483.jpg?ga=GA1.1.699054498.1719408236&semt=ais_hybrid" alt="" /></div>
            </div>
            </Fade>
          </div>
        </div>

        <div className="my-mother my-bottom-50 bg-faded-">
          <div className="my-container down-5">
            <div className="my-col-12 down-10">
               <Fade bottom>
               <div className="my-mother centered"><span className="px30 poppings-Bold">Here's What We Offer !</span></div>
              </Fade>
              <Fade bottom>
              <div className="px15 my-col-8 off-2 centered my-mother down-2 faded">
                 We are more than a ranch; we are a movement committed to innovation, sustainability, and harmony.
              </div>
              </Fade>
              <div className="my-mother down-5">
              <Fade bottom>
                <div className="my-mother"><Services/></div>
                </Fade>
              </div>
            </div>
          
          </div>
        </div>

        <div className="bg-landing-2 down-10">
      <div className="dark-scarf-2">
      <Snowfall
          color="white"       // Color of snowflakes
          snowflakeCount={100} // Number of snowflakes
            />
           <div className="my-col-10 off-1 h-200 bg-faded-3 my-bottom-50 down-15 cenered">
           <Fade left>
           <div className="my-col-10 off-1 down-5 in-1"><span className="px40 white poppings-Bold">We are more than a ranch; we are a <span className="">movement</span> committed to innovation, sustainability, and harmony.</span></div>
           </Fade>
          </div>
      </div>
       </div>

      <div className="my-mother my-bottom-50">
        <div className="my-container centeed down-10">
        <div className="my-col-8"><span className="px30 poppings-Bold">Why Choose <span className="red">Anioma</span>  Ranch and Produce Ltd ?</span></div>
         <div className="my-mother down-5"><WhyChoose/></div>
                <Fade top>
              <button className="my-btn-sm off-2 bg-red white c-pointer poppings-Bold px12 rad-10 my-b-shadow">Contact Us Today !</button>
              </Fade>
        </div>
      </div>
  
      <div className="my-mother my-bottom-50">
       <div className="my-container xs-container xs-down-10 md-down-10 md-container down-3   centere">
        <div className="my-col-4 xs-8 md-8 "><span className="px25 xs-px20 md-px20 poppings-Bold color-code-2s upper-case ">  
        Our <span className="red">Impact</span> ?</span></div>
      <div className="my-mother down-8 xs-down-10 ls-gap-elements space-50">
        <div className="my-col-4 bg-pattern bg-black rad-20 bg-fade-2 xs-12 my-b-shadow md-4">
          <div className="img-container-1 rad-unset"><img src={""} alt="" className="rad-unset" /></div>
          <div className="my-container xs-container md-container down- xs-down-8 md-down-5">
            <span className="px12 white upper-case poppings-Bold px15 md-px15">Food Security</span>
            <div className="my-mother xs-centd xs-down-">
              <p className="px12 xs-px15 md-px15 gap-elements alice">By producing organic, sustainable food products, we strengthen the supply chain and reduce hunger.</p>
            </div>
          </div>
        </div>
        <div className="my-col-4 bg-pattern bg-black rad-20 bg-fade-2 xs-12 my-b-shadow xs-down-5 md-down-5 md-4">
          <div className="img-container-1 rad-unset"><img src={"img4"} alt="" className="rad-unset" /></div>
          <div className="my-container xs-container md-container down- xs-down-8 md-down-5">
            <span className="px12 white xs-px15 md-px15 poppings-Bold upper-case">Environmental Sustainability</span>
            <div className="my-contaier xs-container md-container">
              <p className="px12 xs-px15 md-px15 gap-elements alice">Our practices ensure land conservation and biodiversity preservation.s</p>
             
            </div>
          </div>
        </div>
        <div className="my-col-4 bg-pattern bg-black rad-20 bg-fade-2 xs-12 my-b-shadow xs-down-5 md-down-5">
          <div className="img-container-1 rad-unset"><img src={""} alt="" className="rad-unset" /></div>
          <div className="my-container xs-container md-container down- xs-down-8 md-down-5">
            <span className="px12 white xs-px15 md-px15 poppings-Bold upper-case">Conflict Resolution</span>
            <div className="my-mother">
              <p className="px12 xs-px15 md-px15 gap-elements alice"> By offering alternatives to open grazing, we contribute to peaceful coexistence among communities</p>
            </div>
          </div>
        </div>
        <div className="my-col-4 bg-pattern bg-black rad-20 bg-fade-2 xs-12 my-b-shadow xs-down-5 md-down-5">
          <div className="img-container-1 rad-unset"><img src={""} alt="" className="rad-unset" /></div>
          <div className="my-container xs-container md-container down- xs-down-8 md-down-5">
            <span className="px12 white xs-px15 md-px15 poppings-Bold upper-case">Economic Growth</span>
            <div className="my-mother">
              <p className="px12 xs-px15 md-px15 gap-elements alice"> By creating jobs and supporting local businesses, we foster economic stability in rural areas</p>
            </div>
          </div>
        </div>


        </div>
       </div>
    </div> 

      <div hidden className="my-mother hidden-ls bg-pattern bg-red xs-top-3 my-bottom-50">
        <div className="xs-container xs-down-8">
          <div className="my-mother xs-down-8">
            <span className="xs-px25 InterSemiBold white">
            Welcome To Anioma Ranch and Produce LTD
            </span>
            <div className="my-mother xs-down-5">
              <span className="white xs-px15">
                $0 monthly service charge. $0 minimum deposite to open account.
                Only possible with ScheldthBank
              </span>
            </div>
            <div className="my-mother xs-down-10">
              <button className="my-b-shadow my-btn-sm bg-white black InterSemiBold">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>


 <Footer
    </>
  );
};

export default Home;

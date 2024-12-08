import element from "../images/elements1.png"
import header from "../images/header-img1.png"
import web from "../images/web.png"
import circle from "../images/circle.png"
import webDev from "../images/webdesign.svg"
import app from "../images/appdev.svg"
import seo from "../images/seo.svg"
import soci from "../images/marketing.svg"
import TrustedBy from "../component/whyChoose"
import NavBar from "../component/nav"
import { Zoom } from "react-reveal"
const Home = () => {
  return (  <>


  <div className="my-mother h-100-vh bg-grad" >
     <NavBar/>

    <div className="my-col-10 off-1 down-30">
      <div className="my-col-6" >
        <div><span className="bg-color-code-3 rad-10 px9 color-code-1 pd-10 ubuntuLight">Top #1 SEO & Digital Agency</span></div>
        <div className="my-mother down-2">
          <span className="px40 ubuntuBold black" >Elevate Your Brand With Expert SEO & IT Solutions</span>
        </div>
        <div className="my-mother down-1" ><span className="px10 faded ubuntuLight" >Welcome to WillmaestroIt where we specialize in revolutionizing your online
        presence through expert IT solutions.</span></div>
        <div className="my-mother gap-elemets down-5" >
        <a href="" className="rad-30 px9 white ubuntuBold bg-color-code-1 my-btn-sm"> Contact Now <span className="icons bg-white mg-10 px8" ><i className="fas black deg-45 fa-arrow-up" ></i></span> </a>
        <a href="" className="rad-30 mg-10 px9 ubuntuBold bd-code-1 color-code-1 my-btn-sm">About Us <span className="icons bg-color-code-1 mg-10 px8" ><i className="fas white deg-45 fa-arrow-up" ></i></span> </a>
      </div>
        </div>
      <div className="my-col-6" >
        <div className="circle-grad-design top-10" ></div>
        <Zoom  > <div className="my-btn-sm bg-color-code-1  my-col-3 centered rad-30 poppings-Bold white  px8 b-shadow" >Mobile Apps</div>  </Zoom  >
        <Zoom><div className="my-btn-sm bg-color-code-4 fl-right my-col-3 centered rad-30 poppings-Bold orange  px8 b-shadow" >Websites</div></Zoom  >
      <Zoom ><div className="my-btn-sm bg-green top-15 my-col-3 centered rad-30 poppings-Bold green  px8 b-shadow" >Branding & SEO</div></Zoom  >
          <Zoom  >
           <div className="img-container top-7" ><img src={header} alt="" /></div>
          </Zoom>

        <span  className="plate-img down-20 slide" ><img src={web} alt="" /></span>
      </div>
    </div>
    <span  className="plate-img down-20 slide" ><img src={element} alt="" /></span>
  </div>
  
  <div className="my-mother centered-align h-30 bg-color-code-2" >
    <div className="my-col-10 off-1 down-" >
      <div className="gap-elts centered-align my-mother " >
        <div className="my-col-2"><span className="px12 ubuntuMedium black" >Trusted By <br />Great Startups </span></div>
        <div className="my-col-10" >
          <TrustedBy/>
        </div>
      </div>
    </div>
  </div>

  <div className="my-mother my-bottom-50 bg-gad" >
    <div className="my-col-8 off-2 down-15" >
      <div className="my-mother gap-elements">
        <div className="img-container-2 my-col-4" > <div className="bg-overlay" ></div> <img src="https://img.freepik.com/premium-photo/young-black-businessman-suit-sitting-staircase-while-using-his-laptop-work_672594-2788.jpg?ga=GA1.1.1911375869.1733410522&semt=ais_hybrid" alt="" /> </div>
        <div className="my-col-7 down-10 mg-5" >
          <div className="my-container down-10" >
          <div className="my-mother top-10 " >
         <div className="plate-img p-r top-5 " ><img className="fa-spi scale-8" src={circle} alt="" /></div>
        </div>
          <span className="px25 my-mother down-2 ubuntuMedium black" >Comprehensive IT & Digital Marketing Solutions.</span>
          <div className="my-mother down-2" >
            <span className="px10 ubuntuLight faded-2" >We are your trusted partner for comprehensive SEO and IT solutions. With our proven expertise and innovative strategies the digital landscape.</span>
          </div> 
          <div className="my-mother gap-elements down-3" >
           <a href="" className="rad-30 px9 b-shadow ubuntuBold white bg-yellow my-btn-sm " >Learn More<span className="icons bg-white mg-10 px8" ><i className="fas black deg-45 fa-arrow-up" ></i></span> </a>
          </div>
          </div>
        </div>
        <div className="img-container-2 down-20 my-col-3 " >
          <div className="bg-overlay" ></div>
          <img src="https://img.freepik.com/free-photo/healthy-lifestyle-sustained-home_23-2149362436.jpg?ga=GA1.1.1911375869.1733410522&semt=ais_hybrid" alt="" /></div>
      </div>
    </div>
  </div>  



  <div className="my-mother my-bottom-50" >
    <div className="my-col-8 off-2 down-5" >
      <div className="my-col-8 off-2 down-5 centered">
          <span className="px25 ubuntuMedium black" >Popular IT Services We Offer
          To Build Your Business</span>
          <div className="my-mother down-3" > <span className="px10 faded-2 ubuntuLight" >Our expert team specializes in delivering tailored solutions designed to elevate
          your brand and drive measurable results.</span> </div>
      </div>
      <div className="my-mother centered-align gap-elements my-b-shadw down-5" >
        <Zoom>
        <div className="my-col-3 rad-10 my-b-shadow h-200 rotate card-hover bg-s1 my-bottom-50" >
          <div className="my-container centered down-5" >
            <div><span className="px10 ubuntuBold" >Website Development</span></div>
            <div className="my-mother down-5 center-content centered" ><span className="plate-img p-r" ><img src={webDev} alt="" /></span></div>
            <div className="my-mother down-2" ><span className="px9 ubuntuLight">Make a lasting impression with a professionally designed and user-friendly website. </span></div>
          </div>
        </div>
        </Zoom>
        <Zoom>
        <div className="my-col-3 rad-10 my-b-shadow h-200 card-hover bg-s2 my-bottom-50" >
          <div className="my-container centered down-5" >
            <div><span className="px10 ubuntuBold" >Mobile Apps & Softwares</span></div>
            <div className="my-mother down-5 center-content centered" ><span className="plate-img p-r" ><img src={app} alt="" /></span></div>
            <div className="my-mother down-2" ><span className="px9 ubuntuLight">Build your startup with professionally designed and user-friendly Apps. We optimize your Apps to rank higher. </span></div>
          </div>
        </div>
        </Zoom>
        <Zoom>
        <div className="my-col-3 rad-10 my-b-shadow h-200 card-hover bg-s3 my-bottom-50" >
          <div className="my-container centered down-5" >
            <div><span className="px10 ubuntuBold" >Social Media Marketing</span></div>
            <div className="my-mother down-5 center-content centered" ><span className="plate-img p-r" ><img src={soci} alt="" /></span></div>
            <div className="my-mother down-2" ><span className="px9 ubuntuLight">Build a strong brand presence and engage with your audience on social media platforms. </span></div>
          </div>
        </div>
        </Zoom>
        <Zoom>
        <div className="my-col-3 rad-10 my-b-shadow h-200 card-hover bg-s4 my-bottom-50" >
          <div className="my-container centered down-5" >
            <div><span className="px10 ubuntuBold" >Search Engine Optimization </span></div>
            <div className="my-mother down-5 center-content centered" ><span className="plate-img p-r" ><img src={seo} alt="" /></span></div>
            <div className="my-mother down-2" ><span className="px9 ubuntuLight">Enhance your online visibility & drive organic traffic with our advanced SEO techniques.</span></div>
          </div>
        </div>
  </Zoom>

      </div>
    </div>
  </div>



  <div className="my-mother my-bottom-50" >
    <div className="my-col-8 off-2 down-10 centered">
      <span className="px25 ubuntuMedium black" >Tailored Solutions, Proven Results,
      <br /> And Exceptional Service</span>
      <div className="my-col-8 off-2 down-3" > <span className="px10 faded-2 ubuntuLight" >We pride ourselves on delivering a value proposition that goes beyond expectations. Our
      approach is centered on understanding your business inside.</span> </div>

      <div className="my-mother gap-elements down-3 space-50" >
      <div className="my-col-7 down-5" >
        <div className="img-container-3 rad-30 bg-color-code-1" >
          <div className="bg-overlay left rad-30" >
            <div className="my-col-10 off-1 down-20" > 
              <span className="px10 white ubuntuRegular" >Our Values</span>
              <div className="my-mother down-3" >
                <span className="ubuntuBold px15 white" > Explore Our Unique Value Proposition & How We Drive Business Growth</span>
              </div>
              </div>
          </div>
          <img src="https://img.freepik.com/premium-photo/people-analyzing-different-signs-symbols_53876-2404.jpg?ga=GA1.1.1911375869.1733410522&semt=ais_hybrid" alt="" /></div>
      </div>
      <div className="my-col-5" >
        <div className="my-col-12 bg-s2 my-bottom-50 rad-10 down-5">
          <div className="my-container left down-5" >
            <div > <span className="px9 ubuntuMedium color-code-1" >Our Vision</span> </div>
            <div className="down-1" > <span className="px10 ubuntuBold" >We strive to be more than just a service provider; we aim to be a trusted Comapany.
           </span> </div> 
          </div>
        </div>
      </div>
    </div>

    </div>
  </div>


  <div className="my-mother down-5 my-bottom-50" >
    <div className="my-col-8 off-2 down-5 centered">
      <span className="px25 ubuntuMedium black" >Latest IT & Digital Marketing News</span>
      <div className="my-mother down-3" > <span className="px10 faded-2 ubuntuLight" >Stay up-to-date with the latest trends and developments in the IT & digital marketing space.</span> </div>
    <div className="my-mother gap-elements down-5 space-50" >
      <div className="my-col-7 down-5" >
        <div className="img-container-heros bg-color-code-1" ><img src="" alt="" /></div>
      </div>
    </div>
    </div>
  </div>

  </>);
}
 
export default Home;
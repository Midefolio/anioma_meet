import MyFooter from "../component/footer";
import NavBar from "../component/nav";


const About = () => {
  return (
    <>
      <NavBar active={'about'} />
      <div className="my-container xs-12 md-container xs-down-5vh d-col-1">
        <div className="centered xs-12 ">
          <div className="my-col-8 xs-12 off-2 px20 xs-px20 down-2 black poppings-Bold">
            <span>We Are Revolutionizing Ranching, Empowering Communities and Securing Tomorrow.</span>
          </div>
          <div className="my-col-8 xs-container xs-down-5 md-down-5 off-2 down-5">
            <span className="px13 xs-px15 faded poppings-Light">
            We are more than a ranch; we are a movement committed to innovation, sustainability, and harmony.
            </span>
          </div>
        </div>
      </div>
      <div className="my-container bg-landing-2 xs-container down-8 xs-down-10 md-down-5 rad-30">
      </div>
      {/* About Us */}
      <div className="my-container xs-centered xs-down-10 md-down-10 xs-container md-container my-bottom-50 down-10">
        <div className="my-col-12 px20 down-2 black poppings-Bold">
          <span className="black xs-px20  ">Our Company</span>
        </div>
        <div className="my-mother down-2 xs-down-3">
          <span className="faded px13 xs-px15 Poppings-Regular">
          At Anioma Ranch and Produce Ltd, we are transforming the face of livestock management in Nigeria and beyond. Our mission is to redefine ranching by combining cutting-edge technology with eco-friendly practices to produce premium organic meats and dairy products. Specializing in the ethical rearing of cattle, goats, and pigs, we prioritize sustainable pasture management and integrated farming techniques that promote environmental conservation, community development, and food security.
          We are more than a ranch; we are a movement committed to innovation, sustainability, and harmony.
          </span>
        </div>
      </div>
      <div className="my-container xs-centered xs-down-10 md-down-10 xs-container md-container my-bottom-50 down-3">
        <div className="my-col-12 px20 down-2 black poppings-Bold">
          <span className="black xs-px20  ">Our Vision</span>
        </div>
        <div className="my-mother down-2 xs-down-3">
          <span className="faded px13 xs-px15 Poppings-Regular">
          To lead a global revolution in sustainable livestock management, becoming a benchmark for innovation, community impact, and organic excellence.
          </span>
        </div>
      </div>
      <div className="my-container xs-centered xs-down-10 md-down-10 xs-container md-container my-bottom-50 down-3">
        <div className="my-col-12 px20 down-2 black poppings-Bold">
          <span className="black xs-px20  ">Our Mision</span>
        </div>
        <div className="my-mother down-2 xs-down-3">
          <span className="faded px13 xs-px15 Poppings-Regular">
          To deliver high-quality organic meat and dairy while empowering communities, promoting peaceful alternatives to open grazing, and ensuring food security for future generations.
          </span>
        </div>
      </div>
      <div className="my-container xs-centered my-bottom-50 down-3">
        <div className="my-col-12 px20 down-2 black poppings-Bold">
          <span className="black xs-px20">Meet Our Team</span>
        </div>
        <div className="my-col-12 xs-container xs-down-3 down-2 ">
        <div className="my-containr xs-centered xs-down-10 md-down-10 xs-container md-container my-bottom-50 down-3">
        <div className="my-col-12 px13 xs-px13 down-2 black poppings-Bold">
          <span className="black xs-px20  ">1. Chukzy Edemenya (CISA, AWS, CISM, CISSP, PMP)</span>
        </div>
        <div className="my-mother down-1 xs-down-3">
          <span className="faded px13 xs-px15 Poppings-Regular">
          Group Chief Executive Officer, Anioma Holdings.
          </span>
        </div>
      </div>
          {/* <span className="faded px13 xs-px15 Poppings-Regular">
            United Capital plc is a leading pan-african financial services
            institution focused on leveraging technology to empower businesses,
            individuals and governments with excellent financial services
          </span> */}
         
        </div>
        <div className="my-col-12 xs-container xs-down-3 down-2 ">
        <div className="my-containr xs-centered xs-down-10 md-down-10 xs-container md-container my-bottom-50 down-3">
        <div className="my-col-12 px13 xs-px13 down-2 black poppings-Bold">
          <span className="black xs-px20  ">2. Dr. Ishioma Opia-Edemenya (PMP)</span>
        </div>
        <div className="my-mother down-1 xs-down-3">
          <span className="faded px13 xs-px15 Poppings-Regular">
          Managing Director.
          </span>
        </div>
      </div>   
        </div>


        <div className="my-col-12 xs-container xs-down-3 down-2 ">
        <div className="my-containr xs-centered xs-down-10 md-down-10 xs-container md-container my-bottom-50 down-3">
        <div className="my-col-12 px13 xs-px13 down-2 black poppings-Bold">
          <span className="black xs-px20  ">3.  Kenny Ogbuta</span>
        </div>
        <div className="my-mother down-1 xs-down-3">
          <span className="faded px13 xs-px15 Poppings-Regular">
          Operations  Manager .
          </span>
        </div>
      </div>
   
         
        </div>
      </div>
      <div className="my-mother d-col-1 xs-down-10 bg-color-code-2">
        <MyFooter />
      </div>
    </>
  );
};

export default About;

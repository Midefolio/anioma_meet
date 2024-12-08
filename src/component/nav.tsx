/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const NavBar = ({active}:any) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [navBgWhite, setNavBgWhite] = useState(false);

  // Add scroll event listener to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavBgWhite(true); // Scroll down more than 50px, set background to white
      } else {
        setNavBgWhite(false); // If scrolled back to top, remove background
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

    return ( <>

    <nav className={`centered-align ${navBgWhite && "bg-white tr-5"}`} >
     <div className="my-col-10 " >
     <div className="my-col-2"> <span className="ubuntuBold faded-2" >WillmaestroIt</span> </div>
      <div className="my-col-7 down-1 gap-elements center-content space-50">
        <a href="" className="px9 black ubuntuMedium" >Home</a>
        <a href="" className="px9 black ubuntuMedium" >About</a>
        <a href="" className="px9 black ubuntuMedium" >Blog</a>
        <a href="" className="px9 black ubuntuMedium" >Services <i className="fas fa-angle-down mg-5"></i> </a>
        <a href="" className="px9 black ubuntuMedium" >Contact Us</a>
      </div>
      <div className="my-col-3  down-1 right">
         <a href="" className="rad-30 card-hover px9 white ubuntuBold bg-color-code-1 my-btn-sm">Free Consultation <span className="icons bg-white mg-10 px8" ><i className="fas black deg-45 fa-arrow-up" ></i></span> </a>
      </div>
     </div>
    </nav>   

     
      </> );


}
 
export default NavBar;
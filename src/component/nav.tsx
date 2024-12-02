/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  
  const Menu = [
    {menu:"Home", url:"/"},
    {menu:"About Us",  url:"#about"},
    {menu:"Services",  url:"#services"},
    {menu:"Contact Us", url:"/contact_us"},
    {menu:"Our Team", url:"/team"},
  ]


    return ( <>
   
     <nav className="gap-elemnts my-b-shadow hidden-xs hidden-md centered-align">
      <div className="my-container gap-20 centered-align">
      <div className="my-col-4 gap-elements centered-align" onClick={()=> {navigate('/')}}>
       <span className="team-icons c-pointer"><img src="https://img.icons8.com/?size=100&id=1288&format=png&color=FA5252" alt="" /></span>
        <div className="xs-px15 c-pointer px10 down- xs-down-2 interBold">
          Anioma <span className="faded-sol">Ranch</span>
          <div className="px8 black InterSemiBold">and Produce LTD</div>
        </div>
      </div>
      <div className="centered-elements centered gap-elements space-50 down- centered-align">
        <a href="#home" className="px10 pd-10 black InterRegular" onClick={()=> {navigate('/')}}>Home</a>
        <a href="#about" className="px10 black pd-10 InterRegular" onClick={()=> {navigate('/#about')}}>About Us</a>
        <a href="#services" className="px10 black pd-10 InterRegular">Services</a>
        <button className="px10 pd-10 InterRegular" onClick={()=> {navigate('/product')}}>Our Team</button>
      </div>
      <div>
        <a href="#contact" className="px10 black interBold gap-elements centered-align my-btn-sm bg-red white rad-10"> <i className="fas fa-phone"></i> Contact Us</a>

      </div>
      </div>
     </nav> 
     
     <div className="hidden-ls mobile-nav centered-align">
       <div className="xs-container xs-down-2 gap-20 md-container centered-align">
         <div className="gap-elemnts my-mother centered-align">
           <span className="icons"><img src="https://img.icons8.com/?size=100&id=1288&format=png&color=FA5252" alt="" /></span>
           <span className="xs-px15 xs-down-2 InterSemiBold">Anioma<span className="faded-sol">Ranch</span></span>
         </div>
         <div className="gap-elements">
            <span className="pd-10 xs-px20"><i className="fas fa-search"></i></span>
            <span className="bg-red pd-10 centered-align" onClick={()=> {setOpen(true)}}><i className="fas fa-bars white xs-px20"></i></span></div>
       </div>
     </div>


     <div className="xs-container hidden-ls centered-align xs-down-12vh">
        <div className="input gap-elements black interBold bd-code-1 xs-down-3 flex xs-px15 unset-indent">
            <span className="xs-px15 px20"><i className="fas fa-phone"></i></span>
            Contact Us 
        </div>
     </div>   
     
     <div className={`mobile-nav-open ${open && "open"}`}>
       <div className="xs-container xs-down-5">
         <div className="gap-20">
          <div className="gap-elemnts my-mother centered-align">
            <span className="icons"><img src="https://img.icons8.com/?size=100&id=1288&format=png&color=FA5252" alt="" /></span>
            <span className="xs-px15 xs-down-2 white InterSemiBold">Anioma<span className="faded-sol interBold">Ranch</span></span>
           </div>
            <span className="pd-10"  onClick={()=> {setOpen(false)}}><i className="fas  xs-px20 fa-times white"></i></span>
         </div>
         <div className="my-mother xs-down-5">
           {Menu?.map((i, index:any) => (
            <a href={i.url} className="bd-bottom xs-down-5  my-bottom-20 my-mother centered-align" onClick={()=> {setOpen(false); navigate(i.url)}} key={index}>
              <a className="xs-px15 white InterSemiBold">{i.menu}</a>
            </a>
           ))}
         </div>
       </div>
     </div>
     
      </> );


}
 
export default NavBar;
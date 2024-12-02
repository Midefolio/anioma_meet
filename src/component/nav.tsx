/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const NavBar = ({active}:any) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  
  const Menu = [
    {menu:"Home", url:"/"},
    {menu:"About Us",  url:"#about"},
    {menu:"Services",  url:"#services"},
    {menu:"Contact Us", url:"/contact_us"},
    {menu:"Our Team", url:"/about_us"},
  ]


    return ( <>
   
     <nav className="gap-elemnts my-b-shadow hidden-xs hidden-md centered-align">
      <div className="my-container gap-20 centered-align">
      <div className="my-col-4 gap-elements centered-align" onClick={()=> {navigate('/')}}>
       <span className="team-icons c-pointer"><img src="https://img.icons8.com/?size=100&id=1288&format=png&color=FA5252" alt="" /></span>
        <div className="xs-px15 c-pointer px10 down- xs-down-2 poppings-Bold">
          Anioma <span className="faded-sol">Ranch</span>
          <div className="px8 black InterSemiBold">and Produce LTD</div>
        </div>
      </div>
      <div className="centered-elements centered gap-elements space-50 down- centered-align">
        <a href="#home" className={` ${active == 'home' && 'active-side '} px10 pd-10 black InterRegular`} onClick={()=> {navigate('/')}}>Home</a>
        <a className={` ${active == 'about' && 'active-side '} px10 pd-10 c-pointer black InterRegular`} onClick={()=> {navigate('/about_us')}}>About Us</a>
        <a onClick={()=> {navigate('/#services')}} className={` ${active == 'services' && 'active-side '} px10 c-pointer pd-10 black InterRegular`}>Services</a>
        <a className={` ${active == 'team' && 'active-side '} px10 pd-10 black InterRegular`} onClick={()=> {navigate('/about_us')}}>Our Team</a>
      </div>
      <div>
        <a onClick={()=> {navigate('/contact_us')}} className="px10 black c-pointer interBold gap-elements centered-align my-btn-sm bg-red white rad-10"> <i className="fas fa-phone"></i> Contact Us</a>

      </div>
      </div>
     </nav> 
     
     <div className="hidden-ls mobile-nav centered-align">
       <div className="xs-container xs-down-2 gap-20 md-container centered-align">
         <div className="gap-elemnts my-mother centered-align" onClick={()=> {navigate("/")}} >
           <span className="icons"><img src="https://img.icons8.com/?size=100&id=1288&format=png&color=FA5252" alt="" /></span>
           <span className="xs-px15 xs-down-2 poppings-Bold">Anioma<span className="faded-sol">Ranch</span></span>
         </div>
         <div className="gap-elements">
            {/* <span className="pd-10 xs-px20"><i className="fas fa-search"></i></span> */}
            <span className="bg-red pd-10 centered-align" onClick={()=> {setOpen(true)}}><i className="fas fa-bars white xs-px20"></i></span></div>
       </div>
     </div>


     <div className="xs-container hidden-ls centered-align xs-down-12vh">
        <div onClick={()=> {navigate("/contact_us")}} className="input gap-elements black interBold bd-code-1 xs-down-3 flex xs-px15 unset-indent">
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
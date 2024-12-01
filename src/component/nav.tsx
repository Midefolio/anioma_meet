import { useState } from "react";
import { BsPhoneFlip } from "react-icons/bs";
const NavBar = () => {
  const [open, setOpen] = useState(false)
  
  const Menu = [
    {menu:"Create Account"},
    {menu:"Credit Cards"},
    {menu:"Loans"},
    {menu:"Investing"},
    {menu:"Login"},
    {menu:"About Us"},
  ]


    return ( <>
     <div className="hidden-ls mobile-nav centered-align">
       <div className="xs-container xs-down-2 gap-20 md-container centered-align">
         <div className="gap-elemnts my-mother centered-align">
           <span className="icons"><img src="https://img.icons8.com/?size=100&id=112579&format=png&color=FA5252" alt="" /></span>
           <span className="xs-px15 xs-down-2 InterSemiBold">Sc<span className="">hel</span>dth<span className="fade-2">Bank</span></span>
         </div>
         <div className="gap-elements">
            <span className="pd-10 xs-px20"><i className="fas fa-search"></i></span>
            <span className="bg-red pd-10 centered-align" onClick={()=> {setOpen(true)}}><i className="fas fa-bars white xs-px20"></i></span></div>
       </div>
     </div>
     <div className="xs-container centered-align xs-down-12vh">
        <div className="input gap-elements black bd-code-1 xs-down-3 flex xs-px15 unset-indent">
            <span className="xs-px15"><BsPhoneFlip/></span>
            Online Banking
        </div>
     </div>   
     
     <div className={`mobile-nav-open ${open && "open"}`}>
       <div className="xs-container xs-down-5">
         <div className="gap-20">
          <div className="gap-elemnts my-mother centered-align">
            <span className="icons"><img src="https://img.icons8.com/?size=100&id=112579&format=png&color=FA5252" alt="" /></span>
            <span className="xs-px15 xs-down-2 white InterSemiBold">Sc<span className="">hel</span>dth<span className="fade-2">Bank</span></span>
           </div>
            <span className="pd-10"  onClick={()=> {setOpen(false)}}><i className="fas  xs-px20 fa-times white"></i></span>
         </div>
         <div className="my-mother xs-down-5">
           {Menu?.map((i, index) => (
            <div className="bd-bottom xs-down-5  my-bottom-20 my-mother centered-align">
              <span className="xs-px13 white InterSemiBold">{i.menu}</span>
            </div>
           ))}
         </div>
       </div>
     </div>
     
      </> );


}
 
export default NavBar;
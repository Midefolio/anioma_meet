import { useState } from "react";
import { isSending, notifyError } from "./utils/useutils";
import { makeRequest } from "./hook/useApi";
import { loginApi } from "./data/apis";

 interface params {
  email:string,
  password:string
}

const Home = () => {
 const [params, setParams] = useState<params>({email:"", password:""}); 
 const [seePass, setSeePass] = useState(false)

 const login = async () => {
   if(!params.email){
    return notifyError("email is required")
   }
   if(!params.password){
    return notifyError("password is required")
   }
  isSending(true, "Loggin you In...");
  const cb =()=> {isSending(false, "")}
  const res = await makeRequest("POST", loginApi, params, cb, null);
  if(res){
    localStorage.setItem('fla-crm', res?.data)
    window.location.href = '/';
  }
 }



  return ( <>
    <div className="my-col-6">
      <div className="img-container"><img src="https://res.cloudinary.com/dv5skyhvl/image/upload/v1728291595/gradient-crm-illustration_23-2149379177-removebg-preview_gcwst3.png" alt="" /></div>
    </div>
    <div className="my-col-6 h-100-vh center-content">
      <div className="my-col-6 off-1">
        <div className="p-absolute top-30 interExtraBold px20">FutureLivingAfrica <span className="color-code-1">CRM</span></div>
       <div className="my-mother">
        <div>
          <span className="interExtraBold px14">Login</span>
          <span className="my-mother down-1 px9 InterThin">Comprehensive CRM for FLA</span>
        </div>
       </div>
       <div className="my-mother down-3 v-gap-20">
        <div className="gap-elements bg-color-code-2 rad-10 centered-align fla-border-1">
          <input autoComplete="off" value={params.email} onChange={(e) => {setParams(prev => ({...prev, email:e.target.value}))}} type="text" className="InterLight px9 input alice" placeholder="Email" />
          <span className="pd-10"><i className="fas fa-envelope"></i></span>
        </div>
        <div className="gap-elements bg-color-code-2 rad-10 centered-align fla-border-1">
          <input autoComplete="off"  value={params.password} onChange={(e) => {setParams(prev => ({...prev, password:e.target.value}))}} type={seePass? "text" : "password"} className="InterLight px9 input alice" placeholder="password" />
           {seePass? <span className="pd-10" onClick={()=> {setSeePass(false)}}><i className="fas fa-eye-slash"></i></span>:  <span  onClick={()=> {setSeePass(true)}} className="pd-10"><i className="fas fa-eye"></i></span>}
         
        </div>
         <div><button onClick={login} className="input flex bg-color-code-1 rad-10 alice interBold">Login</button></div>
         <div><span className="px9">forgotten password ?</span></div>
      </div>
      </div>
    </div>
  
  </> );
}
 
export default Home;

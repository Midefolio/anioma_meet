/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CiSearch } from "react-icons/ci";
import { LuPanelLeftClose } from "react-icons/lu";
import { AiOutlineCreditCard, AiOutlineCustomerService, AiOutlineDashboard, AiOutlineLink, AiOutlineLogout, AiOutlinePayCircle, AiOutlineSetting, AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { sideBar } from "../data/dashboard_layout";

const CrmLayouts = ({active}:any) => {
    const router = useNavigate();

    const logout = () => {
       const c =  window.confirm('Are you sure to logout');
       if(!c) {return}
       localStorage.removeItem('fla-crm');
       window.location.href = '/';
    };


    return ( <>
     <div className="my-col-2 h-100-vh p-fixed my-bottom-50">
        <div className="my-col-10 off-1 d-col-1">
            <div className="my-mother centered-align gap-20">
                <span className="icons bg-color-code-1"></span>
                <span className="px10 interExtraBold alice">Fla-CRM</span>
                <span className="px13 c-pointer"><LuPanelLeftClose className="down-1"/></span>
            </div>
            <div className="my-mother gap-elements centered-align rad-30 bg-color-code-2 d-col-2">
                <input placeholder="Search here..." type="text" className="InterLight rad-30 my-col-10 px8 alice input"/>
                <div className="my-col-1 pd-10 centered-align "><CiSearch className="px13"/></div>
            </div>
            <div className="my-mother d-col-2"><span className="alice InterLight px9">Main Menu</span></div>
            <div className="my-mother v-gap-20 gap-10 d-col-2">
                {sideBar?.map((i, index) => (
                    <div onClick={()=> { i.menu == 'Logout'? logout() : router(i.url)}} key={index} className={`${active == i?.menu && "bg-color-code-1 black InterSemiBold"} c-pointer dash-menu my-mother h-20 rad-30 px9 InterLight centered-align gap-elements`}>
                        {i.menu == "Dashboard" && <AiOutlineDashboard className="pd-10-exr color-code-1" />}
                        {i.menu == "Customers" && <AiOutlineUserAdd className="pd-10-exr color-code-1" />}
                        {i.menu == "Meetings" && <AiOutlineCustomerService className="pd-10-exr color-code-1" />}
                        {i.menu == "Weblinks" && <AiOutlineLink className="pd-10-exr color-code-1" />}
                        {i.menu == "Invoice" && <AiOutlineCreditCard className="pd-10-exr color-code-1" />}
                        {i.menu == "Receipts" && <AiOutlinePayCircle className="pd-10-exr color-code-1" />}
                        {i.menu == "Settings" && <AiOutlineSetting className="pd-10-exr color-code-1" />}
                        {i.menu == "Logout" && <AiOutlineLogout className="pd-10-exr color-code-1" />}

                        <span className="interBold">{i?.menu}</span>
                       
                    </div>
                ))}
            </div>
            {/* <div className="my-mother my-bottom-20  my-b-shadow d-col-1 bg-color-code-2 rad-20">
                <div className="my-col-10 off-1 centered-allign d-col-1">
                    <div className="InterSemiBold gap-20 color-code-1 px8">
                        <span>Incoming Events</span>
                        <span className="pd-10 rad-30 bg-color-code-3 top-1 c-pointer"><i className="fas fa-close"></i></span>
                    </div>
                    <div className="down-1 px9 interBold">Meeting With Ayo</div>
                    <span className="InterLight px8">10:00am - 10:30am</span>
                    <div className="gap-20 down-2 likes-container">
                        <span className="rad-30 c-pointer shadow color-code-1 bg-color-code-3 px8 InterSemiBold pd-10">Cancel</span>
                        <span className="rad-30 c-pointer shadow color-code-1 bg-color-code-3 px8 InterSemiBold pd-10">Mark as done</span>
                    </div>
                </div>
            </div> */}
        </div>
     </div>
    </> );
}
 
export default CrmLayouts;
/* eslint-disable @typescript-eslint/no-unused-vars */


import { deleteLink, updateLink } from "../../data/apis";
import { makeRequest } from "../../hook/useApi";
import useUserAuthContext from "../../hook/userUserAuthContext";
import { isSending, notifySuccess } from "../../utils/useutils";
import MakeCustomer from "./add_to_customers";
import { useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LinkResponse = ({ i, setsd }: any) => {
  
    const { token, getWebLinks } = useUserAuthContext();
    const [mc, setMc] = useState<any>(null)
    const updateForm = async()=> {
      const confim = window.confirm('Are you sure to perform this action');
      if(!confim){return}
      const cd =()=> {isSending(false,"")}
      isSending(true, 'Locking...')
      const res = await makeRequest('POST', updateLink, {status:i.status? false: true, link_id:i._id}, cd, token);
      if(res){
        await getWebLinks();
        notifySuccess(`form ${i.status?"locked":"unlocked"}!`)
      }
    }

    const deleteForm = async()=> {
      const confim = window.confirm('Are you sure to perform this action');
      if(!confim){return}
      const cd =()=> {isSending(false,"")}
      isSending(true, 'Deleting...')
      const res = await makeRequest('DELETE', deleteLink, {link_id:i._id}, cd, token);
      if(res){
        await getWebLinks();
        setsd(false)
        notifySuccess(`form deleted`);
      }
    }

    return (
      <>
        <div className="my-modal bg-faded-5" onClick={()=> {setsd(false)}}>
          <div className="my-col-6 off-3 down-15 rad-20 ov-scroll-400 h-500 bg-color-code-2s my-bottom-50" onClick={(e)=> {e.stopPropagation()}}>
            <div className="my-col-10 off-1 down-8">
              <div>
                <div className="px15 alice gap-20 interBold">
                  <span>{i.title}</span>
                  <div>
                    <button onClick={updateForm} className="pd-10 bg-color-code-1 px9 InterSemiBold rad-10 alice">
                      {i.status ? <span>Lock Form <i className="fas fa-lock"></i></span> : <span>Unlock Form <i className="fas fa-lock-open"></i></span> }
                    </button>
                  </div>
                </div>
              </div>
              <div className="my-mother down-5 interBold"><span>Responses</span></div>
              <div className="my-mother v-gap-20">
                {i?.response?.map((response: any, index: number) => (
                  <div key={index} className="my-mother fla-border-1 down-2 bg-color-code-3 rad-10 pad-15">
                       {mc == index &&  <MakeCustomer i={response} setSd={setMc} />}
                    <div className="pd-10 v-gap-20 ">
                     {Object.entries(response).map(([key, value]:any, idx) => (
                      <div key={idx} className="px9 gap-elements">
                        <div className="px8 interBold">{key}:</div> 
                        <div className="px8 color-code-1 interBold">{value}</div>
                      </div>
                      ))}
                      <div className="my-mother down-2 my-bottom-10"><button onClick={()=> {setMc(index)}} className="pd-10 px8 bg-color-code-2s rad-10 color-code-1">Make Customer</button></div>
                   </div>
                  </div>
                ))}
              </div>
            <div className="my-mother down-10"><button className="red bg-color-code-5 my-btn-sm rad-10 interBold px9" onClick={deleteForm}>Delete Form</button></div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default LinkResponse;
  
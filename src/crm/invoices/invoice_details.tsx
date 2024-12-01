/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */


import { deleteInvoices } from "../../data/apis";
import { makeRequest } from "../../hook/useApi";
import useUserAuthContext from "../../hook/userUserAuthContext";
import { formatDateToOrdinalString, formatNumber, isSending, notifySuccess } from "../../utils/useutils";


const InvoiceDetails = ({setSd, getInvoices, i}:any) => {
  const { token } = useUserAuthContext();

  const deleteInvoice = async () => {
    const confirm = window.confirm("are you sure you want to delete this invoice ?");
    if(!confirm) {return}
    isSending(true, "deleting...");
    const cb = () => {
      isSending(false, "");
    };
    const res = await makeRequest("DELETE", deleteInvoices, {_id:i?._id}, cb, token);
    if (res) {
      await getInvoices()
      setSd(null);
      notifySuccess("Deleted!")
    }
  };


  return (
    <>
      <div className="my-modal" onClick={()=> {setSd(null)}}>
        <div onClick={(e)=> {e.stopPropagation()}} className="my-col-6 off-3 h-full-scroll my-bottom-10 left rad-30 bg-color-code-2 down-2">
          <div className="my-col-10 off-1 down-5">
            <div><span className="px15 interBold">Invoice Details</span></div>
            <div className="my-mother down-1"><span className="px9 InterLight">{i.description}</span></div>

            <div className="my-mother down-5">
              <span className="interBold px9 alice">Narration</span>
              <div className="bg-color-code-3 fla-border-1 my-mother down-1 rad-20">
              <input
                  type="text"
                  value={i.narration}
                  readOnly
                  name="description"
                  className="input InterLight px9 alice"
                />
              </div>
            </div>

            <div className="my-mother down-2">
              <span className="interBold px9 alice">Total Amount</span>
              <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                <input
                  type="text"
                  value={formatNumber(i.totalAmount)}
                  readOnly
                  name="description"
                  className="input InterLight px9 alice"
                />
              </div>
            </div>
            <div className="my-mother down-2">
              <span className="interBold px9 alice">Payment Type</span>
              <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                <input
                  type="text"
                  value={i.payment_type}
                  readOnly
                  name="description"
                  className="input InterLight px9 alice"
                />
              </div>
            </div>
            <div className="my-mother down-2">
              <span className="interBold px9 alice">Instalmental Payment</span>
              <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                <input
                  type="text"
                  value={formatNumber(i.installmentAmount)}
                  readOnly
                  name="description"
                  className="input InterLight px9 alice"
                />
              </div>
            </div>
            <div className="my-mother down-2">
              <span className="interBold px9 alice">Payment Interval</span>
              <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                <input
                  type="text"
                  value={i.interval}
                  readOnly
                  name="description"
                  className="input InterLight px9 alice"
                />
              </div>
            </div>

            <div className="my-mother v-gap-20 down-5">
            {i?.installments.length > 0 && <>
              {i?.installments.map((s:any, index:number) => (
                <div className="gap-20 space-50 bd-bottom my-bottom-10 centered-align" key={index}>
                  <div>{index+1}</div>
                 <div>
                    <div className="interBold px8">Amount</div>
                    <div className="color-code-1 px8 down-1">{i.currency}{formatNumber(s.amountDue)}</div>
                 </div>
                 <div>
                    <div className="interBold px8" >Due Date</div>
                    <div className="color-code-1 px8 down-1" >{formatDateToOrdinalString(s.dueDate)}</div>
                 </div>
                 <div>
                    <div className="interBold px8" >Status</div>
                    <div className="color-code-1 px8 down-1" >{s.paid ? <span className="green pd-10 centered-align rad-20 bg-green green interBold px8">paid</span> : <span className="orange pd-5 centered-align rad-20 bg-color-code-4 interBold px8">unpaid</span>}
                     {i.overDue && <span className="red px8 InterLight">Over Due</span> }
                    </div>
                 </div>
                 <div>
                   <button className="pd-10 bg-color-code-1 rad-10 alice px9 InterLight pd-10">Make as paid</button>
                 </div>
                </div>
              ))}
            </>}
            </div>

            <div className="my-mother down-5 gap-elements">
              <button className="pd-10 px10 rad-10 InterSemiBold c-pointer bg-color-code-5 red" onClick={deleteInvoice}>Delete Invoice <i className="fas fa-trash-alt"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceDetails;

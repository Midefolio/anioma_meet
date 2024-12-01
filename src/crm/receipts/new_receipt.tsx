/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {useState } from "react";
import Select from "react-select";
import useUserAuthContext from "../../hook/userUserAuthContext";
import { isSending, notifyError, notifySuccess } from "../../utils/useutils";
import { makeRequest } from "../../hook/useApi";
import { addReceipts } from "../../data/apis";

// Utility function to format time to 12-hour format
const formatTimeTo12Hour = (time: string) => {
  const [hour, minute] = time.split(":");
  const hourNum = parseInt(hour, 10);
  const ampm = hourNum >= 12 ? "PM" : "AM";
  const formattedHour = hourNum % 12 || 12;
  return `${formattedHour}:${minute} ${ampm}`;
};

// Utility function to format date
const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "short" });
  const year = dateObj.getFullYear();
  const daySuffix = ["th", "st", "nd", "rd"][(day % 10) - 1] || "th";
  return `${day}${daySuffix} ${month}, ${year}`;
};

const NewReceipt = ({getReceipts, setNew}:any) => {
  const {customer, token} = useUserAuthContext();
  const [Receipt, setReceipt] = useState<any>({
    narration: "",
    date: "",
    currency:"₦",
    payment_method:"",
    time: "",
    recipient:"",
    customer:"",
    amount:"",
    status: true,
  });

  // Create customer options with both email and fullname
  const customerOptions = customer.map((cust: { email: any; firstName: any; lastName: any; }) => ({
    value: cust.email,
    label: `${cust.firstName} ${cust.lastName}`,
    email: cust.email,
    fullname: `${cust.firstName} ${cust.lastName}`,
  }));

  // Update Receipt data on input change
  const updateReceipt = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setReceipt((prevReceipt: any) => ({
      ...prevReceipt,
      [name]: value,
    }));
  };

  // Handle participants change to include both email and fullname
  const handleParticipantsChange = (selectedOptions: any) => {
    setReceipt((prevReceipt: any) => ({
      ...prevReceipt,
      recipient: selectedOptions.email, customer:selectedOptions.fullname
    }));
  };

  // Styling for the custom select component
  const customSelectStyles = {
    container: (base: any) => ({
      ...base,
      width: "100%",
    }),
    control: (base: any) => ({
      ...base,
      border: "none",
      boxShadow: "none",
      backgroundColor: "transparent",
    }),
    placeholder: (base: any) => ({
      ...base,
      color: "#999",
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      color: "#999",
    }),
  };

  const formatPrice = (inputValue: any) => {
    const formattedValue = inputValue?.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedValue;
  };


  const handleChange = (event:any) => {
    const inputValue = event.target.value;
    setReceipt((prev: any) => ({
      ...prev,
      amount: formatPrice(inputValue)
    }))
  };

  const sendReceipt = async () => {
    if (!Receipt.date.trim() || !Receipt.time.trim() || !Receipt.narration.trim()) {
      notifyError("Date, Time, and Narration are required fields.");
      return;
    }
    if (!Receipt.recipient.trim()) {
      notifyError("Please add customer.");
      return;
    }

    // Apply the date and time formatting
    const formattedDate = formatDate(Receipt.date);
    const formattedTime = formatTimeTo12Hour(Receipt.time);

    const ReceiptData = {
      ...Receipt,
      date: formattedDate,
      time: formattedTime,
    };

    isSending(true, "sending...");
    const cb = () => {
      isSending(false, "");
    };
    const res = await makeRequest("POST", addReceipts, ReceiptData, cb, token);

    if (res) {
      // Handle successful response here
      await getReceipts();
      setNew(false);
      notifySuccess('Receipt Sent!')
    }
  };


  return (
    <>
      <div className="my-modal" onClick={()=> {setNew(false)}}>
        <div onClick={(e)=> {e.stopPropagation()}} className="my-col-6 off-3 down-15 my-bottom-50 left rad-30 bg-color-code-2">
          <div className="my-col-10 off-1 down-5">
            <div><span className="px15 interBold">Send Receipt</span></div>
            {/* <div className="my-mother down-1"><span className="px9 InterLight">.</span></div> */}

            <div className="my-mother down-5">
              <span className="interBold px9 alice">Narration</span>
              <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                <input
                  type="narration"
                  value={Receipt.narration}
                  name="narration"
                  placeholder="Payment for..."
                  onChange={updateReceipt}
                  className="input InterLight px9 alice"
                />
              </div>
            </div>


            <div className="my-mother gap-elements down-2">
              <div className="my-col-2">
                <span className="interBold px9 alice">Currency</span>
                <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                  <select
                    name="currency"
                    value={Receipt.currency}
                    onChange={updateReceipt}
                    className="input InterLight px9 alice"
                  >
                   <option value="₦">₦</option>
                   <option value="$">$</option>
                  </select>
                </div>
              </div>
              <div className="my-col-3">
                <span className="interBold px9 alice">Amount Paid</span>
                <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                  <input
                    type="amount"
                    name="amount"
                    value={Receipt.amount}
                    onChange={handleChange}
                    className="input InterLight px9 alice"
                  />
                </div>
              </div>
              <div className="my-col-3">
                <span className="interBold px9 alice">Payment Date</span>
                <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                  <input
                    type="date"
                    name="date"
                    value={Receipt.date}
                    onChange={updateReceipt}
                    className="input InterLight px9 alice"
                  />
                </div>
              </div>
              <div className="my-col-3">
                <span className="interBold px9 alice">Payment Time</span>
                <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                  <input
                    type="time"
                    name="time"
                    value={Receipt.time}
                    onChange={updateReceipt}
                    className="input InterLight px9 alice"
                  />
                </div>
              </div>
            </div>

            <div className="my-mother down-2">
              <span className="interBold px9 alice">Send Receipt to: </span>
              <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 alice rad-20">
                <Select
                //   isMulti
                  options={customerOptions}
                  onChange={handleParticipantsChange}
                  styles={customSelectStyles}
                  placeholder="Select participants..."
                />
              </div>
            </div>

            <div className="my-mother down-5 gap-elements">
              <button className="my-btn-sm rad-10 bg-color-code-1 alice interBold px9" onClick={sendReceipt}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewReceipt;

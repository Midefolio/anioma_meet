/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import Select from "react-select";
import useUserAuthContext from "../../hook/userUserAuthContext";
import { isSending, notifyError, notifySuccess } from "../../utils/useutils";
import { makeRequest } from "../../hook/useApi";
import { addInvoices } from "../../data/apis";

// Utility function to format date
const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "short" });
  const year = dateObj.getFullYear();
  const daySuffix = ["th", "st", "nd", "rd"][(day % 10) - 1] || "th";
  return `${day}${daySuffix} ${month}, ${year}`;
};

// Define Invoice type
interface Invoice {
  narration: string;
  currency: string;
  totalAmount: number;
  installmentAmount: number;
  interval: number;
  type: string; // "installmental" or "one-time"
  firstPaymentDueDate: string; // Store as a string for input
  recipient: string; // email
  customer: string; // full name
  totalAmountString:string;
  totalInstalString:string;
}

const NewInvoice = ({ getInvoices, setNew }: any) => {
  const {customer, token} = useUserAuthContext();
  const [Invoice, setInvoice] = useState<Invoice>({
    narration: "",
    currency: "₦",
    totalAmount: 0,
    installmentAmount: 0,
    interval: 1,
    type: "One-time",
    firstPaymentDueDate: "",
    recipient: "",
    customer: "",
    totalAmountString:"", 
    totalInstalString:""
  });

  // Create customer options with both email and fullname
  const customerOptions = customer.map((cust: { email: any; firstName: any; lastName: any; }) => ({
    value: cust.email,
    label: `${cust.firstName} ${cust.lastName}`,
    email: cust.email,
    fullname: `${cust.firstName} ${cust.lastName}`,
  }));

  // Update Invoice data on input change
  const updateInvoice = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      [name]: value,
    }));
  };

  // Handle participants change to include both email and fullname
  const handleParticipantsChange = (selectedOptions: any) => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      recipient: selectedOptions.value, // Assuming value is email
      customer: selectedOptions.label, // Assuming label is full name
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

  
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = Number(inputValue.replace(/,/g, ''));
    setInvoice((prev) => ({
      ...prev,
      totalAmount: numericValue,
      totalAmountString:formatPrice(inputValue)
    }));
  };

  const handleInstalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = Number(inputValue.replace(/,/g, ''));
    setInvoice((prev) => ({
      ...prev,
      installmentAmount: numericValue,
      totalInstalString:formatPrice(inputValue)
    }));
  };

  const sendInvoice = async () => {
    // Check required fields
    if (!Invoice.narration.trim() || !Invoice.type.trim()) {
      notifyError("Narration and Payment Type are required fields.");
      return;
    }
    if (!Invoice.recipient.trim()) {
      notifyError("Please add customer.");
      return;
    }
    if (!Invoice.totalAmount) {
      notifyError("Total Amount must be a positive number.");
      return;
    }

    if (Invoice.type === "Installmental") {
      if (!Invoice.installmentAmount || Invoice.installmentAmount <= 0) {
        notifyError("Installment Amount must be a positive number.");
        return;
      }
      if (!Invoice.interval || Invoice.interval <= 0) {
        notifyError("Payment Interval must be a positive number.");
        return;
      }
      if (!Invoice.firstPaymentDueDate) {
        notifyError("First Payment Due Date is required.");
        return;
      }
  } else if (Invoice.type === "One-time") {
    if (!Invoice.totalAmount || Invoice.totalAmount <= 0) {
      notifyError("Total Amount must be a positive number.");
      return;
    }
  }

  if (!Invoice.firstPaymentDueDate) {
    notifyError("First Payment Due Date is required.");
    return;
  }


    const formattedDate = formatDate(Invoice.firstPaymentDueDate);
    const formattedFirstDueDate = new Date(Invoice.firstPaymentDueDate).toISOString();
    const InvoiceData = {
      clientEmail: Invoice.recipient,
      clientName: Invoice.customer,
      totalAmount: Invoice.totalAmount,
      narration:Invoice.narration,
      currency:Invoice.currency,
      dueDate:formattedDate,
      installmentAmount: Invoice.installmentAmount,
      interval: Invoice.interval,
      payment_type: Invoice.type === "Installmental" ? "Installmental" : "on-time",
      firstDueDate: formattedFirstDueDate,
      installments: [],
      totalAmountString:Invoice.totalAmountString,
      totalInstalString:Invoice.totalInstalString 
    };
    isSending(true, "Creating...");
    const cb = () => {
      isSending(false, "");
    };
    const res = await makeRequest("POST", addInvoices, InvoiceData, cb, token);
    if (res) {
      await getInvoices();
      setNew(false);
      notifySuccess('Invoice Sent!');
    }
  };




  return (
    <div className="my-modal" onClick={() => setNew(false)}>
      <div onClick={(e) => e.stopPropagation()} className="my-col-6 off-3 down-2 my-bottom-50 left rad-30 bg-color-code-2">
        <div className="my-col-10 off-1 down-5">
          <div>
            <span className="px15 interBold">Create Invoice</span>
          </div>
          {/* Narration Input */}
          <div className="my-mother down-5">
            <span className="interBold px9 alice">Narration</span>
            <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
              <input
                type="text"
                value={Invoice.narration}
                name="narration"
                placeholder="Payment for..."
                onChange={updateInvoice}
                className="input InterLight px9 alice"
              />
            </div>
          </div>
          {/* Currency Select */}
          <div className="my-mother gap-elements down-2">
            <div className="my-col-2">
              <span className="interBold px9 alice">Currency</span>
              <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                <select
                  name="currency"
                  value={Invoice.currency}
                  onChange={updateInvoice}
                  className="input InterLight px9 alice"
                >
                  <option value="₦">₦</option>
                  <option value="$">$</option>
                </select>
              </div>
            </div>
            {/* Total Amount Input */}
            <div className="my-col-10">
              <span className="interBold px9 alice">Total Amount</span>
              <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                <input
                  type="text"
                  name="total_amount"
                  value={Invoice.totalAmountString}
                  onChange={handleAmountChange}
                  className="input InterLight px9 alice"
                />
              </div>
            </div>
          </div>
          {/* Payment Type Select */}
          <div className="my-mother gap-elements down-2">
            <div className="my-col-12">
              <span className="interBold px9 alice">Payment Type</span>
              <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                <select
                  name="type"
                  value={Invoice.type}
                  onChange={updateInvoice}
                  className="input InterLight px9 alice"
                >
                  <option value="Installmental">Installmental</option>
                  <option value="One-time">One-time</option>
                </select>
              </div>
            </div>
          </div>

          {/* Conditionally Render Installment Amount and Interval */}
          {Invoice.type === "Installmental" && (
            <>
              {/* Installment Amount Input */}
              <div className="my-mother gap-elements down-2">
                <div className="my-col-6">
                  <span className="interBold px9 alice">Installment Amount</span>
                  <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                    <input
                      type="text"
                      name="installment_amount"
                      value={Invoice.totalInstalString}
                      onChange={handleInstalChange}
                      className="input InterLight px9 alice"
                    />
                  </div>
                </div>
                {/* Payment Interval Input */}
                <div className="my-col-6">
                  <span className="interBold px9 alice">Payment Interval (in days)</span>
                  <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                    <input
                      type="number"
                      name="interval"
                      min={1}
                      value={Invoice.interval}
                      onChange={updateInvoice}
                      className="input InterLight px9 alice"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* First Payment Due Date Input */}
          <div className="my-mother gap-elements down-2">
            <div className="my-col-12">
              <span className="interBold px9 alice">First Payment Due Date</span>
              <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                <input
                  type="date"
                  name="firstPaymentDueDate"
                  value={Invoice.firstPaymentDueDate}
                  onChange={updateInvoice}
                  min={new Date().toISOString().split('T')[0]}
                  className="input InterLight px9 alice"
                />
              </div>
            </div>
          </div>

          {/* Customer Selection */}
          <div className="my-mother down-2">
            <span className="interBold px9 alice">Send Invoice to:</span>
            <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 alice rad-20">
              <Select
                options={customerOptions}
                onChange={handleParticipantsChange}
                styles={customSelectStyles}
                placeholder="Select participants..."
              />
            </div>
          </div>
          {/* Send Button */}
          <div className="my-mother down-5 gap-elements">
            <button className="my-btn-sm rad-10 bg-color-code-1 alice interBold px9" onClick={sendInvoice}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInvoice;

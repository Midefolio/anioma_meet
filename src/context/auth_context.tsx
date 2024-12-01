/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, ReactNode, useEffect, useState } from "react";
import { makeRequest } from "../hook/useApi";
// import { useNavigate } from "react-router-dom";
import { getAllLinks, getCustomer, getInvoice, getMeeting, getReceipt } from "../data/apis";

export const UserContext = createContext<any>(undefined);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  // const router = useNavigate();
  const [customer, setCustomer] = useState<any>(null);
  const [meetings, setMeetings] = useState<any>(null);
  const [weblinks, setweblinks] = useState<any>(null);
  const [links, setLinks] = useState<any>(null);
  const [Receipts, setReceipts] = useState<any>(null);
  const [Invoices, setInvoices] = useState<any>(null);
  const [fc, setFilteredCustomers] = useState<any>(null);
  const [fm, setFilteredMeetings] = useState<any>(null);
  const [fr, setFilteredReceipts] = useState<any>(null);
  const [fi, setFilteredInvoices] = useState<any>(null);
  const [fl, setFilteredLinks] = useState<any>(null);

  const getCustomers = async () => {
    const res = await makeRequest("GET", getCustomer, null, null, token);
    if (res) {
      setCustomer(res?.data || []);
      setFilteredCustomers(res?.data || []);
    }
  };

  const getMeetings = async () => {
    const res = await makeRequest("GET", getMeeting, null, null, token);
    if (res) {
      setMeetings(res?.data || []); // Set Meetings data from the API
      setFilteredMeetings(res?.data || []); // Initialize filtered Meetings
    }
  };

  const getReceipts = async () => {
    const res = await makeRequest("GET", getReceipt, null, null, token);
    if (res) {
      setReceipts(res?.data || []); // Set Receipts data from the API
      setFilteredReceipts(res?.data || []); // Initialize filtered Receipts
    }
  };

  const getInvoices = async () => {
    const res = await makeRequest("GET", getInvoice, null, null, token);
    if (res) {
      setInvoices(res?.data || []); // Set Invoices data from the API
      setFilteredInvoices(res?.data || []); // Initialize filtered Invoices
    }
  };

  const getWebLinks = async () => {
    const res = await makeRequest("GET", getAllLinks, null, null, token);
    if (res) {
      setLinks(res?.data || []); // Set links data from the API
      setFilteredLinks(res?.data || []); // Initialize filtered links
    }
  };

  const token = localStorage.getItem("fla-crm");
  useEffect(()=> {
    if(token){
      getInvoices();
      getCustomers();
      getMeetings();
      getReceipts();
      getWebLinks()
    }
  }, [token])

  return (
    <UserContext.Provider
      value={{
        customer,
        setCustomer,
        meetings,
        setMeetings,
        weblinks,
        setweblinks,
        Receipts,
        setReceipts,
        Invoices,
        setInvoices,
        fc,
        setFilteredCustomers,
        getCustomers,
        getMeetings,
        fm,
        setFilteredMeetings,
        fr,
        setFilteredReceipts,
        getReceipts,
        fi,
        setFilteredInvoices,
        getInvoices,
        fl, setFilteredLinks,
        getWebLinks,
        links, setLinks,
        token
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

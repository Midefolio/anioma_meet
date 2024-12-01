/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { AiOutlineClose , AiOutlineEdit } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import CustomerDetails from "./customer_details";
import { useNavigate } from "react-router-dom";
import useUserAuthContext from "../../hook/userUserAuthContext";
import CustomSkeleton from "../../component/skeleton";

const CustomersTable = () => {
  const router = useNavigate();
  const {customer, getCustomers, fc, setFilteredCustomers} = useUserAuthContext();
  const [sd, setSd] = useState<any>()
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Function to handle search input change
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredCustomers(customer);
    } else {
      const filtered = customer.filter((cust: { firstName: string; lastName: string; email: string; }) =>
        cust?.firstName?.toLowerCase().includes(query) ||
        cust?.lastName?.toLowerCase().includes(query) ||
        cust?.email?.toLowerCase().includes(query)
      );
      setFilteredCustomers(filtered);
    }
  };

  // Clear search input and reset table
  const clearSearch = () => {
    setSearchQuery("");
    setFilteredCustomers(customer);
  };


  return (
    <>
         <div className="gap-20">
        <div className="gap-elements centered-align fla-border-1 my-col-3 rad-30 h-20 bg-color-code-3 my-b-shadow">
          <input
            type="text"
            placeholder="Search table"
            value={searchQuery}
            onChange={handleSearch}
            className="input my-col-9 px9 InterLight faded-sol"
          />
          {searchQuery && (
            <span className="my-col-1 centered-align c-pointer" onClick={clearSearch}>
              <AiOutlineClose className="px9 color-code-1 pd-2" />
            </span>
          )}
          <span className="my-col-2 centered-align">
            <CiSearch className="pd-5 px13" />
          </span>
        </div>
        <span
          className="pd-10 bg-color-code-1 InterSemiBold px9 rad-10 c-pointer"
          onClick={() => {
            router('/crm/customers/new_customer');
          }}
        >
          New Customer <i className="fas fa-plus mg-5"></i>
        </span>
      </div>

      <div className="my-mother down-2">
        <div className="table-row bg-color-code-1 rad-10 my-b-shadow gap-20 pd-10">
          <input type="checkbox" />
          <span className="px9 alice InterSemiBold w-30">SN</span>
          <span className="px9 alice w-150 InterSemiBold">First Name</span>
          <span className="px9 alice w-150 InterSemiBold">Last Name</span>
          <span className="px9 alice w-150 InterSemiBold">Status</span>
          <span className="px9 alice w-150 InterSemiBold">Email</span>
          <span className="px9 alice w-150 InterSemiBold">Phone Number</span>
          <div className="my-col-1">
            <span className="px9 alice InterSemiBold">Action</span>
          </div>
        </div>
        {!fc && <CustomSkeleton/>}
        {fc?.length > 0 ? (
          fc?.map((i:any, index:number) => (
            <div key={index} className="table-row rad-10 bg-color-code-3 down-1 my-b-shadow gap-20 pd-10"  onClick={()=> {setSd(index)}}>
                 {sd === index && <CustomerDetails getCustomers={getCustomers} i={i} setSd={setSd} />}
              <input type="checkbox" />
              <span className="px9 alice InterSemiBold w-30">{index + 1}</span>
              <span className="px9 w-150 faded-sol InterSemiBold">{i?.firstName?.slice(0, 20)}</span>
              <span className="px9 w-150 faded-sol InterSemiBold">{i?.lastName?.slice(0, 20)}</span>
              <div className="w-150">
                {i?.status === 'Active' && (
                  <span className="pd-btn px6 rad-30 bg-green green InterSemiBold">Active</span>
                )}
                {i?.status === 'Potential' && (
                  <span className="pd-btn px6 rad-30 bg-color-code-4 orange InterSemiBold">Potential</span>
                )}
                {i?.status === 'Inactive' && (
                  <span className="pd-btn px6 rad-30 bg-color-code-5 red InterSemiBold">Inactive</span>
                )}
              </div>
              <span className="px9 w-150 faded-sol InterSemiBold ov-hidden">{i?.email?.slice(0, 20)}</span>
              <span className="px9 w-150 faded-sol InterSemiBold">{i?.phone?.slice(0, 20)}</span>
              <div className="my-col-1 space-50 gap-elements">
                <span>
                  <AiOutlineEdit />
                </span>
              </div>
            </div>
          ))
        ) : (

          <>
           {fc?.length < 1 && <>
            <div className="no-results-message my-col-12 pd-10 rad-1 down-2 text-center">
            No results found for <span className="color-code-1 interBold">{searchQuery}</span>
          </div></>}
          </>
         
        )}
      </div>
    </>
  );
};

export default CustomersTable;

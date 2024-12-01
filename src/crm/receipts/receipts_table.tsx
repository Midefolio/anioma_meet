/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */


import { useState } from "react";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import NewReceipt from "./new_receipt";
import useUserAuthContext from "../../hook/userUserAuthContext";
import { isSending, notifySuccess } from "../../utils/useutils";
import { makeRequest } from "../../hook/useApi";
import { deleteReceipt } from "../../data/apis";
import CustomSkeleton from "../../component/skeleton";

const ReceiptsTable = () => {
  const {Receipts, setReceipts, token, setFilteredReceipts, getReceipts, fr} = useUserAuthContext(); // Changed to an array of Receipts
  const [searchQuery, setSearchQuery] = useState<string>(""); // New state for search input
  const [newM, setNew] = useState(false)
  const [sd, setSd] = useState<any>()
  

  // Function to handle search input change
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredReceipts(Receipts); // Reset to default when search is cleared
    } else {
      const filtered = Receipts.filter((meeeting: { narration: string; }) =>
        meeeting?.narration?.toLowerCase().includes(query)
      );
      setFilteredReceipts(filtered);
    }
  };

  // Clear search input and reset table
  const clearSearch = () => {
    setSearchQuery("");
    setFilteredReceipts(Receipts); // Reset to original Receipts
  };


 const deleteMeet = async (_id:string) => {
  const confirm = window.confirm("are you sure you want to delete this receipt ?");
  if(!confirm) {return}
  isSending(true, "deleting...");
  const cb = () => {
    isSending(false, "");
  };
  const res = await makeRequest("DELETE", deleteReceipt, {_id}, cb, token);
  if (res) {
    await getReceipts()
    isSending(false, "");
    notifySuccess("Deleted!")
  }
};

  return (
    <>
      {newM && <NewReceipt getReceipts={getReceipts} setNew={setNew} />}
      
      {/* {fr?.map((i: any, index: number) => (<>
       {sd === index && <MeetingDetails getReceipts={getReceipts} i={i} setSd={setSd} />}
      </>))} */}

      <div className="gap-20">
        <div className="gap-elements centered-align fla-border-1 my-col-3 rad-30 h-20 bg-color-code-3 my-b-shadow">
          <input
            type="text"
            placeholder="Search table"
            className="input my-col-9 px9 InterLight faded-sol"
            value={searchQuery} // Controlled input
            onChange={handleSearch} // Call the search handler
          />
          {/* Conditionally render the close icon based on the searchQuery value */}
          {searchQuery && (
            <span className="my-col-1 centered-align" onClick={clearSearch}>
              <AiOutlineClose className="px9 color-code-1 pd-2 c-pointer" />
            </span>
          )}
          <span className="my-col-2 centered-align ">
            <CiSearch className="pd-5 px13" />
          </span>
        </div>
        <span
          className="pd-10 bg-color-code-1 InterSemiBold px9 rad-10 c-pointer"
          onClick={() => {
            setNew(true)
          }}
        >
          New Receipt <i className="fas fa-plus mg-5"></i>
        </span>
      </div>

      <div className="my-mother down-2">
        <div className="table-row bg-color-code-1 centered-align rad-10 my-b-shadow gap-20 pd-10">
          <input type="checkbox" />
          <span className="px9 alice InterSemiBold w-30">SN</span>
          <span className="px9 alice w-550 InterSemiBold">Narration</span>
          <span className="px9 alice w-150 InterSemiBold">Amount</span>
          <span className="px9 alice w-150 InterSemiBold">Date</span>
          <span className="px9 alice w-150 InterSemiBold">Time</span>
          <span className="px9 alice w-150 InterSemiBold">Customer</span>
          <div className="my-col-1">
            <span className="px9 alice InterSemiBold">Action</span>
          </div>
        </div>
        {!fr && <CustomSkeleton/>}
        {fr?.length > 0 ? (
          fr?.map((i: any, index: number) => (
            <div
              key={index}
              onClick={()=> {setSd(index)}}
              className="table-row rad-10 centered-align bg-color-code-3 down-1 my-b-shadow gap-20 pd-10"
            >
              <input type="checkbox" />
              <span className="px9 alice InterSemiBold w-30">{index + 1}</span>
              <span className="px9 w-550 faded-sol InterSemiBold">
                {i?.narration}
              </span>
              <div className="w-150">
              <span className="px9 faded-sol InterSemiBold">
              {i?.currency}{i?.amount}
              </span>
              </div>
              <div className="w-150">
              <span className="px9 faded-sol InterSemiBold">
                {i?.date}
              </span>
              </div>
              <div className="w-150">
              <span className="px9 faded-sol InterSemiBold">
              {i?.time}
              </span>
              </div>
              <div className="w-550">
              <span className="px9 faded-sol InterSemiBold">
              {i?.customer}
              </span>
              </div>
              <div className="my-col-1 gap-elements">
                <AiOutlineDelete onClick={()=> {deleteMeet(i?._id)}} />
              </div>
            </div>
          ))
        ) : (
         <> {fr?.length < 1 && <div className="centered-align down-2">No Receipts found</div>}</>
        )}
      </div>
    </>
  );
};

export default ReceiptsTable;

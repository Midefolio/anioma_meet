/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {useState} from "react";
import { AiOutlineClose, AiOutlineCopy, AiOutlineEdit } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import LinkResponse from "./link_response";
import { useNavigate } from "react-router-dom";
import useUserAuthContext from "../../hook/userUserAuthContext";
import { copyToClipboard, notifySuccess } from "../../utils/useutils";

const LinksTable = () => {
  const router = useNavigate();
  const {links, fl, setFilteredLinks, getWebLinks} = useUserAuthContext(); // Changed to an array of links
  const [searchQuery, setSearchQuery] = useState<string>(""); // New state for search input


  // Function to handle search input change
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredLinks(links); // Reset to default when search is cleared
    } else {
      const filtered = links?.filter((link: { title: string; }) =>
        link?.title?.toLowerCase().includes(query)
      );
      setFilteredLinks(filtered);
    }
  };

  // Clear search input and reset table
  const clearSearch = () => {
    setSearchQuery("");
    setFilteredLinks(links); // Reset to original links
  };

  const [sd, setsd] = useState<any>(null)

  return (
    <>
    {links?.map((i:any, index:number)=> (
      <>
      {sd === index && <LinkResponse setsd={setsd} i={i} getWebLinks={getWebLinks} />}
      </>
    ))} 
    
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
            router("links/new_link");
          }}
        >
          New Link <i className="fas fa-plus mg-5"></i>
        </span>
      </div>

      <div className="my-mother down-2">
        <div className="table-row bg-color-code-1 centered-align rad-10 my-b-shadow gap-20 pd-10">
          <input type="checkbox" />
          <span className="px9 alice InterSemiBold w-30">SN</span>
          <span className="px9 alice w-550 InterSemiBold">Title</span>
          <span className="px9 alice w-150 InterSemiBold">Responses</span>
          <span className="px9 alice w-150 InterSemiBold">Status</span>
          <div className="my-col-1">
            <span className="px9 alice InterSemiBold">Action</span>
          </div>
        </div>

        {fl?.length > 0 ? (
          fl.map((i: any, index: number) => (
            <div
              key={index}
              className="table-row rad-10 centered-align bg-color-code-3 down-1 my-b-shadow gap-20 pd-10"
              onClick={()=>{setsd(index)}}
            >
              <input type="checkbox" />
              <span className="px9 alice InterSemiBold w-30">{index + 1}</span>
              <span className="px9 w-550 faded-sol InterSemiBold">
                {i?.title?.slice(0, 20)}
              </span>
              <span className="px9 w-150 faded-sol InterSemiBold">
                {i?.response?.length}
              </span>
              <div className="w-150">
                {i?.status ? (
                  <span className="pd-btn px6 rad-30 bg-green green InterSemiBold">
                    Active
                  </span>
                ) : (
                  <span className="pd-btn px6 rad-30 bg-color-code-5 red InterSemiBold">
                    Locked
                  </span>
                )}
              </div>
              <div className="my-col-1 gap-elements">
                <span className="pd-5">
                  <AiOutlineEdit />
                </span>
                <span className="pd-5" onClick={(e)=>{e.stopPropagation(); notifySuccess('link copied ');  copyToClipboard(`http://localhost:3001?q=${i?._id}`)}}>
                  <AiOutlineCopy />
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="centered-align down-2">No links found</div>
        )}
      </div>
    </>
  );
};

export default LinksTable;

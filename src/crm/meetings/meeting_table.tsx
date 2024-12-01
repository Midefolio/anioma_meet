/* eslint-disable @typescript-eslint/no-explicit-any */

import {useState } from "react";
import { AiOutlineClose, AiOutlineEye } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import NewMeeting from "./new_meeting";
import MeetingDetails from "./meeting_details";
import useUserAuthContext from "../../hook/userUserAuthContext";
import CustomSkeleton from "../../component/skeleton";
import LiveCountdown from "../../component/count_down";

// import LinkResponse from "./link_response";

const MeetingTable = () => {
  const {meetings, fm, setFilteredMeetings, getMeetings} = useUserAuthContext(); // Changed to an array of Meetings
  const [searchQuery, setSearchQuery] = useState<string>(""); // New state for search input
  const [newM, setNew] = useState(false)
  const [sd, setSd] = useState<any>()

  // Function to handle search input change
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredMeetings(meetings); // Reset to default when search is cleared
    } else {
      const filtered = meetings.filter((meeeting: { description: string; }) =>
        meeeting?.description?.toLowerCase().includes(query)
      );
      setFilteredMeetings(filtered);
    }
  };

  // Clear search input and reset table
  const clearSearch = () => {
    setSearchQuery("");
    setFilteredMeetings(meetings); // Reset to original Meetings
  };


  return (
    <>
      {newM && <NewMeeting getMeetings={getMeetings} setNew={setNew} />}
      
      {fm?.map((i: any, index: number) => (<>
       {sd === index && <MeetingDetails getMeetings={getMeetings} i={i} setSd={setSd} />}
      </>))}

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
          New Meeting <i className="fas fa-plus mg-5"></i>
        </span>
      </div>

      <div className="my-mother down-2">
        <div className="table-row bg-color-code-1 centered-align rad-10 my-b-shadow gap-20 pd-10">
          <input type="checkbox" />
          <span className="px9 alice InterSemiBold w-30">SN</span>
          <span className="px9 alice w-550 InterSemiBold">Title</span>
          <span className="px9 alice w-150 InterSemiBold">Type</span>
          <span className="px9 alice w-150 InterSemiBold">Date</span>
          <span className="px9 alice w-150 InterSemiBold">Time</span>
          <span className="px9 alice w-150 InterSemiBold">Count down</span>
          <div className="my-col-1">
            <span className="px9 alice InterSemiBold">Action</span>
          </div>
        </div>
        {!fm && <CustomSkeleton/>}
        {fm?.length > 0 ? (
          fm?.map((i: any, index: number) => (
            <div
              key={index}
              onClick={()=> {setSd(index)}}
              className="table-row rad-10 centered-align bg-color-code-3 down-1 my-b-shadow gap-20 pd-10"
            >
              <input type="checkbox" />
              <span className="px9 alice InterSemiBold w-30">{index + 1}</span>
              <span className="px9 w-550 faded-sol InterSemiBold">
                {i?.description}
              </span>
              <span className="px9 w-150 faded-sol InterSemiBold">
                {i?.type}
              </span>
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
                 <LiveCountdown meetingDate={i.date} meetingTime={i.time} />
              </span>
              </div>
              <div className="my-col-1 gap-elements">
                <AiOutlineEye/>
              </div>
            </div>
          ))
        ) : (
         <> {fm?.length < 1 && <div className="centered-align down-2">No meetings found</div>}</>
        )}
      </div>
    </>
  );
};

export default MeetingTable;

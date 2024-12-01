/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { AiOutlineLogout, AiOutlineSun } from "react-icons/ai";
import CrmLayouts from "../component/crm_layouts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useEffect, useState } from "react";
import LiveCountdown from "../component/count_down";
import MeetingDetails from "./meetings/meeting_details";
import CustomSkeleton from "../component/skeleton";
import useUserAuthContext from "../hook/userUserAuthContext";
import { useNavigate } from "react-router-dom";
import { dashboard } from "../data/dashboard_layout";

const Dashboard = () => {
  const router = useNavigate();
  const {meetings} = useUserAuthContext();
  const [upcoming, setUpcoming] = useState([])
  const [sd, setSd] = useState<any>();

  // Helper function to parse date and time strings
  const parseDateTime = (dateString: string, timeString: string) => {
    const formattedDateString = dateString.replace(/(st|nd|rd|th)/g, "");
    return new Date(Date.parse(`${formattedDateString} ${timeString}`));
  };

  const getMeetings = async () => {
    const now = new Date(); // Current date and time
      const upcomingMeetings = meetings
        .filter((meeting: any) => {
          const meetingDate = parseDateTime(meeting.date, meeting.time);
          return meetingDate > now; // Only include future meetings
        })
        .sort((a: any, b: any) => {
          // Sort meetings in ascending order by date and time
          return (
            parseDateTime(a.date, a.time).getTime() -
            parseDateTime(b.date, b.time).getTime()
          );
        });
        setUpcoming(upcomingMeetings || []);
  };

  useEffect(() => {
    if (meetings) {
      getMeetings();
    }
  }, []);

  



  return (
    <> 
      {upcoming?.map((i: any, index: number) => (<>
       {sd === index && <MeetingDetails getMeetings={getMeetings} i={i} setSd={setSd} />}
      </>))}

      <CrmLayouts active="Dashboard" />
      <div className="my-col-10 off-2 down-1">
        <div className="my-col-12 w-98 h-full-scroll rad-30 bg-color-code-2 down-2">
          <div className="my-container down-5">
            <div className="gap-20">
              <div className="my-col-12">
                <span className="alice px13 InterSemiBold">Welcome !</span>
                <div>
                  <span className="px9 InterLight faded-sol">
                    {"Here's"} an overview of your business
                  </span>
                </div>
                <div className="my-mother down-3 my-bottom-50 gap-elements">
                  {dashboard?.map((i, index) => (
                    <div
                      key={index}
                      className="my-col-3 my-bottom-20 bg-color-code-3 my-b-shadow rad-10"
                    >
                      <div className="my-col-10 off-1 d-col-1">
                        <span className="px8">{i.menu}</span>
                        <div className="my-mother InterSemiBold faded-sol down-1">
                          10,000
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="gap-20 my-col-4 right">
                <span title="Theme" className="px13 pd-5 c-pointer icons">
                  <AiOutlineSun />
                </span>
                <span title="Logout" className="px12 pd-5 c-pointer icons">
                  <AiOutlineLogout />
                </span>
                <div>
                  <span className="px13 interBold">
                    Your <br /> Team Members
                  </span>
                  <div className="my-mother down-2">
                    <span className="team-icons bg-color-code-1">A</span>
                    <span className="team-icons bg-color-code-1">B</span>
                    <span className="team-icons bg-color-code-1">C</span>
                    <span  className="mg-10 px8 c-pointer my-b-shadow pd-5 color-code-1 bg-color-code-3 rad-30 InterSemiBold">
                      View All
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-mother gap-20">
              <div className="my-col-7 bg-color-code-3 my-b-shadow rad-20 my-bottom-50">
                <div className="my-container down-5">
                  <div className="interBold white gap-20">
                    Upcoming Meetings {upcoming && <>({upcoming?.length})</>}
                    <span onClick={()=> {router('/crm/meetings')}} className="px9 InterLight color-code-1 pd-5 c-pointer top-2">
                      view all <i className="fas fa-angle-right"></i>
                    </span>
                  </div>
                  <div className="my-mother v-gap-20 down-5">
                    {!upcoming && <CustomSkeleton/> }
                    {upcoming?.map((i: any, index: number) => (
                      <div
                        key={index}
                        onClick={()=> {setSd(index)}}
                        className="my-mother bd-botto c-pointer bg-color-code-1 my-b-shadow rad-10"
                      >


                        <div className="pd-10 centered-align gap-elements">
                          <div className="my-col-3">
                            <div>
                              <span className="faded-sol px8 InterLight">
                                {i.date}
                              </span>
                            </div>
                            <div className="down-1 my-mother interBold px8">
                              <span>{i.time}</span>
                            </div>
                          </div>
                          <div className="my-col-7">
                            <div className="alice interBold px8 Interight">
                              {i.type} - <span className="faded-sol">{i.duration} Minutes</span>
                            </div>
                            <div className="alice down-1 interBold px8 InterLight">
                              {i.description}
                            </div>
                          </div>
                          <span className="px8 my-col-2 faded-sol InterSemiBold">
                            <LiveCountdown meetingDate={i.date} meetingTime={i.time} />
                          </span>
                        </div>
                      </div>
                    ))}
                    {upcoming?.length < 1 && <span className="px9 color-code-1 Interlight">No Upcoming meeting..</span> }
                  </div>
                </div>
              </div>

              <Calendar
                tileClassName={({ date, view }) =>
                  view === "month" && date.getDate() === new Date().getDate()
                    ? "active-date"
                    : ""
                }
              />
            </div>
            <div className="gap-elements my-mother down-4 spa-50">
              <span onClick={()=> {router('/crm/invoices')}} className="pd-10 c-pointer bg-color-code-3 color-code-1 px9 rad-20">
                Invoices
              </span>
              <span onClick={()=> {router('/crm/receipts')}} className="pd-10 c-pointer bg-color-code-3 color-code-1 px9 rad-20">
                Receipts
              </span>
              <span onClick={()=> {router('/crm/links')}} className="pd-10 c-pointer bg-color-code-3 color-code-1 px9 rad-20">
                WebLinks
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

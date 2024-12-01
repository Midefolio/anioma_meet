/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import useUserAuthContext from "../../hook/userUserAuthContext";
import { isSending } from "../../utils/useutils";
import { makeRequest } from "../../hook/useApi";
import { deleteMeeting } from "../../data/apis";


const MeetingDetails = ({setSd, getMeetings, i}:any) => {
  const [meetings, setMeetings] = useState<any>(i);
  const { token } = useUserAuthContext();

  const deleteMeet = async () => {
    const confirm = window.confirm("are you sure you want to delete this meeting ?");
    if(!confirm) {return}
    isSending(true, "deleting...");
    const cb = () => {
      isSending(false, "");
    };
    const res = await makeRequest("DELETE", deleteMeeting, {_id:meetings?._id}, cb, token);
    if (res) {
        await getMeetings()
      setSd(false);

    }
  };


  return (
    <>
      <div className="my-modal" onClick={()=> {setSd(false)}}>
        <div onClick={(e)=> {e.stopPropagation()}} className="my-col-6 off-3 h-full-scroll my-bottom-10 left rad-30 bg-color-code-2 down-2">
          <div className="my-col-10 off-1 down-5">
            <div><span className="px15 interBold">Meeting Details</span></div>
            <div className="my-mother down-1"><span className="px9 InterLight">{i.description}</span></div>

            <div className="my-mother down-5">
              <span className="interBold px9 alice">Meeting Type</span>
              <div className="bg-color-code-3 fla-border-1 my-mother down-1 rad-20">
              <input
                  type="text"
                  value={meetings.type}
                  readOnly
                  name="description"
                  className="input InterLight px9 alice"
                />
              </div>
            </div>

            <div className="my-mother down-2">
              <span className="interBold px9 alice">Description</span>
              <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                <input
                  type="text"
                  value={meetings.description}
                  readOnly
                  name="description"
                  className="input InterLight px9 alice"
                />
              </div>
            </div>

            {["Online Meeting", "Both"].includes(meetings.type) && (
              <div className="my-mother down-2">
                <span className="interBold px9 alice">Meeting Link <i className="fas fa-link color-code-1"></i></span>
                <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                  <span
                    // href={meetings.link}
                    className="input color-code-1 centered-align InterLight px9 alice"
                  >{meetings.link}</span>
                </div>
              </div>
            )}

            {["Physical Meeting", "Both"].includes(meetings.type) && (
              <div className="my-mother down-2">
                <span className="interBold px9 alice">Meeting Venue <i className="fa fa-map-marker-alt color-code-1"></i></span>
                <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                  <input
                    type="text"
                    name="venue"
                    readOnly
                    value={meetings.venue}
                    className="input InterLight px9 alice"
                  />
                </div>
              </div>
            )}

            <div className="my-mother gap-elements down-2">
              <div className="my-col-4">
                <span className="interBold px9 alice">Date</span>
                <div className="down-1 my-mother down-1 centered bg-color-code-3 fla-border-1 rad-20">
                  <span   className="input InterLight px9 alice centered-align centered">{meetings.date}</span>
                </div>
              </div>
              <div className="my-col-4">
                <span className="interBold px9 alice">Time</span>
                <div className="down-1 my-mother down-1 centered bg-color-code-3 fla-border-1 rad-20">
                  <span   className="input InterLight px9 alice centered-align centered">{meetings.time}</span>
                </div>
              </div>
              <div className="my-col-4">
                <span className="interBold px9 alice">Duration (in minutes)</span>
                <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                  <input
                    type="number"
                    value={meetings.duration}
                    name="duration"
                    readOnly
                    className="input InterLight px9 alice"
                  />
                </div>
              </div>
            </div>

            <div className="my-mother down-2">
              <span className="interBold px9 alice">Participants</span>
              <div className="down-2 my-mother gap-elements down-1">
               {meetings.participants?.map((i:any, index:any) => (
                 <span key={index} className="px9 pd-10 rad-20 fla-border-1 bg-color-code-2s color-code-1">{i.fullname}</span>
               ))}
              </div>
            </div>

            <div className="my-mother down-5 gap-elements">
              <button className="pd-10 px10 rad-10 InterSemiBold c-pointer bg-color-code-5 red" onClick={deleteMeet}>Delete Meeting <i className="fas fa-trash-alt"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetingDetails;

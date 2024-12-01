/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */



import { useEffect, useState } from "react";
import Select from "react-select";
import useUserAuthContext from "../../hook/userUserAuthContext";
import { isSending, notifyError } from "../../utils/useutils";
import { makeRequest } from "../../hook/useApi";
import { addMeetings } from "../../data/apis";

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

const NewMeeting = ({getMeetings, setNew}:any) => {
  const {customer, token} = useUserAuthContext();
  const [meetings, setMeetings] = useState<any>({
    type: "Physical Meeting",
    description: "",
    link: "",
    venue: "",
    duration: "",
    date: "",
    time: "",
    participants: [],
    status: true,
  });


  // Create customer options with both email and fullname
  const customerOptions = customer?.map((cust: { email: any; firstName: any; lastName: any; }) => ({
    value: cust.email,
    label: `${cust.firstName} ${cust.lastName}`,
    email: cust.email,
    fullname: `${cust.firstName} ${cust.lastName}`,
  }));

  // Update meetings data on input change
  const updatemeetings = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setMeetings((prevMeetings: any) => ({
      ...prevMeetings,
      [name]: value,
    }));
  };

  // Handle participants change to include both email and fullname
  const handleParticipantsChange = (selectedOptions: any) => {
    const selectedParticipants = selectedOptions?.map((option: any) => ({
      email: option.email,
      fullname: option.fullname,
    }));
    setMeetings((prevMeetings: any) => ({
      ...prevMeetings,
      participants: selectedParticipants,
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

  const addMeeting = async () => {
    if (!meetings.date.trim() || !meetings.time.trim() || !meetings.duration.trim()) {
      notifyError("Date, Time, and Duration are required fields.");
      return;
    }

    if (meetings.type === "Physical Meeting" && !meetings.venue.trim()) {
      notifyError("Venue is required for Physical Meeting.");
      return;
    }

    if (meetings.type === "Online Meeting" && !meetings.link.trim()) {
      notifyError("Link is required for Online Meeting.");
      return;
    }

    if (meetings.type === "Both" && (!meetings.venue.trim() || !meetings.link.trim())) {
      notifyError("Both Link and Venue are required for this meeting type.");
      return;
    }

    if (!meetings.participants || meetings.participants.length === 0) {
      notifyError("Please add at least one participant.");
      return;
    }

    // Apply the date and time formatting
    const formattedDate = formatDate(meetings.date);
    const formattedTime = formatTimeTo12Hour(meetings.time);

    const meetingData = {
      ...meetings,
      date: formattedDate,
      time: formattedTime,
    };

    isSending(true, "adding...");
    const cb = () => {
      isSending(false, "");
    };
    const res = await makeRequest("POST", addMeetings, meetingData, cb, token);

    if (res) {
      // Handle successful response here
      await getMeetings();
      setNew(false);
    }
  };

  const [minTime, setMinTime] = useState('');

  useEffect(() => {
    // Get the current time in HH:MM format
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    setMinTime(`${hours}:${minutes}`);
  }, []);


  return (
    <>
      <div className="my-modal" onClick={()=> {setNew(false)}}>
        <div onClick={(e)=> {e.stopPropagation()}} className="my-col-6 off-3 h-full-scroll my-bottom-10 left rad-30 bg-color-code-2 down-2">
          <div className="my-col-10 off-1 down-5">
            <div><span className="px15 interBold">New Meeting</span></div>
            <div className="my-mother down-1"><span className="px9 InterLight">Schedule an activity...</span></div>

            <div className="my-mother down-5">
              <span className="interBold px9 alice">Meeting Type</span>
              <div className="bg-color-code-3 fla-border-1 my-mother down-1 rad-20">
                <select
                  name="type"
                  value={meetings.type}
                  onChange={updatemeetings}
                  className="input InterLight px9 alice"
                >
                  <option value="Physical Meeting">Physical Meeting</option>
                  <option value="Online Meeting">Online Meeting</option>
                  <option value="Both">Both</option>
                </select>
              </div>
            </div>

            <div className="my-mother down-2">
              <span className="interBold px9 alice">Description</span>
              <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                <input
                  type="text"
                  value={meetings.description}
                  name="description"
                  onChange={updatemeetings}
                  className="input InterLight px9 alice"
                />
              </div>
            </div>

            {["Online Meeting", "Both"].includes(meetings.type) && (
              <div className="my-mother down-2">
                <span className="interBold px9 alice">Meeting Link <i className="fas fa-link color-code-1"></i></span>
                <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                  <input
                    type="text"
                    value={meetings.link}
                    name="link"
                    onChange={updatemeetings}
                    className="input InterLight px9 alice"
                  />
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
                    value={meetings.venue}
                    onChange={updatemeetings}
                    className="input InterLight px9 alice"
                  />
                </div>
              </div>
            )}

            <div className="my-mother gap-elements down-2">
              <div className="my-col-4">
                <span className="interBold px9 alice">Date</span>
                <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                  <input
                    type="date"
                    name="date"
                    value={meetings.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={updatemeetings}
                    className="input InterLight px9 alice"
                  />
                </div>
              </div>
              <div className="my-col-4">
                <span className="interBold px9 alice">Time</span>
                <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                  <input
                    type="time"
                    name="time"
                    value={meetings.time}
                    min={minTime}
                    onChange={updatemeetings}
                    className="input InterLight px9 alice"
                  />
                </div>
              </div>
              <div className="my-col-4">
                <span className="interBold px9 alice">Duration (in minutes)</span>
                <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                  <input
                    type="number"
                    name="duration"
                    onChange={updatemeetings}
                    className="input InterLight px9 alice"
                  />
                </div>
              </div>
            </div>

            <div className="my-mother down-2">
              <span className="interBold px9 alice">Participants</span>
              <div className="down-1 my-mother down-1 bg-color-code-3 fla-border-1 rad-20">
                <Select
                  isMulti
                  options={customerOptions}
                  onChange={handleParticipantsChange}
                  styles={customSelectStyles}
                  placeholder="Select participants..."
                />
              </div>
            </div>

            <div className="my-mother down-5 gap-elements">
              <button className="my-btn-sm rad-10 bg-color-code-1 alice interBold px9" onClick={addMeeting}>Save and Notify Client</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewMeeting;

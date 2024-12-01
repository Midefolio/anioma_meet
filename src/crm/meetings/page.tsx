// import { customer_summary } from "@/data/dashboard_layout";
import { AiOutlineLogout, AiOutlineSun } from "react-icons/ai";
import MeetingTable from "./meeting_table";
import CrmLayouts from "../../component/crm_layouts";

const Meetings = () => {
  return (
    <>
      <CrmLayouts active="Meetings" />
      <div className="my-col-10 off-2 down-1">
        <div className="my-col-12 w-98 h-full-scroll rad-30  bg-color-code-2 down-2">
          <div className="my-container down-5">
            <div className="gap-20">
              <div className="my-col-12">
                <span className="alice px13 InterSemiBold">All Meetings</span>
                <div>
                  <span className="px9 InterLight faded-sol">
                    {"Here's"} as overview of your Scheduled meetings
                  </span>
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
                    <span className="mg-10 px8 c-pointer my-b-shadow pd-5 color-code-1 bg-color-code-3 rad-30 InterSemiBold">
                      View All
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* customer table */}
            <div className="my-mother down-5">
              {" "}
              <MeetingTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meetings;


// import { customer_summary } from "@/data/dashboard_layout";
import { AiOutlineLogout, AiOutlineSun } from "react-icons/ai";
import CrmLayouts from "../../component/crm_layouts";
import LinksTable from "./links_table";

const Deals = () => {
  return (
    <>
      <CrmLayouts active="Weblinks" />
      <div className="my-col-10 off-2 down-1">
        <div className="my-col-12 w-98 h-full-scroll rad-30  bg-color-code-2 down-2">
          <div className="my-container down-5">
            <div className="gap-20">
              <div className="my-col-12">
                <span className="alice px13 InterSemiBold">All Web-links</span>
                <div>
                  <span className="px9 InterLight faded-sol">
                    {"Here's"} as overview of your links
                  </span>
                </div>
                {/* <div className="my-mother down-3 my-bottom-50 gap-elements">
                    {customer_summary?.map((i, index) => (
                          <div key={index} className="my-col-3 fla-border-2 c-pointer my-bottom-20 bg-color-code-3 rad-10">
                            <div className="my-col-10 off-1 d-col-1">
                                <span className="px8">{i.menu}</span>
                                <div className="my-mother InterSemiBold faded-sol down-1">10,000</div>
                            </div>
                          </div>
                        ))
                      }
                  </div> */}
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
              <LinksTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deals;

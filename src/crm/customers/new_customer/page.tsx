/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */



import { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import useUserAuthContext from "../../../hook/userUserAuthContext";
import { uploadImageToCloudinary } from "../../../utils/clouds";
import { clickHandler, isSending, notifyError, notifySuccess } from "../../../utils/useutils";
import { makeRequest } from "../../../hook/useApi";
import { addCustomers } from "../../../data/apis";
import CrmLayouts from "../../../component/crm_layouts";

const NewCustomers = () => {
  const router = useNavigate();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const { getCustomers, token } = useUserAuthContext()
  const [customer, setCustomer] = useState<any>({
    title: "Mr",
    picture: "",
    firstName:"",
    lastName: "",
    address:"",
    email: "",
    phone: "",
    about: "",
    in_charge: "",
    status: "Potential",
  });

  const [description, setDescription] = useState<string>(""); 
  const handleQuillChange = (content: string) => {
     setDescription(content);  // Update the local description state
     setCustomer((prevLink: any) => ({ ...prevLink, about: content })); // Update description in the link object
   };
 

  const updateCustomer = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setCustomer((prevCustomer: any) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    setIsUploading(true);
    if (!file) return;
    try {
      const res = await uploadImageToCloudinary(file);
      if (res) {
        const logo = res;
        setCustomer((prev: any) => ({ ...prev, picture: logo }));
        notifySuccess("Image uploaded successfully");
        setIsUploading(false);
      }
    } catch (error) {
      notifyError("Error uploading image");
      setIsUploading(false);
    }
  };

  const addCustomer = async() => {
    if(!customer.title.trim()){
      return notifyError('please select title')
    }
    if(!customer.firstName.trim()){
      return notifyError('please enter firstName')
    }
    if(!customer.lastName.trim()){
      return notifyError('please enter lastName')
    }
    if(!customer.email.trim()){
      return notifyError('please enter email')
    }
    if(!customer.about.trim()){
      return notifyError('please enter about')
    }
    if(!customer.phone.trim()){
      return notifyError('please enter phone')
    }
    isSending(true, 'Adding...')
    const cb =()=> {isSending(false, "")}
    const res = await makeRequest("POST", addCustomers, customer, cb, token)
    if(res) {
      await getCustomers();
      router('/crm/customers')
    }
  }

  return (
    <>
      <CrmLayouts active="Customers" />
      <div className="my-col-10 off-2 down-1">
        <div className="my-col-12 w-98 h-full-scroll rad-30 bg-color-code-2 down-2  ">
          <div className="my-container down-5">
            <div className="">
              <div className="my-col-12">
                <span className="alice px13 InterSemiBold gap-elements">
                  <i className="fas fa-arrow-left pd-10-exl c-pointer" onClick={()=> {router('/crm/customers')
                  }}></i> Add Customer
                </span>
                <div className="down-1">
                  <span className="px9 InterLight faded-sol">Provide customer details below</span>
                </div>
              </div>
              <div className="my-mother centered-align space-50 gap-elements  down-8">
              <div>
                  <div className="down-1">
                    <span className="interBold alice px8">
                      Picture (Optional)
                    </span>
                  </div>
                  <div
                    className="profile-pics down-2 bg-color-code-3 fla-border-1 rad-20 faded-sol"
                    onClick={() => clickHandler("select-image-input")}
                  >
                    {customer?.picture?.secure_url ? (
                      <img src={customer?.picture?.secure_url} />
                    ) : (
                      <AiOutlinePicture className="px30" />
                    )}
                  </div>
                  {isUploading && <span className="pd-10 px8">uploading image...</span>}
                  <input
                    type="file"
                    onChange={(e) => handleImageChange(e)}
                    hidden
                    id="select-image-input"
                  />
                </div>
                <div className="">
                  <div className="gap-elements space-50">
                    <div>
                      <span className="alice px9 InterSemiBold">Title<span className="red">*</span></span>
                      <select
                        name="title"
                        value={customer.title}
                        onChange={updateCustomer}
                        className="input InterLight px9 alice fla-border-1 bg-color-code-3 down-1 rad-20"
                      >
                        <option value="Mr">Mr.</option>
                        <option value="Mrs">Mrs.</option>
                        <option value="Miss">Miss.</option>
                      </select>
                    </div>
                    <div>
                      <span className="alice px9 InterSemiBold">First Name<span className="red">*</span></span>
                      <input
                        name="firstName"
                        value={customer.firstName}
                        onChange={updateCustomer}
                        placeholder="Type here..."
                        className="input InterLight px9 alice fla-border-1 bg-color-code-3 down-1 rad-20"
                      />
                    </div>
                    <div>
                      <span className="alice px9 InterSemiBold">Last Name<span className="red">*</span></span>
                      <input
                        name="lastName"
                        value={customer.lastName}
                        onChange={updateCustomer}
                        placeholder="Type here..."
                        className="input InterLight px9 alice fla-border-1 bg-color-code-3 down-1 rad-20"
                      />
                    </div>
                    <div className="">
                      <span className="px9 alice InterSemiBold">Email<span className="red">*</span></span>
                      <input
                        name="email"
                        value={customer.email}
                        onChange={updateCustomer}
                        placeholder="Type here..."
                        className="input InterLight px9 alice fla-border-1 bg-color-code-3 down-1 rad-20"
                      />
                    </div>
                    <div className="">
                      <span className="px9 alice InterSemiBold">Phone Number<span className="red">*</span></span>
                      <input
                        name="phone"
                        value={customer.phone}
                        onChange={updateCustomer}
                        placeholder="Type here..."
                        className="input InterLight px9 alice fla-border-1 bg-color-code-3 down-1 rad-20"
                      />
                    </div>
                  </div>

                  <div className="my-mother px10 down-2">
                  <span className="interBold px9">About Customer</span>
                  <div className="my-col-12 bg-color-code-3 fla-border-1 rad-20 down-1">
                    <ReactQuill
                      className="my-col-12 InterLight rad-20"
                      value={description}
                      onChange={handleQuillChange}
                      placeholder=""
                    />
                  </div>
                </div>
                  <div className="down-2 my-mother  ">
                    <span className="px9 InterSemiBold alice">House / Office Address</span>
                    <input
                      name="address"
                      value={customer.address}
                      onChange={updateCustomer}
                      placeholder="Type here..."
                      className="input InterLight px9 alice fla-border-1 bg-color-code-3 down-1 rad-20"
                    />
                  </div>
                  <div className="down-3 my-mother space-50 gap-elements">
                    <div className="">
                      <span className="px9 InterSemiBold alice">Customer Status<span className="red">*</span></span>
                      <select
                        name="status"
                        value={customer.status}
                        onChange={updateCustomer}
                        className="input InterLight px9 alice fla-border-1 bg-color-code-3 down-1 rad-20"
                      >
                        <option value="Potential">Potential</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                    {/* <div className="">
                      <span className="px9 InterSemiBold alice">Deal</span>
                      <input
                        name="deal"
                        value={customer.deal}
                        onChange={updateCustomer}
                        placeholder="Type here..."
                        className="input InterLight px9 alice fla-border-1 bg-color-code-3 down-1 rad-20"
                      />
                    </div> */}
                    <div className="">
                      <span className="px9 InterSemiBold alice">Minister In-Charge</span>
                      <input
                        name="in_charge"
                        value={customer.in_charge}
                        onChange={updateCustomer}
                        placeholder="Type here..."
                        className="input InterLight px9 alice fla-border-1 bg-color-code-3 down-1 rad-20"
                      />
                    </div>
                  </div>
                  <div className="my-mother down-5">
                    <button onClick={addCustomer} className="my-btn-sm px10 rad-10 InterSemiBold alice c-pointer bg-color-code-1">
                      Add Customer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCustomers;

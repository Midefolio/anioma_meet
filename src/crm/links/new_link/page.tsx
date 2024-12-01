/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import ReactQuill from "react-quill";
import AddFields from "./add_field";
import { uploadImageToCloudinary } from "../../../utils/clouds";
import { clickHandler, isSending, notifyError, notifySuccess } from "../../../utils/useutils";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../../../hook/useApi";
import { createLink } from "../../../data/apis";
import CrmLayouts from "../../../component/crm_layouts";


const NewLink = () => {
  const [addf, setAddF] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [description, setDescription] = useState<string>(""); // State for ReactQuill description
  const [link, setLink] = useState<any>({
    title: "",
    description: "",
    logo: {},
    fields: [
      { title: "First Name", re:true, type: "text", options: [], isRequired: true },
      { title: "Last Name", re:true, type: "text", options: [], isRequired: true },
      { title: "Email", re:true, type: "email", options: [], isRequired: true },
      { title: "Phone Number", re:true, type: "phone", options: [], isRequired: true },
    ],
  });
  const token = localStorage.getItem('fla-crm');
  const router = useNavigate();

  // Function to delete a field
  const deleteField = (index: number) => {
    setLink((prevLink: any) => ({
      ...prevLink,
      fields: prevLink.fields.filter((_: any, i: number) => i !== index),
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
        link.logo = logo;
        setLink((prev: any) => ({ ...prev, logo: logo }));
        localStorage.setItem(`webinks`, JSON.stringify(link));
        notifySuccess("Image uploaded successfully");
        setIsUploading(false);
      }
    } catch (error) {
      notifyError("Error uploading image");
      setIsUploading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLink((prevFields: any) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleQuillChange = (content: string) => {
    setDescription(content);  // Update the local description state
    setLink((prevLink: any) => ({ ...prevLink, description: content })); // Update description in the link object
  };


   const addLink = async()=> {
    if(!link.title.trim()){
      return notifyError('Link title is require')
    }
    if(!link.description.trim()){
      return notifyError('Link description is require')
    }
     isSending(true)
     const cb =()=> {isSending(false)}
     const res = await makeRequest('POST', createLink, link, cb, token);
     if(res){
        notifySuccess('Link Created successfully');
        router('/crm/links')
     }
   }



  return (
    <>
      {addf && <AddFields setLink={setLink} setAddF={setAddF} />}
      <CrmLayouts active="Weblinks" />
      <div className="my-col-10 off-2 down-1">
        <div className="my-col-12 w-98 h-full-scroll rad-30 bg-color-code-2 down-2">
          <div className="my-container down-5 my-bottom-50">
            <div className="">
              <div className="my-col-12 gap-20">
                <div>
                  <span className="alice px13 InterSemiBold gap-elements">
                    <i className="fas fa-arrow-left pd-10-exl c-pointer" onClick={()=> {router('/crm/links')}}></i>{" "}
                    Create Web-Link
                  </span>
                  <div className="down-1">
                    <span className="px9 InterLight faded-sol">
                      Provide link details below
                    </span>
                  </div>
                </div>
                <div className="">
                  <span className="px9 rad-10 bg-color-code-1 pd-10 c-pointer">
                    Preview WebLink <i className="fas fa-eye"></i>
                  </span>
                </div>
              </div>
              <div className="my-mother down-5">
                <div>
                  <div className="down-1">
                    <span className="interBold alice">
                      Banner / Logo (Optional)
                    </span>
                  </div>
                  <div
                    className="profile-pics down-2 bg-color-code-3 fla-border-1 rad-20 faded-sol"
                    onClick={() => clickHandler("select-image-input")}
                  >
                    {link.logo.secure_url ? (
                      <img src={link.logo.secure_url} />
                    ) : (
                      <AiOutlinePicture className="px30" />
                    )}
                  </div>
                  {isUploading && <span className="pd-10 px9">uploading image...</span>}
                  <input
                    type="file"
                    onChange={(e) => handleImageChange(e)}
                    hidden
                    id="select-image-input"
                  />
                </div>

                <div className="my-col-12 down-2">
                  <span className="interBold">Title</span>
                  <div className="my-col-12 centered-align bg-color-code-3 fla-border-1 rad-20 down-1">
                    <input type="text"
                     name="title"
                     onChange={handleInputChange}
                     className="input px10 alice interBold" />
                  </div>
                </div>
                <div className="my-mother px10 down-2">
                  <span className="interBold">Description</span>
                  <div className="my-col-12 bg-color-code-3 fla-border-1 rad-20 down-1">
                    <ReactQuill
                      className="my-col-12 InterLight rad-20"
                      value={description}
                      onChange={handleQuillChange}
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="my-mother down-3">
                  <span className="interBold">Fields</span>
                  <div className="my-mother down-">
                    <span className="color-code-1 px9"></span>
                    <div className="v-gap-20 down-2 my-mother">
                      {link.fields?.map((i: any, index: number) => (
                        <span
                          className="pd-10 rad-30 gap-20 px9 bg-color-code-3 centered-align fla-border-1"
                          key={index}
                        >
                          {i.title}{" "}
                          <span className="color-code-1">{i.type}-field</span>
                          {i.isRequired && <span className="green">required</span>} 
                          {i.re ?<i
                            className="fa pd-5 c-pointer fa-times faded-2"
                            onClick={() => notifyError("field is too important")}
                          ></i>:<i
                          className="fa pd-5 c-pointer fa-times"
                          onClick={() => deleteField(index)} // Call deleteField when clicked
                        ></i>}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="my-mother down-5">
                    <span
                      className="px9 c-pointer my-b-shadow color-code-1 pd-10 bg-color-code-3 rad-20"
                      onClick={() => {
                        setAddF(true);
                      }}
                    >
                      Add fields <i className="fas fa-plus mg-5"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-mother gap-elements down-10">
                <button className="pd-10 bg-color-code-1 px10 c-pointer rad-10 alice" onClick={addLink}>Create Link</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewLink;

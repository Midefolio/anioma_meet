/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  createRoutesFromElements,
} from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./screens/page";
import Contact from "./component/contact_us";
import About from "./screens/about";



const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact_us" element={<Contact/>}/>
        <Route path="/about_us" element={<About/>}/>
      </>
    )
  );

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
      <div className="pop-modal my-d-none" id="isSending">
        <div className="my-mother down-40">
          <AiOutlineLoading3Quarters className="fa fa-spin px30 color-code-1" />
          <div className="my-mother xs-down-5 down-1">
            <span className="InterSemiBold px12" id="sending-msg"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

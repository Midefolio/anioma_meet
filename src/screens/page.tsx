import Cards from "../component/cards";
import NavBar from "../component/nav";
import News from "../component/news";
import Projects from "../component/projects";
import vid from "../images/20538356-uhd_3840_2160_30fps.mp4";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="bg-landing xs-down-6">
        <video controls={false} autoPlay muted loop id="myVideo" className="">
          <source src={vid} type="video/mp4" />
        </video>
      </div>
      <div className="my-mother bg-pattern bg-red xs-top-3 my-bottom-50">
        <div className="xs-container xs-down-8">
          <div className="white InterSemiBold upper-case xs-px12">
            <span>
              Welcome To Anioma Ranch and Produce LTD<span className="fade-2">Bank</span>{" "}
            </span>
          </div>
          <div className="my-mother xs-down-8">
            <span className="xs-px25 InterSemiBold white">
              The future of Banking is already here
            </span>
            <div className="my-mother xs-down-5">
              <span className="white xs-px15">
                $0 monthly service charge. $0 minimum deposite to open account.
                Only possible with ScheldthBank
              </span>
            </div>
            <div className="my-mother xs-down-10">
              <button className="my-b-shadow my-btn-sm bg-white black InterSemiBold">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-mother my-bottom-50">
        <div className="xs-container xs-down-10">
          <span className="fade-2 InterSemiBold xs-12 centered xs-px13 upper-case xs-px9">
            Banking at it's easiest
          </span>
          <div className="my-mother xs-down-8 centered">
            <span className="xs-px20 black InterSemiBold">
              Choose What's right for you
            </span>
          </div>
          <div className="my-mother xs-down-5 centered">
            <span className="xs-px15 xs-10 xs-off-1 InterLight">
              We Help Business and Customer achieve more...
            </span>
          </div>

          <div className="xs-12 centered xs-down-10">
            <div className="xs-12">
              <div className="xs-6">
                <div className="team-icons">
                  {" "}
                  <img
                    src="https://img.icons8.com/?size=100&id=ynRo4ryFLrim&format=png&color=FA5252"
                    alt=""
                  />
                </div>
                <div className="InterLightmy-mother xs-down-3 centere-align">
                  <span className="xs-px13">
                    Banking <i className="fas fade-2 fa-angle-right"></i>
                  </span>
                </div>
              </div>
              <div className="xs-6">
                <div className="team-icons">
                  {" "}
                  <img
                    src="https://img.icons8.com/?size=100&id=Dsnf7aj8tqgM&format=png&color=FA5252"
                    alt=""
                  />
                </div>
                <div className="InterLightmy-mother xs-down-3 centere-align">
                  <span className="xs-px13">
                    Cheking <i className="fas fade-2 fa-angle-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="xs-12 centered xs-down-15">
            <div className="xs-12">
              <div className="xs-6">
                <div className="team-icons">
                  {" "}
                  <img
                    src="https://img.icons8.com/?size=100&id=5HOdWunyvM3c&format=png&color=FA5252"
                    alt=""
                  />
                </div>
                <div className="InterLightmy-mother xs-down-3 centere-align">
                  <span className="xs-px13">
                    Payment Cards <i className="fas fade-2 fa-angle-right"></i>
                  </span>
                </div>
              </div>
              <div className="xs-6">
                <div className="team-icons">
                  {" "}
                  <img
                    src="https://img.icons8.com/?size=100&id=112579&format=png&color=FA5252"
                    alt=""
                  />
                </div>
                <div className="InterLightmy-mother xs-down-3 centere-align">
                  <span className="xs-px13">
                    Savings <i className="fas fade-2 fa-angle-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-mother my-bottom-50">
        <div className="xs-container centered">
          <div className="my-mother xs-down-10">
            <span className="xs-px20  InterSemiBold">
              Top Products & Services
            </span>
          </div>
          <div className="my-mother xs-down-5">
            <span className="xs-px15 InterLight">
              Make life easy with our top products and services
            </span>
          </div>
          <div className="my-mother left xs-down-10">
            <Projects />
          </div>
        </div>
      </div>
      <div className="xs-12 my-bottom-50">
        <div className="xs-container">
         <div className="my-mother fade-2 InterSemiBold"> <span className="upper-case xs-px12">Scheldth<span className="fade-2">Bank</span> signature card</span></div>
         <div className="my-mother xs-down-5 "> <span className="xs-px20 InterSemiBold">New! The card that automatically adapts to you with <span className="red">5%</span> cash back</span></div>
         <div className="my-mother">
            <Cards/>
         </div>
        </div>
      </div>
      <div className="my-mother my-bottom-50">
        <div className="xs-container centered">
          <div className="my-mother">
            <span className="xs-px20  InterSemiBold">
            News & Stories
            </span>
          </div>
          <div className="my-mother xs-down-5">
            <span className="xs-px15 InterLight">
              stay update with our timely updates!
            </span>
          </div>
          <div className="my-mother left xs-down-10">
            <News />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

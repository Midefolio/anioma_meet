import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Cards = () => {
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container my-bottom-50"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
       <div className="xs-12 bg-faded-3 my-bottom-20 rad-10 xs-down-4">
       <div className="xs-container xs-down-10 card bg-black bg-pattern">
            <div className="xs-container">
              <div className="gap-elemnts my-mother centered-align">
                <span className="icons">
                  <img
                    src="https://img.icons8.com/?size=100&id=112579&format=png&color=FA5252"
                    alt=""
                  />
                </span>
                <span className="xs-px15 xs-down-2 white InterSemiBold">
                  Sc<span className="">hel</span>dth
                  <span className="fade-2">Bank</span>
                </span>
              </div>
              <div className="my-mother xs-down-10">
                <span className="fade-2 xs-px15 mg">***** 5687 9687 *****</span>
                <div className="my-mother gap-20 mg- xs-down-8">
                    <span className="upper-case white xs-px13 interBold">JOHN Sam doe</span>
                    <span className="upper-case fade-2 xs-px13 InterLight">12/26</span>
                    <div className="upper-case xs-top-6 xs-px13 InterLight">
                        <div className="circle"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xs-container xs-down-10"> <span className="xs-px15 InterLight">Earn 50,000 bonus points and get 4X points on travel</span></div>
          <div className="xs-container gap-elements xs-down-5">
            <span className="xs-6 input bg-black rad-10 flex unset-indent xs-px13 white InterSemiBold">Signature Card</span>
            {/* <span className="xs-6 input bd-code-1 flex unset-indent xs-px13 InterSemiBold">Platinum card</span> */}
          </div>
        <div className="xs-container xs-down-5">
         <div><span className="xs-px15">Rewards & Benefits</span></div>
         <div className="xs-container xs-down-5">
            <div className="gap-elements centered-align">
                <i className="fas fa-check xs-px13 red"></i>
                <span className="xs-px13 InterLight ">Credit limit up to $5,000</span>
            </div>
            <div className="gap-elements xs-down-3 centered-align">
                <i className="fas fa-check xs-px13 InterLight  red"></i>
                <span className="xs-px13 InterLight ">Up to 5% cash back on two categories you choose</span>
            </div>
            <div className="gap-elements xs-down-3 centered-align">
                <i className="fas fa-check xs-px13 InterLight  red"></i>
                <span className="xs-px13 InterLight ">Up to 5% cash back on two categories you choose</span>
            </div>
            <div className="my-mother xs-down-5">
              <button className="my-b-shadow my-btn-sm bg-white black InterSemiBold">
                Discover More
              </button>
            </div>
         </div>
        </div>
       </div>
       <div className="xs-12 bg-faded-3 my-bottom-20 rad-10 xs-down-4">
       <div className="xs-container xs-down-10 card bg-red bg-pattern">
            <div className="xs-container">
              <div className="gap-elemnts my-mother centered-align">
                <span className="icons">
                  <img
                    src="https://img.icons8.com/?size=100&id=112579&format=png&color=FA5252"
                    alt=""
                  />
                </span>
                <span className="xs-px15 xs-down-2 white InterSemiBold">
                  Sc<span className="">hel</span>dth
                  <span className="fade-2">Bank</span>
                </span>
              </div>
              <div className="my-mother xs-down-10">
                <span className="fade-2 xs-px15 mg">***** 5687 9687 *****</span>
                <div className="my-mother gap-20 mg- xs-down-8">
                    <span className="upper-case white xs-px13 interBold">JOHN Sam doe</span>
                    <span className="upper-case fade-2 xs-px13 InterLight">12/26</span>
                    <div className="upper-case xs-top-6 xs-px13 InterLight">
                        <div className="circle"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xs-container xs-down-10"> <span className="xs-px15 InterLight">Earn 50,000 bonus points and get 4X points on travel</span></div>
          <div className="xs-container xs gap-elements xs-down-5">
            <span className="xs-6 input bg-red rad-10 flex unset-indent xs-px13 white InterSemiBold">Platinum Card</span>
            {/* <span className="xs-6 input bd-code-1 flex unset-indent xs-px13 InterSemiBold">Platinum card</span> */}
          </div>
        <div className="xs-container xs xs-down-5">
         <div><span className="xs-px15">Rewards & Benefits</span></div>
         <div className="my-mother xs-down-5">
            <div className="gap-elements centered-align">
                <i className="fas fa-check xs-px13 red"></i>
                <span className="xs-px13 InterLight ">Credit limit up to $5,000</span>
            </div>
            <div className="gap-elements xs-down-3 centered-align">
                <i className="fas fa-check xs-px13 InterLight  red"></i>
                <span className="xs-px13 InterLight ">Up to 5% cash back on two categories you choose</span>
            </div>
            <div className="gap-elements xs-down-3 centered-align">
                <i className="fas fa-check xs-px13 InterLight  red"></i>
                <span className="xs-px13 InterLight ">Up to 5% cash back on two categories you choose</span>
            </div>
            <div className="my-mother xs-down-5">
              <button className="my-b-shadow my-btn-sm bg-white black InterSemiBold">
                Discover More
              </button>
            </div>
         </div>
        </div>
       </div>
      </Carousel>
    </>
  );
};

export default Cards;

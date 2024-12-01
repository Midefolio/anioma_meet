import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const News = () => {
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
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
        <div className="my-b-shadow md-11 my-col-11 xs-container xs-centere my-bottom-10">
          <div className="my-col-12 xs-12 img-container"><img src="https://img.freepik.com/free-photo/smartphone-screen-with-coronavirus-application_53876-165462.jpg?t=st=1732315885~exp=1732319485~hmac=3f2a1051d8080e9ee4764a59507bfe8c4b753dfb207f04c65f3f951dee7f8b7b&w=740" alt="" /></div>
          <div className="md-down-4 md-10 md-off-1 my-container xs-container xs-down-5 down-3">
            <span className="px14 md-px20 xs-px15 upper-case InterSemiBold">Mobile Banking</span>
            <div className="md-12 md-down-2 xs-down-3">
              <span className="xs-px20 InterLight px11 md-px13 red">
                Easy banking is now your phone away 
              </span>
            </div>
            <div className="my-mother xs-down-5 my-bottom-20"><span className="xs-px13 fade-2">Read More</span></div>
          </div>
        </div>

        <div className="my-b-shadow md-11 my-col-11 xs-container xs-centere my-bottom-10">
          <div className="my-col-12 xs-12 img-container"><img src="https://img.freepik.com/free-photo/front-view-stacked-coins-with-dirt-plant_23-2148803904.jpg?t=st=1732316591~exp=1732320191~hmac=202e0f4c91c472d74e9dadc65e462a66876514f91ff374b1836a1267dcfca8f0&w=740" alt="" /></div>
          <div className="md-down-4 md-10 md-off-1 my-container xs-container xs-down-5 down-3">
            <span className="px14 md-px20 xs-px15 upper-case InterSemiBold">Investments</span>
            <div className="md-12 md-down-2 xs-down-3">
              <span className="xs-px20 InterLight px11 md-px13 red">
                Help your money reach its potential
              </span>
            </div>
            <div className="my-mother xs-down-5 my-bottom-20"><span className="xs-px13 fade-2">Read More</span></div>
          </div>
        </div>

        <div className="my-b-shadow md-11 my-col-11 xs-container xs-centere my-bottom-10">
          <div className="my-col-12 xs-12 img-container"><img src="https://img.freepik.com/free-photo/mother-teaching-her-daughter-about-savings_53876-139539.jpg?ga=GA1.1.699054498.1719408236&semt=ais_hybrid" alt="" /></div>
          <div className="md-down-4 md-10 md-off-1 my-container xs-container xs-down-5 down-3">
            <span className="px14 md-px20 xs-px15 upper-case InterSemiBold">Savings Accounts</span>
            <div className="md-12 md-down-2 xs-down-3">
              <span className="xs-px20 InterLight px11 md-px13 red">
               Reach your saving goals, One by one
              </span>
            </div>
            <div className="my-mother xs-down-5 my-bottom-20"><span className="xs-px13 fade-2">Read More</span></div>
          </div>
        </div>

        <div className="my-b-shadow md-11 my-col-11 xs-container xs-centere my-bottom-10">
          <div className="my-col-12 xs-12 img-container"><img src="https://img.freepik.com/free-photo/african-american-man-paying-with-credit-card-online-while-making-orders-via-mobile-internet-making-transaction-using-mobile-bank-application_231208-743.jpg?ga=GA1.1.699054498.1719408236&semt=ais_hybrid" alt="" /></div>
          <div className="md-down-4 md-10 md-off-1 my-container xs-container xs-down-5 down-3">
            <span className="px14 md-px20 xs-px15 upper-case InterSemiBold">Money Transfers</span>
            <div className="md-12 md-down-2 xs-down-3">
              <span className="xs-px20 InterLight px11 md-px13 red">
              Send money the way it was meant to be sent
              </span>
            </div>
            <div className="my-mother xs-down-5 my-bottom-20"><span className="xs-px13 fade-2">Read More</span></div>
          </div>
        </div>

        <div className="my-b-shadow md-11 my-col-11 cxs-container xs-centere my-bottom-10">
          <div className="my-col-12 xs-12 img-container"><img src="https://img.freepik.com/free-photo/savings-plans-housing-finance-banking-about-house-concep_1421-82.jpg?ga=GA1.1.699054498.1719408236&semt=ais_hybrid" alt="" /></div>
          <div className="md-down-4 md-10 md-off-1 my-container xs-container xs-down-5 down-3">
            <span className="px14 md-px20 xs-px15 upper-case InterSemiBold">Personal Loans</span>
            <div className="md-12 md-down-2 xs-down-3">
              <span className="xs-px20 InterLight px11 md-px13 red">
                Make your dream a reality with our personal loan
              </span>
            </div>
            <div className="my-mother xs-down-5 my-bottom-20"><span className="xs-px13 fade-2">Read More</span></div>
          </div>
        </div>

      </Carousel>
    </>
  );
};

export default News;

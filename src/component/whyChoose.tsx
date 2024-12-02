import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const WhyChoose = () => {
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={0.2}
        centerMode={false}
        className="my-bottom-50 down-4"
        containerClass="container-with-dots"
        customTransition="all 1s linear"
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
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rtl={false}
        shouldResetAutoplay={false}
        showDots={false}
        sliderClass=""
        slidesToSlide={0.1}
        swipeable
        transitionDuration={1000}
      >
        {/* Standard */}

       <div className="my-col-11 down-2 xs-down-3 xs-11 md-11 rad-20 my-b-shadow h-card my-bottom-50">
          <div className="my-col-10 off-1 down-5 xs-10  xs-off-1 xs-down-8 md-10 md-off-1 md-down-8 col-d-1">
           <div><span className="icons xs-px13 bg-red white interBold">01</span></div>
           <div className="my-mother down-2 xs-down-5 md-down-5"><span className="px13 md-px20 xs-px20 poppings-Bold">Technology-Driven Farming</span></div>
           <div className="my-mother down-2 xs-down-5 md-down-5"><span className="px10 xs-px13 xs-px14 md-px20 ubuntuLight faded-sol">We harness the power of smart tools and systems to optimize livestock health, productivity, and resource efficiency.</span></div>
          </div>
       </div>
       <div className="my-col-11 down-2 xs-down-3 xs-11 md-11 rad-20 my-b-shadow h-card my-bottom-50">
          <div className="my-col-10 off-1 down-5  xs-10 xs-off-1 xs-down-8 md-10 md-off-1 md-down-8 col-d-1">
           <div><span className="icons xs-px13 white bg-red interBold">02</span></div>
           <div className="my-mother down-2 xs-down-5 md-down-5"><span className="px13 md-px20 xs-px20 poppings-Bold"> Commitment to Sustainability</span></div>
           <div className="my-mother down-2 xs-down-5 md-down-5"><span className="px10 xs-px13 xs-px14 md-px20 ubuntuLight faded-sol">Our integrated ranching model reduces environmental impact while ensuring profitability and scalability.</span></div>
          </div>
       </div>
       <div className="my-col-11 down-2 xs-down-3 xs-11 md-11 rad-20 my-b-shadow h-card my-bottom-50">
          <div className="my-col-10 off-1 down-5  xs-10 xs-off-1 xs-down-8 md-10 md-off-1 md-down-8 col-d-1">
           <div><span className="icons xs-px13 white bg-red interBold">03</span></div>
           <div className="my-mother down-2 xs-down-5 md-down-5"><span className="px13 md-px20 xs-px20 poppings-Bold">Quality You  Can  <br className="hidden-ls" /> Trust</span></div>
           <div className="my-mother down-2 xs-down-5 md-down-5"><span className="px10 xs-px13 xs-px14 md-px20 ubuntuLight faded-sol">Our organic meat and dairy products are free from harmful chemicals, providing unmatched taste and nutritional value.</span></div>
          </div>
       </div>
       <div className="my-col-11 down-2 xs-down-3 xs-11 md-11 rad-20 my-b-shadow h-card my-bottom-50">
          <div className="my-col-10 off-1 down-5  xs-10 xs-off-1 xs-down-8 md-10 md-off-1 md-down-8 col-d-1">
           <div><span className="icons xs-px13 white bg-red interBold">04</span></div>
           <div className="my-mother down-2 xs-down-5 md-down-5"><span className="px13 md-px20 xs-px20 poppings-Bold">Empowering Local Communities</span></div>
           <div className="my-mother down-2 xs-down-5 md-down-5"><span className="px10 xs-px13 xs-px14 md-px20 ubuntuLight faded-sol">We are dedicated to creating jobs, resolving communal conflicts, and providing training to uplift rural economies.</span></div>
          </div>
       </div>
      </Carousel>
    </>
  );
};

export default WhyChoose;

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TrustedBy = () => {
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={0.2}
        centerMode={false}
        className=""
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
            items: 4,
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
        <div className="centere my-btn-sm c-pointer" >
          <span className="px12 ubuntuBold faded-2" >FutureLivingAfrica</span>
          <div><span className="px8 ubuntuLight faded" > https://futurelivingafrica.com</span></div>
        </div>
        <div className="centere my-btn-sm c-pointer" >
          <span className="px12 ubuntuBold faded-2" >Adesina Assets</span>
          <div><span className="px8 ubuntuLight faded" > https://adesina.ng</span></div>
        </div>
        <div className="centere my-btn-sm c-pointer" >
          <span className="px12 ubuntuBold faded-2" >Folda Realty</span>
          <div><span className="px8 ubuntuLight faded">https://foldarealties.com</span></div>
        </div> 
        <div className="centere my-btn-sm c-pointer" >
          <span className="px12 ubuntuBold faded-2" >L-Mobile Groceres</span>
          <div><span className="px8 ubuntuLight faded">https://lmobile.com.ng</span></div>
        </div>
    
             </Carousel>
    </>
  );
};

export default TrustedBy;

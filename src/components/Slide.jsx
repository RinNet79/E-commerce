import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,

    // 🔥 AUTO SLIDE
    autoplay: true,
    autoplaySpeed: 3000,   // 3 seconds
    pauseOnHover: true,   // pause when mouse hover
    arrows: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://m.media-amazon.com/images/I/61BLUExMlaL.jpg"
          className="w-full h-[600px] object-cover"
          alt="Slide 1"
        />
      </div>

      <div>
        <img
          src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/79251429-c003-49ce-9ae5-550b952e3973.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
          className="w-full h-[600px] object-cover"
          alt="Slide 2"
        />
      </div>

      <div>
        <img
          src="https://m.media-amazon.com/images/I/71R1RYSdP0L.jpg"
          className="w-full h-[600px] object-cover"
          alt="Slide 3"
        />
      </div>
    </Slider>
  );
}

import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

const FreeBook = () => {
  const filterData = list.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto md:px-20  bg-white ">
        <div>
          <h1 className="text-xl text-black ">
            Free Offered Books For You!!!
          </h1>
          <p className="text-black">
            Unlock a world of knowledge with our free books endless reading,
            zero cost!!!Our Bookstore provides you with the free cost books at
            our website
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {filterData.map((item)=>{
              return <Cards item={item} key={item.id}/>
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;

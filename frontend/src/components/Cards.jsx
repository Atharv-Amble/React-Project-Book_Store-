import React from "react";

const Cards = ({ item }) => {

  if (!item || !item.image) {
    return null; 
  }

  return (
    <>
      <div>
        <div className="card bg-base-100 w-96 shadow-xl h-full m-8 bg-white text-black hover:scale-105 duration-200"> {/* Full height card */}
          <figure className="h-48">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover" // Ensures all images have consistent size
              onError={(e) => { e.target.src = "/fallback-image.png"; }} // Fallback image in case of error
            />
          </figure>
          <div className="card-body flex flex-col justify-between min-h-40 bg-white"> {/* Set min height for uniformity */}
            <h2 className="card-title text-lg font-bold">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className="text-sm">{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline p-4 border-[2px]">$ {item.price}</div>
              <div className="badge badge-outline border-[2px] text-bold border-spacing-0 rounded-full hover:bg-pink-500 hover:text-white hover:duration-300 p-4 cursor-pointer">Available</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

import React from "react";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row  bg-white  text-black">
        <div className="space-y-6 mt-12 md:mt-32">
          <div className="w-full md:w-1/2 ">
            <h1 className="text-4xl font-bold text-black">
              Hello welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!</span>
            </h1>
          </div>
          <p className="text-xl w-3/4">
            Welcome to BookStore, your ultimate destination for discovering and
            exploring a vast collection of books across genres! Whether you’re
            seeking the latest bestsellers, timeless classics, or hidden gems,
            we’ve got something for every reader!
          </p>
          <label className="input input-bordered flex items-center gap-2 bg-inherit w-3/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="original"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <button className="btn btn-secondary">Secondary</button>
        </div>
        <div className="w-full md:w-1/2 ">
            <img className="w-100 h-100 mt-20" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?ga=GA1.1.1883788560.1720336551&semt=ais_hybrid" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;

import React from 'react';
import Cards from './Cards';
import list from "../../public/list.json";

const Course = () => {
  console.log(list); // Debugging: check if list is correctly imported
  return (
    <>
      <div className='bg-white max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 flex flex-col items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl text-black'>
            We're delighted to have you <span className='text-pink-500'>Here!</span>
          </h1>
          <p className='mt-5 text-xl'>
            Dive into a treasure trove of stories waiting to be uncovered! Our extensive collection spans genres, from heart-pounding thrillers to soul-stirring romances. Whether you’re a lifelong bibliophile or a casual reader, you’ll find the perfect book to immerse yourself in. Don’t just read—experience the magic of storytelling! Explore our shelves today and let your next adventure begin. We provide the best to read all the books and to engage the readers in it and take a deep dive into the topics covered.
          </p>
          <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'><a href="/">Back</a></button>
        </div>
        
        {/* Grid layout with gap for spacing */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"> {/* Increased gap */}
          {list.map((item) => (
            <div className="p-4"> {/* Added padding for more space around each card */}
              <Cards key={item.id} item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;

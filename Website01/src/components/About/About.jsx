import React from 'react'

function About() {
  return (
    <>
    <div className="container mx-auto p-8 bg-cover bg-center relative" >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
      <h2 className='Heading-text text-center text-blue-600 my-3 py-1 px-2 lg:text-6xl  hover:scale-105 hover:cursor-pointer' style={{ fontFamily: 'cursive' }}> <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">AKHBAAR</mark></h2>

        <p className="mb-4 py-2 text-lg text-gray-800 leading-relaxed">
          Welcome to Akhbaar - your go-to source for the latest news updates! Our mission is to keep you informed about what's happening around the world, covering a wide range of categories including politics, technology, entertainment, sports, and more.
        </p>
        <p className="mb-4 text-lg text-gray-800 leading-relaxed">
          At Akhbaar, we strive to deliver accurate and unbiased news articles, ensuring that our readers stay well-informed and up-to-date with the latest happenings. Whether you're interested in global events or local news, we've got you covered.
        </p>
        <p className="mb-4 text-lg text-gray-800 leading-relaxed">
          Our team of dedicated journalists works tirelessly to bring you the most relevant and timely news stories, keeping you informed on the go. With our user-friendly interface and real-time updates, staying informed has never been easier.
        </p>
        <p className="mb-4 text-lg text-gray-800 leading-relaxed">
          Thank you for choosing Akhbaar as your trusted source for news. Stay tuned for the latest updates!
        </p>
      </div>
    </div>
  </>
  
  
  )
}

export default About
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useCountryContext } from '../../contexts/SelectionContext'

const API_KEY=import.meta.env.VITE_API_KEY
function Home() {
  const [articles, setArticles] = useState({ articles: [] });
  const { selectedCountry } = useCountryContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&pageSize=30&apiKey=${API_KEY}`);
        const data = await response.json();
        setArticles(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, [selectedCountry]);
  return (
    <>
      <h2 className='text-center text-blue-600 my-3 py-3 px-2 lg:text-6xl '> Top <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Headlines</mark></h2>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {articles.articles && articles.articles.map((article, index) => (
           <div key={index} className="rounded overflow-hidden shadow-lg">
           <img className="w-full" src={article.urlToImage} alt={article.title} />
           <div className="px-6 py-4">
             <div className="font-bold text-xl mb-2">{article.title}</div>
             <p className="text-gray-700 text-base">Source : {article.source.name}</p>
             {article.author && (
                <p className="text-gray-700 text-base">Author: {article.author}</p>
              )}
             <div className="mt-4">
              <Link
                to={article.url}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Read More...
              </Link>
            </div>
          </div>
           
         </div>
        ))}

        {/* <button className='text-white rounded-medium bg-red-600'>
              Load More....
        </button> */}
      </div>
    </>
  );
}

export default Home;

import React from 'react';

const ArticleCard = ({ articles }) => {
  return (
    <>
      {articles.articles && articles.articles.map((article, index) => (
        <div key={index} className="rounded overflow-hidden shadow-lg bg-white transition duration-300 transform hover:scale-105">
          <img className="w-full" src={article.urlToImage} alt={article.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{article.title}</div>
            <p className="text-gray-700 text-base"><em>Source:</em> {article.source.name}</p>
            {article.author && (
              <p className="text-gray-700 text-base"><em>Author:</em> {article.author}</p>
            )}
            <div className="mt-4 h-20 overflow-hidden">
              <p className="h-full">{article.content}</p>
            </div>
            <button
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
            >
              Read More...
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ArticleCard;

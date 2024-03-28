import React ,{ useState, useEffect }  from 'react'
import { useCountryContext } from '../../contexts/SelectionContext'
import Spinner from '../Spinner/Spinner';
import ArticleCard from '../ArticleCard/ArticleCard'
const API_KEY=import.meta.env.VITE_API_KEY

function General() {
  const [articles, setArticles] = useState({ articles: [] });
  const { selectedCountry, setSelectedCountry } = useCountryContext();
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=general&page=${page}&pageSize=12&apiKey=${API_KEY}`);
        setLoading(true)
        const data = await response.json();
        setArticles(data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    

    fetchData();
    const intervalId = setInterval(fetchData, 60000);

    return () => clearInterval(intervalId);
  }, [selectedCountry]);
  const nextPage = async () => {
    const nextPage = page + 1;
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=general&page=${nextPage}&apiKey=${API_KEY}`);
    const data = await response.json();
    setArticles(prevState => ({
      articles: [...prevState.articles, ...data.articles]
    }));
    setPage(nextPage);
  }
  return (
    <>
    <h2 className='Heading-text text-center text-blue-600 my-3 py-3 px-2 lg:text-6xl '> <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">General News</mark></h2>
 
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
 
      <ArticleCard articles={articles} />
    </div>
    <div className="py-3 flex justify-center">
    {loading && <Spinner />}
    </div>
    <div className="py-3 flex justify-center">
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={nextPage}>
        Load More....
      </button>
 
    </div>
    
  </>
  )
}

export default General
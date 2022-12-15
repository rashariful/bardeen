import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const news = useLoaderData([])
    console.log(news.articles);
    return (
      <div>
        <h1>news length {news?.articles?.length}</h1>
        {
            news?.articles?.map(article => console.log(article))
        }
      </div>
    );
};

export default Home;
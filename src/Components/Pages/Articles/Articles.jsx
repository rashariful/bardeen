import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Article from './Article';

const Articles = () => {
        const articles = useLoaderData([]);
      
    return (
      <div>
        <h1 className="text-2xl font-semibold text-gray-700 mt-5">
          Future article
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
          {articles?.articles?.slice(0, 8).map((article) => (
            <Article key={article.id} article={article}></Article>
          ))}
        </div>
        <div className="flex justify-center my-10">
          <button className="btn btn-sm outline-none border-none bg-rose-500 hover:bg-rose-600">
            <Link to="/articles">see all</Link>
          </button>
        </div>
      </div>
    );
};

export default Articles;
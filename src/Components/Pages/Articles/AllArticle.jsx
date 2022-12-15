import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Article from './Article';

const AllArticle = () => {
        const articles = useLoaderData([]);

    return (
      <div>
        <div className="grid max-w-screen-2xl mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
          {articles?.articles?.map((article) => (
            <Article key={article.id} article={article}></Article>
          ))}
        </div>
      </div>
    );
};

export default AllArticle;
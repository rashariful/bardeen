import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({article}) => {
    const {
      title,
      description,
      publishedAt,
      urlToImage,
    } = article;
    return (
      <div className="card w-96 bg-base-100 shadow-sm mt-10">
        <figure>
          <img
            src={urlToImage}
            className="h-52 w-full hover:scale-110 transition duration-200"
            alt=""
          />
        </figure>
        <div className="card-body">
          <p>
            <small className="text-slate-500">{publishedAt.slice(0, 10)}</small>
          </p>

          {/* <h2 className="card-title">{title}</h2> */}
          <h3 className="mb-3 font-normal card-title text-gray-700 dark:text-gray-400">
            {title
              ? title
              : "N/A"}
          </h3>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description
              ? description.slice(0, 300) + "..."
              : "no description found"}
          </p>
          <div className="card-actions justify-end">
            <Link className="link link-error">Read more</Link>
          </div>
        </div>
      </div>
    );
};

export default Article;
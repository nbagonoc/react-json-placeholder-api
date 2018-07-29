import React from "react";

const NewsSingle = ({ item }) => {
  return (
    <div className="card mb-3">
      <a href={item.url} target="_blank">
        <img
          src={item.urlToImage}
          alt={item.title}
          className="img-fluid border-bottom"
        />
      </a>
      <div className="card-body">
        <h5 className="mb-0">{item.title}</h5>
        <span className="text-muted font-weight-light">{item.author}</span>
        <a
          href={item.url}
          target="_blank"
          className="btn btn-outline-success btn-block mt-3 mb-1"
        >
          Full article
        </a>
      </div>
    </div>
  );
};

export default NewsSingle;

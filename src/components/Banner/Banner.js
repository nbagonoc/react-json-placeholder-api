import React from "react";

const Banner = props => {
  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="jumbotron mb-3">
          <h1 className="text-capitalize display-4">{props.title}</h1>
          <p className="lead">{props.subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

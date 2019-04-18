import React from "react";
import { Link } from "react-router-dom";

const Library = props => {
  const cardStyles = {
    padding: "5px 5px 5px 5px",
    height: "600px"
  };
  return (
    <div className="row">
      <div className="col-6">
        <div className="card" style={cardStyles}>
          <img
            src="https://d1nz104zbf64va.cloudfront.net/dt/a/o/top-7-books-that-changed-the-world.jpg"
            className="card-img-top"
            height="450px"
          />
          {/* 
              image taken from internet. google images link:
              https://www.google.ca/search?hl=en&tbm=isch&source=hp&biw=1366&bih=657&ei=sXi4XKy9HoXj_AbJ84CADw&q=Books+image&oq=Books+image&gs_l=img.3..0l10.1696.4795..4963...0.0..0.94.870.11......1....1..gws-wiz-img.....0..35i39.lr8OJ_JTPbI#imgrc=RYA7QHhurU6q4M:
            */}
          <div className="card-body">
            <h5 className="card-title">Books</h5>
            <p className="card-text">
              Information on Books stored inside the library
            </p>
            <a className="btn btn-primary">Go to Books</a>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="card" style={cardStyles}>
          <img
            src="https://trafficsolder.com/wp-content/uploads/2018/07/Newscrane-Movie-feature.jpg"
            className="card-img-top"
            height="450px"
          />
          {/*
              Image taken from internet. Google images search link:
              https://www.google.ca/search?hl=en&biw=1366&bih=657&tbm=isch&sa=1&ei=tni4XOuwOaGZ_QbiqrT4DQ&q=movies+image&oq=movies+image&gs_l=img.3..0l4j0i5i30l6.482722.484422..484569...0.0..0.122.1070.10j2......1....1..gws-wiz-img.......0i67j35i39.NSLX6zhpx2A#imgrc=VoMXmE0UmGuVZM:
            */}
          <div className="card-body">
            <h5 className="card-title">Movies</h5>
            <p className="card-text">
              Information on Movies stored in the library
            </p>
            <a className="btn btn-primary">Go to Movies</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;

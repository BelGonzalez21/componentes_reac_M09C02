import React from "react";

const GenresInDb = (props) => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {/* /*en vez de index, si es que lo tiene se puede usar el id*/ }
            {props.genres.map((genre, i) => {
              return (
                <div className="col-lg-6 mb-4" key={genre + i}>
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">{genre}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenresInDb;
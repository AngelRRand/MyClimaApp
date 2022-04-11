import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className="indent-8">
      <div id="closeIcon" className="">
        <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
      </div>
      <div className="">
        <Link to={`/city/${id}`} >
          <h5 className="">{name}</h5>
        </Link>
        <div className="">
          <div className="">
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className="">
            <p>Max</p>
            <p>{max}°</p>
          </div>
          <div className="">
            <img className="iconoClima" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

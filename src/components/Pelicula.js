import React from 'react'
import { Link } from 'react-router-dom'
import "../style.css"; 

export default function Pelicula({id, title, poster_path}) {
   return (
      <div className="col-md-6 col-sm-12 col-lg-3 mb-5">
         <div className="">
            <Link to={`/peliculas/${id}`}>
               <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="shadow-5dp card-img custom-card-shadow" alt="images"/>
            </Link>
            <div className="card-body text-truncate">
               <p className="card-text text-center">{title}</p>
            </div>
         </div>
      </div>
   )
}

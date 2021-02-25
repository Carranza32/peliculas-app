import React from 'react'
import "../style.css";

export default function TarjetaDetalle(pelicula) {
   let genres;
   const duration = Math.floor(pelicula.runtime / 60) + 'h ' + pelicula.runtime % 60 + 'm';

   if (typeof pelicula.genres !== 'undefined') {
      genres = pelicula.genres.map(function(item){
         return (
            <span key={item.id} className="badge bg-warning text-dark me-2">{item.name}</span>
         )
      })
   }
   return (
      <div className="row">
         <div className="col-sm-12 col-md-6 d-flex justify-content-center">
            <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} className="shadow-7dp custom-card-shadow img-fluid" alt="images"/>
         </div>
         <div className="col-sm-12 col-md-6">
            <p className="fs-2">
               {pelicula.title}
               &nbsp;
               <span className="border p-1 rounded fs-6">{pelicula.release_date}</span>
               &nbsp;
               <span className="border p-1 rounded fs-6">{duration}</span>
            </p>
            
            <p>{pelicula.tagline}</p>
            <p className="fs-4">Overview</p>
            <p className="fs-6">{pelicula.overview}</p>
            <p>{genres}</p>
            <a className="text-decoration-none text-reset" href="#!">
               <i className="material-icons fs-4">play_circle</i>
            </a>
            &nbsp;
            <a className="text-decoration-none text-reset" target="_blank" href={pelicula.homepage}>
               <i className="material-icons fs-4">language</i>
            </a>
         </div>
      </div>
   )
}

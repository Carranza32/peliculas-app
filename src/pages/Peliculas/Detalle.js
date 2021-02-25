import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPeliculaById, getCastByMovie, getReviewsByMovie } from '../../helpers/getPeliculas';

import "../../style.css";
import TarjetaDetalle from '../../components/TarjetaDetalle';
import Cast from "../../components/Cast";
import ReviewCard from '../../components/ReviewCard';

export default function Detalle() {
   const { id } = useParams();

   const [pelicula, setPelicula] = useState({});
   const [casts, setCast] = useState([]);
   const [reviews, setReviews] = useState([]);

   useEffect(() => {
      getPeliculaById(id).then(resp => {
         setPelicula(resp);
      });
      getCastByMovie(id).then(resp => {
         setCast(resp);
      });
      getReviewsByMovie(id).then(resp => {
         setReviews(resp);
      });
      console.log("Did mount");
   }, []);

   console.log(reviews);

   return (
      <div>
         <header className="gradient-purple-blu bg-dark" 
            style={
               {backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${pelicula.backdrop_path})`}
            }>
            <div className="header-content">
               <TarjetaDetalle {...pelicula} />
            </div>
         </header>
         <div className="mt-5 container ">
            <h3>Cast</h3>
            <div className="overflow-auto flex-nowrap">
               {
                  casts.map(cast => (
                     <Cast key={cast.id} {...cast}/>
                  ))
               }
            </div>
         </div>
         <div className="mt-5 container">
            <h3>Reviews</h3>
            <div className="row">
               {(reviews.length === 0 ? <p className="center">No hay reviews</p> : <ReviewCard {...reviews[0]}/>)}
            </div>
         </div>
      </div>
   )
}

import React, { Fragment, useEffect, useState } from 'react'
import Pelicula from '../../components/Pelicula';
import { getPeliculas } from '../../helpers/getPeliculas'

export default function Index() {
   const [peliculas, setPeliculas] = useState([]);

   useEffect(() => {
      getPeliculas().then(resp => {
         setPeliculas(resp);
      });
      console.log("Did mount");
   }, [])

   return (
      <Fragment>
         <div className="container mt-5">
            <div className="row">
               {
                  peliculas.map(item => (
                     <Pelicula key={item.id} {...item} />
                  ))
               }
            </div>
         </div>
      </Fragment>
   )
}

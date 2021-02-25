import React from 'react'

export default function Cast({profile_path, name, character}) {
   return (
      <div className="m-3 custom-card-shadow">
         <div className="card-group">
            <div className="cast-card">
               <img src={`https://image.tmdb.org/t/p/w138_and_h175_face/${profile_path}`} className="card-img-to rounded-3 img-fluid " alt="character" />
               <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-subtitle text-muted">{character}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

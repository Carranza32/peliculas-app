import React from 'react'

export default function ReviewCard({author_details, content, created_at}) {
   return (
      <div class="card mb-3 custom-card-shadow">
         <div class="row g-0">
            <div class="col-md-1">
               <img src={`https://image.tmdb.org/t/p/w200/${author_details.avatar_path}`} className="float-end mt-3" height={50} alt="..."/>
            </div>
            <div class="col-md-11">
               <div class="card-body">
               <h5 class="card-title">{author_details.name}</h5>
               <p class="card-text">{content}</p>
               <p class="card-text"><small class="text-muted">Created at: {created_at}</small></p>
               </div>
            </div>
         </div>
      </div>
   )
}

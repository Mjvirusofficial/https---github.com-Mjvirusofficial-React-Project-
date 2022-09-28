import React from 'react'
// import {NavLink} from 'react-router-dom'
function Card(mj) {
  return (
    <>
      <div className="col-10 col-md-4 mx-auto">
        <div class="card">
          <img src={mj.pic} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{mj.name}</h5>
            <p class="card-text">{mj.about}</p>
            <a href={mj.link} class="btn ">
              Watch Now
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
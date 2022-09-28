import React from 'react'
import Card from './Card'
import MovieData from './MovieData'
import Navbar from './Navbar';

function SouthMovie() {

    return (
        <>
        <Navbar/>
          <div className='hdiv'>
            <div className="container">
                <h1 className='sm-heading text-center'>Top 6 South Love Story Movies❤️</h1>
            </div>
          
            <div className="container-fluid mt-3">
                <div className="row gy-5">
                    {MovieData.map((mj,virus)=>{
                        return <Card
                            pic={mj.img}
                            name={mj.tittle}
                            about={mj.desc}
                            link={mj.link}
                            key={virus}
                        />
                    })}
                </div>
                </div>
            </div>
        </>
    )
}

export default SouthMovie
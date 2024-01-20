import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar';
import styles from "../Styles/Home.module.scss";


export default function TVShows() {
  const [trendingTvs, setTrendingTvs] = useState([]);

  let getTrendingTvs = async () => {
    let { data } = await axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=c636ed7787cc302d96bf88ccf334e0d8")
    setTrendingTvs(data.results)
    console.log(data.results);
  }
  useEffect(() => {
    getTrendingTvs()
  }, [])
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row my-3 py-5">
          <div className="col-md-4">
            <div>
              <div className={`${styles.brdr} w-25 mb-4`}></div>
              <h3>Trending</h3>
              <h3>Tv Shows</h3>
              <h3>To watch now</h3>
              <span style={{ color: '#E0C595' }}>most watched TV Shows by day</span>
              <div className={`${styles.brdr} mt-4 w-100`}></div>
            </div>
          </div>

          {trendingTvs.slice(0.10).map((item, index) => (

            <div key={index} className='col-md-2'>
              <div className="item position-relative">
                <img
                  className="w-100"
                  style={{ height: '400px' }}
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt=""
                />

                <h2 className='h5 text-center'>{item.name}</h2>
                <span className='position-absolute top-0 end-0 p-2 bg-info'>{item.vote_average.toFixed(1)}</span>
              </div>
            </div>

          ))}
        </div>
      </div>
    </>
  )
}

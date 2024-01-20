import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../Styles/Home.module.scss";
import Navbar from "../components/Navbar/Navbar";
import bg1 from "../../../assests/bg1.png";
import bg2 from "../../../assests/bg2.png";


export default function Home() {
  const [trendingItems, setTrendingItems] = useState([]);

  useEffect(() => {
    getTrendingItems();
  }, []);

  let getTrendingItems = async () => {
    try {
      let { data } = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=c636ed7787cc302d96bf88ccf334e0d8"
      );
      setTrendingItems(data.results);
    } catch (error) {
      console.error("Error fetching trending items:", error);
    }
  };

  return (
    <>
      <Navbar />

      

      <div id="carouselExampleIndicators" className="carousel slide my-2">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{height:'80vh',objectFit:'contain'}} src={bg1} className="d-block w-100" alt="Allied" />
          </div>
          <div className="carousel-item">
            <img style={{height:'80vh',objectFit:'contain'}} src={bg2} className="d-block w-100" alt="Openhiemer" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span style={{backgroundColor:'grey',borderRadius:'50px'}} className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span style={{backgroundColor:'grey',borderRadius:'50px'}} className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid">
        <div className="row my-3 py-5">
          <div className="col-md-4">
            <div className="welcome">
              <div className="brdr w-25 mb-4"></div>
              <h3>Trending</h3>
              <h3>To watch now</h3>
              <span style={{ color: '#E0C595' }}>most watched Movies by day</span>
              <div className={`${styles.brdr} mt-4 w-100`}></div>
            </div>
          </div>
          {trendingItems.map((item, index) => (
            <div key={index} className="col-md-2">
              <div className="item positive-relative">
                <img
                  className="w-100"
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title || item.name}
                />
                <h6>
                  {item.title || item.name}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

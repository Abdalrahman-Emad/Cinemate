import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from "../Styles/Home.module.scss";
import Navbar from '../components/Navbar/Navbar';



export default function People() {
    const [trendingPersons, setTrendingPersons] = useState([]);

    let getTrendingPersons = async () => {
        let { data } = await axios.get("https://api.themoviedb.org/3/trending/person/day?api_key=c636ed7787cc302d96bf88ccf334e0d8")
        setTrendingPersons(data.results)
        console.log(data.results);
    }
    useEffect(() => {
        getTrendingPersons()
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
                        <h3>People</h3>
                        <h3>To watch now</h3>
                        {/* <span style={{ color: '#E0C595' }}>most watched People by day</span> */}
                        <div className={`${styles.brdr} mt-4 w-100`}></div>
                    </div>
                </div>

                {trendingPersons.slice(0.10).map((item, index) => (

                    <div key={index} className='col-md-2'>
                        <div className="item">
                            <img
                                className="w-100"
                                style={{ height: '400px', margin: '10px' }}
                                src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                                alt="" />

                            <h2 className='h6 text-center'>{item.name}</h2>
                        </div>
                    </div>

                ))}
            </div>
        </div></>)
}

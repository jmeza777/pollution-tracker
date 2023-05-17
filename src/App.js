import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Paypal from './Paypal';
import React, { useState, useEffect } from 'react';
import Pollution from './components/Pollution';
// import Pollution2 from './components/Pollution2';
// import Pollution3 from './components/Pollution3';
import { setData } from './index';
import { useDispatch, useSelector } from 'react-redux';
import About from './components/About';
import Airquality from './components/Airquality';
import Map from './Map';
import Citydisplay from './components/Citydisplay';

const App = () => {

    // const [data, setData] = useState([]);
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.dataReducer.data
  })
  console.log(data);
  
    useEffect(() => {
      const fetchData = async () => {
        await fetch(`${process.env.REACT_APP_API_URL}/air_pollution/forecast?lat=34.052235&lon=-118.243683&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
        dispatch(setData(result))
          console.log(result);
        });
      }
      fetchData();
    }, [dispatch] )
 


    // const [data2, setData2] = useState([])
    // useEffect(() => {
    //   const fetchData2 = async () => {
    //     await fetch(`${process.env.REACT_APP_API_URL}/air_pollution/forecast?lat=46.227638&lon=2.213749&appid=${process.env.REACT_APP_API_KEY}`)
    //     .then(res => res.json())
    //     .then(result => {
    //     (setData2(result))
    //       console.log(result);
    //     });
    //   }
    //   fetchData2();
    // }, [])

    // const [data3, setData3] = useState([])
    // useEffect(() => {
    //   const fetchData3 = async () => {
    //     await fetch(`${process.env.REACT_APP_API_URL}/air_pollution/forecast?lat=35.689487&lon=139.691711&appid=${process.env.REACT_APP_API_KEY}`)
    //     .then(res => res.json())
    //     .then(result => {
    //     (setData3(result))
    //       console.log(result);
    //     });
    //   }
    //   fetchData3();
    // }, [])
    // const handleButtonClick = () => {
    //   setData3();
    // };

    const [lat, setLat] = useState('')
    const [pollution, setPollution] = useState(null)
    const [lon, setLon] = useState('')
  
      function fetchData(e) {
  
        e.preventDefault()
  
        fetch(`${process.env.REACT_APP_API_URL}/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
        setPollution(result)
        setLat('')
        setLon('')
          console.log(result);
        });
      }


    // const [city, setCity] = useState('')
    // const [cityData, setCityData] = useState(null)

    // function getData(e) {

    //   e.preventDefault();
    //   console.log(city);
  
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
    //     .then(res => res.json())
    //     .then(result => {
    //     setCityData(result)
    //     setCity('')
    //     console.log(result);
    //     });
    //   }
  // useEffect(() =>{
  //   getData()
  // }, [])

  return (
    <>
  
    <Navbar />

    <About />

    
    {/* <input type="text" placeholder='Search for a city' value={city} onChange={(e) => setCity(e.target.value)} />
    <button type="submit" onClick={getData}>Find Me!</button> */}
    
    {/* <input type="text" placeholder="latitude" />
    <input type="text" placeholder="longitude" /> */}
    <h2>Enter your coordinates</h2>

    <div className="latitude-search">
    <input className="latitude-search" type="text" placeholder="latitude" value={lat} onChange={(e) => setLat(e.target.value)} />
    </div>
    <div className="longitude-search">
    <input className="longitude-search" type="text" placeholder="longitude" value={lon} onChange={(e) => setLon(e.target.value)} />
    </div>
    <div className="button">
    <button className="button" type="submit" onClick={fetchData} >Search</button>
    </div>
    {pollution && <Citydisplay  citySearch = {pollution} />}


    <Map />

    <h3 className="sample-data">Sample Data</h3>

    <div className="Pollution">
    {(typeof data.list != 'undefined') ? (
      <Pollution pollutionData={data} />
    ): (
      <div></div>
    )}
    
  </div>


  {/* <div className="Pollution">
    {(typeof data2.list != 'undefined') ? (
      <Pollution2 pollutionData2={data2}/>
    ): (
      <div></div>
    )}
    
  </div> */}

    {/* <div className="Pollution">
    

    {(typeof data3.list != 'undefined') ? (
      <Pollution3 pollutionData3={data3}/>
    ): (
      <div></div>
    )}
    
  </div>     */}

  <Airquality />
  
  <main className="paypal-container">
  <h3 className="paypal-checkout">Paypal Checkout</h3>
  <Paypal />
  </main>
    </>
  );
}

export default App
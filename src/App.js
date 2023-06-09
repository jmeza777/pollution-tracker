import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Paypal from './Paypal';
import React, { useEffect, useRef } from 'react';
import Pollution from './components/Pollution';
// import Pollution2 from './components/Pollution2';
// import Pollution3 from './components/Pollution3';
import { setData } from './index';
import { useDispatch, useSelector } from 'react-redux';
// import About from './components/About';
// import Airquality from './components/Airquality';
import Map from './Map';
// import Citydisplay from './components/Citydisplay';
// import Button from 'react-bootstrap/Button';
import { useInView } from "framer-motion";
// import Citydata from './components/Citydata';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';

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

    // const [city, setCity] = useState('')
    // const [coord, setCoord] = useState(null)
    // const [cityError, setCityError] = useState(false)
    // const [cityErrorCharacter, setCityErrorCharacter] = useState(false)

    // function fetchCoord(e) {
  
    //   e.preventDefault()
    //   console.log('test')
    //   if (!city || !isNaN(parseInt(city))) {
    //     setCityError(true);
    //     return;
    //   }
    //   if (/[!@#$%^&*()-_+=,<>.?/|]/.test(city)) {
    //     setCityErrorCharacter(true);
    //     return;
    //   }
    //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
    //   .then(res => res.json())
    //   .then(result => {
    //   if(result.message === "Nothing to geocode") {
    //     setCoord(null)
    //     setCityError(true)
    //   } else {
    //     setCoord(result)
    //     setCity('')
    //     setCityError(false)
    //     setCityErrorCharacter(false)
    //   }
    //     console.log(result);
    //   });
    // }

    // const [lat, setLat] = useState('')
    // const [pollution, setPollution] = useState(null)
    // const [lon, setLon] = useState('')
    // const [searchError, setSearchError] = useState(false)
  
    //   function fetchData(e) {
  
    //     e.preventDefault()
    //     console.log('test')
    //     fetch(`${process.env.REACT_APP_API_URL}/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
    //     .then(res => res.json())
    //     .then(result => {
    //     if(result.message === "Nothing to geocode") {
    //       setPollution(null)
    //       setSearchError(true)
    //     } else {
    //       setSearchError(false)
    //       setPollution(result)
    //       setLat('')
    //       setLon('')
    //     }
    //     // setPollution(result)
    //     // setLat('')
    //     // setLon('')
    //       console.log(result);
    //     });
    //   }


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

  function Div({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <div ref={ref}>
        <span
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </span>
      </div>
    );
  }

  return (
    <>
    <Router>
    <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/map" element={<Map/>}/>
        </Routes>
      </Router>
    {/* <Div> */}
    {/* <Navbar /> */}
    {/* </Div> */}

    {/* <About /> */}

    
    {/* <input type="text" placeholder='Search for a city' value={city} onChange={(e) => setCity(e.target.value)} />
    <button type="submit" onClick={getData}>Find Me!</button> */}
    
    {/* <input type="text" placeholder="latitude" />
    <input type="text" placeholder="longitude" /> */}
    {/* <Div> */}

    {/* <h2 className="coordinates-header">Enter your city</h2>

    <div className="longitude-search">
    <input className="longitude-search" type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}/>
    </div>
    <div className="button">
    <Button variant="success" className="button" type="submit" onClick={fetchCoord} >Search</Button>
    </div>

    {cityError ? <p className="error">Error: Cannot leave city name empty.</p> : null}
    {cityError ? <p className="error">Error: Cannot enter a number.</p> : null}
    {cityErrorCharacter ? <p className="error">Error: City name cannot contain special characters.</p> : null}

    {coord && <Citydata  Citydata = {coord} />}

    <h2 className="coordinates-header">Enter your coordinates</h2>

    <div className="latitude-search">
    <input className="latitude-search" type="number"  placeholder="Latitude" value={lat} onChange={(e) => setLat(e.target.value)} required/>
    </div>
    <div className="longitude-search">
    <input className="longitude-search" type="number" placeholder="Longitude" value={lon} onChange={(e) => setLon(e.target.value)} required/>
    </div>
    <div className="button">
    <Button variant="success" className="button" type="submit" onClick={fetchData} >Search</Button>
    </div>

    {searchError ? <p className="error">Error: Cannot leave geocode coordinates empty.</p> : null}

    {pollution && <Citydisplay  citySearch = {pollution} />} */}
    {/* </Div> */}

    {/* <Div> */}
    {/* <Map /> */}
    {/* </Div> */}

    <h3 className="sample-data">Sample Data</h3>

    <Div className="Pollution">
    {(typeof data.list != 'undefined') ? (
      <Pollution pollutionData={data} />
    ): (
      <div></div>
    )}
    
  </Div>


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
  {/* <Div>
  <Airquality />
  </Div> */}
  <Div>
  <main className="paypal-container">
  <h3 className="paypal-checkout">Paypal Checkout</h3>
  <div className='paypal-buttons'>
  <Paypal />
  </div>
  </main>
  </Div>
    </>
  );
}

export default App
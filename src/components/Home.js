import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Citydata from './Citydata';
import Citydisplay from './Citydisplay';
import Airquality from './Airquality';
// import { useInView } from "framer-motion";
const Home = () => {

    const [city, setCity] = useState('')
    const [coord, setCoord] = useState(null)
    const [cityError, setCityError] = useState(false)
    const [cityErrorCharacter, setCityErrorCharacter] = useState(false)

    function fetchCoord(e) {
  
      e.preventDefault()
      console.log('test')
      if (!city || !isNaN(parseInt(city))) {
        setCityError(true);
        return;
      }
      if (/[!@#$%^&*()-_+=,<>.?/|]/.test(city)) {
        setCityErrorCharacter(true);
        return;
      }
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
      if(result.message === "Nothing to geocode") {
        setCoord(null)
        setCityError(true)
      } else {
        setCoord(result)
        setCity('')
        setCityError(false)
        setCityErrorCharacter(false)
      }
        console.log(result);
      });
    }

    const [lat, setLat] = useState('')
    const [pollution, setPollution] = useState(null)
    const [lon, setLon] = useState('')
    const [searchError, setSearchError] = useState(false)
  
      function fetchData(e) {
  
        e.preventDefault()
        console.log('test')
        fetch(`${process.env.REACT_APP_API_URL}/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
        if(result.message === "Nothing to geocode") {
          setPollution(null)
          setSearchError(true)
        } else {
          setSearchError(false)
          setPollution(result)
          setLat('')
          setLon('')
        }
        // setPollution(result)
        // setLat('')
        // setLon('')
          console.log(result);
        });
      }
      
      // function Div({ children }) {
      //   const ref = useRef(null);
      //   const isInView = useInView(ref, { once: true });
      
      //   return (
      //     <div ref={ref}>
      //       <span
      //         style={{
      //           transform: isInView ? "none" : "translateX(-200px)",
      //           opacity: isInView ? 1 : 0,
      //           transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      //         }}
      //       >
      //         {children}
      //       </span>
      //     </div>
      //   );
      // }

  return (
    <>
    <h2 className="coordinates-header">Enter your city</h2>

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

    {pollution && <Citydisplay  citySearch = {pollution} />}

    
    <Airquality />
    

    </>
  )
}
export default Home
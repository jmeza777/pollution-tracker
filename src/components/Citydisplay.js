import React from 'react';
import Card from 'react-bootstrap/Card';
const Citydisplay = ({citySearch}) => {
  // console.log(citySearch);

  // const [pollutionstats, setPollutionstats] = useState('')
  // const [pollution, setPollution] = useState([])

  //   function fetchData(e) {

  //     e.prevenDefault()

  //     fetch(`${process.env.REACT_APP_API_URL}/air_pollution/forecast?lat=${pollutionstats}&lon=${pollutionstats}&appid=${process.env.REACT_APP_API_KEY}`)
  //     .then(res => res.json())
  //     .then(result => {
  //     (setPollutionstats(result))
  //       console.log(result);
  //     });
  //   }
  // const {citySearch} = citySearch; 
  return (
    <>
    {[
        'Secondary'
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>Pollution Data</Card.Header>
          <Card.Body>
            <Card.Title> Coordinates </Card.Title>
            <Card.Text>
    <p>Latitude:{citySearch.coord.lat}  Longitude:{citySearch.coord.lon}</p>
    <p>AQI: {citySearch.list[0].main.aqi}</p>
    <p>Carbon Monoxide(CO): {citySearch.list[0].components.co}</p>
    <p>Nitrogen Dioxide(NO2): {citySearch.list[0].components.no2}</p>
    <p>Ozone(O3): {citySearch.list[0].components.o3}</p>
    <p>Nitrogen Monoxide(NO): {citySearch.list[0].components.no}</p>
    <p>Sulfur Dioxdie(SO2): {citySearch.list[0].components.so2}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    {/* <p>{cityData.coord.lat}</p> */}
    <h2>{typeof citySearch != "undefined"}</h2>
    {/* <h2>{citySearch.coord.lat}</h2> */}
    {/* <input type="text" placeholder="latitude" value={citySearch.coord.lat} onChange={(e) => setPollutionstats(e.target.value)} />
    <input type="text" placeholder="longitude" value={citySearch.coord.lon}/>
    <button type="submit" onClick={fetchData} >Search</button> */}
    {/* <h1>Coordinates</h1>
    <h2>Latitude:{citySearch.coord.lat}   Longitude:{citySearch.coord.lon}</h2>
    <h2>AQI: {citySearch.list[0].main.aqi}</h2>
    <p>Carbon Monoxide(CO): {citySearch.list[0].components.co}</p>
    <p>Nitrogen Dioxide(NO2): {citySearch.list[0].components.no2}</p>
    <p>Ozone(O3): {citySearch.list[0].components.o3}</p>
    <p>Nitrogen Monoxide(NO): {citySearch.list[0].components.no}</p>
    <p>Sulfur Dioxdie(SO2): {citySearch.list[0].components.so2}</p> */}

    </>
  )
}
export default Citydisplay
import React from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const Citydata = ({Citydata}) => {

  const handleCopyClick = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard');
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };
  return (
    <>
    <h4 className='city-header'>City: {Citydata.name}</h4>
    <div className='coord'>
    <p className='city-lat'>Latitude: {Citydata.coord.lat}</p>
    </div>
    <div className='lat'>
    <Button className='lat-but' onClick={() => handleCopyClick(Citydata.coord.lat)}>Copy Latitude</Button>
    </div>
    <div className='coord'>
    <p className='city-lon'>Longitude: {Citydata.coord.lon}</p>
    </div>
    <div className='lon'>
    <Button className='lat-but' onClick={() => handleCopyClick(Citydata.coord.lon)}>Copy Longitude</Button>
    </div>
    <h2>{typeof Citydata != "undefined"}</h2>
    <h2>{typeof Citydata != Number}</h2>
    </>
  )
}
export default Citydata
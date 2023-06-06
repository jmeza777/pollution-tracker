import React from 'react'

const Citydata = ({Citydata}) => {
  return (
    <>
    <h4 className='city-header'>City: {Citydata.name}</h4>
    <p className='city-lat'>Latitude: {Citydata.coord.lat}</p>
    <p className='city-lon'>Longitude: {Citydata.coord.lon}</p>
    <h2>{typeof Citydata != "undefined"}</h2>
    </>
  )
}
export default Citydata
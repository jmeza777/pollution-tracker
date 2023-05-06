import { Table } from 'react-bootstrap';
import React from 'react'

export default function airquality() {
  return (
    <>
    <h2 className="header-explanation">Explanation</h2>
    <p className="header-info">Please click on the cloud icons on the map and you will get the AQI index.</p>
    <p className="header-info">Below is a table similar to openweatherapi website that illustrates the index, pollutant name and concentration in in μg/m3. AQI(Air Quality Index) is used to measure whether the air quality is good or bad.</p>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Qualitative Name</th>
          <th>Index</th>
          <th>Pollutant</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td>CO</td>
          <td>SO2</td>
          <td>NO2</td>
          <td>O3</td>
        </tr>
        <tr>
          <td>Good</td>
          <td>1</td>
          <td>0-4400</td>
          <td>0-20</td>
          <td>0-40</td>
          <td>0-60</td>
        </tr>
        <tr>
          <td>Fair</td>
          <td>2</td>
          <td>4400-9400</td>
          <td>20-80</td>
          <td>40-70</td>
          <td>60-100</td>
        </tr>
        <tr>
          <td>Moderate</td>
          <td>3</td>
          <td>9400-12400</td>
          <td>80-250</td>
          <td>70-150</td>
          <td>100-140</td>
        </tr>
        <tr>
          <td>Poor</td>
          <td>4</td>
          <td>12400-15400</td>
          <td>250-350</td>
          <td>150-200</td>
          <td>140-180</td>
        </tr>
        <tr>
          <td>Very Poor</td>
          <td>5</td>
          <td>greater than 15400</td>
          <td>greater than 350</td>
          <td>greater than 200</td>
          <td>greater than 180</td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}

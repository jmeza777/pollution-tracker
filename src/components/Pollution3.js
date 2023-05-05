import React from 'react';
import './Pollution3.css';
import { Table } from 'react-bootstrap';

const pollutionCard3 = ({pollutionData3}) => {
  return (
  <>
{/* <div>Hello</div>
<button onClick={() => pollutionData3}>click me!</button> */}
<Table striped bordered hover variant="dark" className="table">
      <thead>
        <tr>
          <th>Tokyo</th>
          <th>Carbon Monoxide (CO)</th>
          <th>Nitrogen Dioxide (NO2)</th>
          <th>Ozone (O3)</th>
          <th>Nitrogen Monoxide(NO)</th>
          <th>Sulfur Dioxide(SO2)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Concentration (μg/m3)</td>
          <td>{pollutionData3.list[0].components.co}</td>
          <td>{pollutionData3.list[0].components.no2}</td>
          <td>{pollutionData3.list[0].components.o3}</td>
          <td>{pollutionData3.list[0].components.no}</td>
          <td>{pollutionData3.list[0].components.so2}</td>
        </tr>
      </tbody>
    </Table>
  </>
  )
}

export default pollutionCard3;
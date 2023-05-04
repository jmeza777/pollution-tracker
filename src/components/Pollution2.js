import React from 'react';
import { Table } from 'react-bootstrap';


const pollutionCard2 = ({pollutionData2,}) => (
  <>
<Table striped bordered hover variant="dark" className="table">
      <thead>
        <tr>
          <th>France</th>
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
          <td>{pollutionData2.list[0].components.co}</td>
          <td>{pollutionData2.list[0].components.no2}</td>
          <td>{pollutionData2.list[0].components.o3}</td>
          <td>{pollutionData2.list[0].components.no}</td>
          <td>{pollutionData2.list[0].components.so2}</td>
        </tr>
      </tbody>
    </Table>
  </>
)

export default pollutionCard2;
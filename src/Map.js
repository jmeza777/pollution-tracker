import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import { Icon } from 'leaflet';

function Map ()  {

  const customIcon = new Icon({
    iconUrl: require("./components/carbon-dioxide.png"),
    iconSize: [50, 50]
  });


  return (
    <>
    <div className="map">
    <MapContainer center={[34.052235, -118.243683]} zoom={3}>
      <TileLayer 
       attribution= '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

        <Marker position={[34.052235, -118.243683]} icon={customIcon}>
          <Popup>Los Angeles</Popup>
        </Marker>

        <Marker position={[46.227638, 2.213749]} icon={customIcon}>
          <Popup>Paris</Popup>
        </Marker>

        <Marker position={[40.463669, -3.749220]} icon={customIcon}>
          <Popup>Spain</Popup>
        </Marker>

        <Marker position={[54.7023545, -3.2765753]} icon={customIcon}>
          <Popup>United Kingdom</Popup>
        </Marker>
        
    </MapContainer>
    </div>
    </>
  )
}

export default Map
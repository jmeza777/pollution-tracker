import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/carbon:smoke'
const LocationMarker = ({ lat, long, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
        <Icon icon={locationIcon} className="location-icon" />
    
    </div>
  )
}
export default LocationMarker
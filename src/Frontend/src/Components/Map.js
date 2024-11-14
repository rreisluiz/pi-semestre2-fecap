import styled from 'styled-components';
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// require('dotenv').config();

const MapContainer = styled.div`

`;

const containerStyle = {
    width: '100%',
    height: '600px'
};

const center = {
    lat: -23.556480135716644,
    lng: -46.63680436875619
};

function Map({pontosColeta}) {
    const [showInfoWindow, setShowInfoWindow] = useState(false);

    const handleMarkerClick = () => {
      setShowInfoWindow(true);
    };

    return (
        <MapContainer>
          <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              {pontosColeta.map((ponto, index) => (
                <React.Fragment key={index}> 
                  {showInfoWindow && (
                      <InfoWindow position={ponto.mapPosition} onCloseClick={() => setShowInfoWindow(false)}>
                      <div>
                        <h3>Localização</h3>
                        <p>Informações sobre este local</p>
                      </div>
                    </InfoWindow>
                  )}
                  <Marker
                    position={ponto.mapPosition}
                    onClick={handleMarkerClick}
                  />
                </React.Fragment>
              ))}
            </GoogleMap>
          </LoadScript>
        </MapContainer>
      );
}

export default React.memo(Map);
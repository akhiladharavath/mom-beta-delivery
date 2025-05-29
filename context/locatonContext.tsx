import React, { createContext, useContext, useState, useEffect } from 'react';
import * as Location from 'expo-location';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [locationCoords, setLocationCoords] = useState(null);
  const [locationName, setLocationName] = useState('Fetching location...');
  const [locationError, setLocationError] = useState(null);

  const fetchLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocationName('Permission denied');
        setLocationError('Location permission denied');
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({});
      setLocationCoords(coords);

      const geoCode = await Location.reverseGeocodeAsync({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });

      if (geoCode.length > 0) {
        const place = geoCode[0];
        const fullAddress = place.name ?? place.city ?? place.region ?? place.country ?? 'Unknown';
        setLocationName(fullAddress);
      }
    } catch (err) {
      console.error('Location error:', err);
      setLocationName('Location Error');
      setLocationError(err.message || 'Unknown error');
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        locationCoords,
        locationName,
        locationError,
        refreshLocation: fetchLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);

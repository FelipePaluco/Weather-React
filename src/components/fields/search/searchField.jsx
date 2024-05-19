import React, { useRef, useState } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import styles from './searchField.module.css';

const SearchField = ({ onLocationSelected }) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const inputRef = useRef(null);

  const onLoad = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      const latitude = place.geometry.location.lat();
      const longitude = place.geometry.location.lng();
      const city = place.address_components[0].long_name;
      const country =
        place.address_components[place.address_components.length - 1].long_name;

      onLocationSelected({ latitude, longitude, city, country });
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      libraries={['places']}
    >
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <input
          type="text"
          placeholder="Search for a city, state or country..."
          ref={inputRef}
          className={styles.searchInput}
        />
      </Autocomplete>
    </LoadScript>
  );
};

export default SearchField;

import React ,{ useEffect, useState } from 'react'

function Finddoner() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setError(null);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not available in your browser.");
    }
  }, []);
  return (
    <>
      <h1>Get User Location</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <p>
          Latitude: {latitude}, Longitude: {longitude}
        </p>
      )}
    </>
  )
}

export default Finddoner

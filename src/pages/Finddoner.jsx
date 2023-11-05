import React, { useState, useEffect } from 'react';
import axios from 'axios';



function App() {
  const [nearestUsers, setNearestUsers] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

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

  const findNearestUsers = async () => {
    try {
      const response = await axios.get('/nearest-users', {
        params: { latitude, longitude },
      });

      setNearestUsers(response.data);
    } catch (error) {
      console.error('Error finding nearest users:', error);
    }
  };

  return (
    <div>
      <h1>Find Nearest Users</h1>
      <div>
        <input
          type="text"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <input
          type="text"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <button onClick={findNearestUsers}>Find Nearest Users</button>
      </div>
      <ul>
        {nearestUsers.map((user) => (
          <li key={user.userId}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// Get user's location and reverse geocode to get address
navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
  
      console.log("Coordinates:", latitude, longitude);
  
      // Call Nominatim Reverse Geocoding API
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("Address:", data.display_name);
          // Display address on the page (optional)
          document.body.innerHTML = `<h2>Address:</h2><p>${data.display_name}</p>`;
        })
        .catch((err) => console.error("Error fetching address:", err));
    },
    (error) => console.error("Geolocation error:", error),
    { enableHighAccuracy: true }
  );
  
const btnCoord = document.querySelector("#btnCoord");
const latitudeShow = document.querySelector("#latitude");
const longitudeShow = document.querySelector("#longitude");
const address = document.querySelector("#address");

const accessDenied = document.querySelector("#accessDenied");
const userDenied = document.querySelector("#userDenied");

// ========================================== Button /
btnCoord.addEventListener("click", () => {
  fetchCoord();
});

// ========================================== Error Tost /
const errorTost = (message) => {
  accessDenied.textContent = message;
  accessDenied.style.top = "0px";

  setTimeout(() => {
    accessDenied.style.top = "-80px";
  }, 2000);
};

// ========================================== fetch Address - Short /
const addressShort = async (latitude, longitude) => {
  const locationAPI = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C+${longitude}&key=36a9b56165d24204a68479211af510f9`;

  try {
    const response = await fetch(locationAPI);
    const data = await response.json();
    address.textContent = `${data.results[0].formatted} ${data.results[0].annotations.flag}`;
    console.log(data.results[0]);
    errorTost("Address Fetched.");
  } catch (error) {
    console.log(error.message);
    errorTost("Error Fetching Address.");
  }
};

// ========================================== fetch Geolocation - Current Location /
const fetchCoord = () => {
  const getGeolocation = navigator.geolocation;

  // Geolocation Supported
  if (getGeolocation) {
    // Location Permission Allowed
    getGeolocation.watchPosition(
      (response) => {
        const { latitude, longitude } = response.coords;
        console.log(response.coords);

        latitudeShow.textContent = latitude;
        longitudeShow.textContent = longitude;

        addressShort(latitude, longitude);
      },
      (error) => {
        // Location Permission Not Allowed
        console.log(error.message);
        errorTost(error.message);
      }
    );
  } else {
    // Geolocation Not Supported
    errorTost("Geolocation may not supported!");
    console.log("Geolocation may not supported!");
  }
};

// ========================================== fetch Geolocation - Live Tracking /
const fetchLiveLocation = () => {
  const getLiveGeolocation = navigator.geolocation;

  // Geolocation Supported
  if (getLiveGeolocation) {
    // Location Permission Allowed
    getLiveGeolocation.getCurrentPosition(
      (response) => {
        const { latitude, longitude } = response.coords;
        console.log("live:", response.coords);

        latitudeShow.textContent = latitude;
        longitudeShow.textContent = longitude;
      },
      (error) => {
        // Location Permission Not Allowed
        console.log(error.message);
      }
    );
  } else {
    // Geolocation Not Supported
    errorTost("Geolocation may not supported!");
    console.log("Geolocation may not supported!");
  }
};

fetchLiveLocation();

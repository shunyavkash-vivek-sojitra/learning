const btnCoord = document.querySelector("#btnCoord");
const latitudeShow = document.querySelector("#latitude");
const longitudeShow = document.querySelector("#longitude");
const address = document.querySelector("#address");

const accessDenied = document.querySelector("#accessDenied");

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

  // Fetching Button
  const originalText = btnCoord.textContent;
  btnCoord.textContent = "Fetching...";
  btnCoord.disabled = true;

  try {
    const response = await fetch(locationAPI);
    const data = await response.json();

    if (data.results.length > 0) {
      address.textContent = `${data.results[0].formatted} ${data.results[0].annotations.flag}`;
      console.log(data.results[0]);
      errorTost("Address Fetched.");
    }
  } catch (error) {
    console.log(error.message);
    errorTost("Error Fetching Address.");
  } finally {
    // Revert to Original "Get Address"
    btnCoord.textContent = originalText;
    btnCoord.disabled = false;
  }
};

// ========================================== fetch Geolocation - Live Tracking /
const fetchLiveLocation = () => {
  const getLiveGeolocation = navigator.geolocation;

  // Geolocation Supported
  if (getLiveGeolocation) {
    // Location Permission Allowed
    getLiveGeolocation.watchPosition(
      (response) => {
        const { latitude, longitude } = response.coords;
        console.log("live:", response.coords);

        latitudeShow.textContent = latitude;
        longitudeShow.textContent = longitude;
        addressShort(latitude, longitude);
      },
      (error) => {
        // Location Permission Not Allowed
        let message = "";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message = "User denied the request for Geolocation.";
            break;
          case error.POSITION_UNAVAILABLE:
            message = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            message = "The request to get user location timed out.";
            break;
          default:
            message = "An unknown error occurred.";
        }
        console.log(message);
        errorTost("Error fetching live location.");
      }
    );
  } else {
    // Geolocation Not Supported
    errorTost("Geolocation may not supported!");
    console.log("Geolocation may not supported!");
  }
};

// ========================================== Button /
btnCoord.addEventListener("click", fetchLiveLocation);

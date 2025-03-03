const btnCoord = document.querySelector("#btnCoord");
const latitude = document.querySelector("#latitude");
const longitude = document.querySelector("#longitude");

btnCoord.addEventListener("click", () => {
  fetchCoord();
});

const fetchCoord = () => {
  const getGeolocation = navigator.geolocation;

  console.log(getGeolocation);

  if (getGeolocation) {
    const currentPosition = getGeolocation.getCurrentPosition(
      (resonse) => {
        latitude.textContent = resonse.coords.latitude;
        longitude.textContent = resonse.coords.longitude;
      },
      (error) => {
        console.log(error.message);
      }
    );

    console.log(currentPosition);
    // latitude.textContent = coords;
  } else {
    console.log("User denied location permission.");
  }
};

// free api - generate random use every time.
// Using then-catch or then-catch-finally()
let requestApi = "https://randomuser.me/api/";

const getUser = () => {
  const response = fetch(requestApi)
    .then((response) => {
      console.log("User: ", response);
    })
    .catch((error) => {
      console.error("ERROR: ", error.message);
    })
    .finally(() => {
      console.log("\nNew User is Created.");
    });

  return response;
};

getUser();

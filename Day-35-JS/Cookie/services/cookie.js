const value = "Cookie has been Set.";

const setCookie = () => {
  document.cookie = value;
};

setCookie();

const getCookie = () => {
  const cookie = document.cookie;
  return cookie;
};

console.log("Cookie: ", getCookie());

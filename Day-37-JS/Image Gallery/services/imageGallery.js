const gallery = document.querySelector("#gallery");
const category = "fashion";
let page = 1;
let isFetching = false;
let lastImage = null;

const fetchImages = async () => {
  if (isFetching) return;
  isFetching = true;

  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=49050555-2810989b0194ec56470b181e3&q=${category}&image_type=photo&page=${page}&per_page=12`
    );
    const data = await response.json();

    if (data.hits.length === 0) {
      observer.disconnect();
      return;
    }

    data.hits.forEach((image, index) => {
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("image-wrapper");

      const imgElement = document.createElement("img");
      imgElement.src = image.webformatURL;
      imgElement.alt = image.tags;
      imgElement.loading = "lazy";

      imageWrapper.appendChild(imgElement);
      gallery.appendChild(imageWrapper);

      if (index === data.hits.length - 1) {
        lastImage = imageWrapper;
      }
    });

    if (lastImage) {
      observer.observe(lastImage);
    }

    page++;
  } catch (error) {
    console.error("Error fetching images:", error);
  }

  isFetching = false;
};

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      observer.unobserve(entries[0].target);
      fetchImages();
    }
  },
  { threshold: 1.0 }
);

fetchImages();

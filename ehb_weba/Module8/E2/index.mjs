document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll(".lazy-image");
  const options = {
    rootMargin: "200px 0px",
    threshold: 0.01,
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.addEventListener("load", () => {
          img.classList.add("loaded");
        });

        observer.unobserve(img);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  lazyImages.forEach((image) => {
    observer.observe(image);
  });
});

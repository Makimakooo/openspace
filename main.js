document.addEventListener("DOMContentLoaded", function () {
  new Splide('#coworking-slider', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 3500,
    pauseOnHover: true,
    arrows: true,
    pagination: true,
    drag: true,         
    flickPower: 500,    
  }).mount();
});


mapboxgl.accessToken = 'pk.eyJ1IjoibWFraW1ha29vbyIsImEiOiJjbWVkNXFnZHcwNml2MmxwZjdzOXR5YnFhIn0.qlVlen_tyYgJshSRbdwdgg';

const map = new mapboxgl.Map({
  container: 'mapbox',
  style: 'mapbox://styles/mapbox/dark-v11',
  center: [30.518076, 50.444816],
  zoom: 12,
});

// Маркер
new mapboxgl.Marker()
  .setLngLat([30.518076, 50.444816])  
  .addTo(map);

  document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu");
  const dropdown = document.getElementById("dropdown");

  menuBtn.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
    dropdown.classList.toggle("opacity-100");
  });

  // Закрытие при клике вне меню
  document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add("hidden");
    }
  });
});

  const video = document.getElementById('bgVideo');
  video.playbackRate = 0.75; 


document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("sliderTrack");
  if (!track) return;

  const slides = Array.from(track.children);
  const prevBtn = document.getElementById("sliderPrev");
  const nextBtn = document.getElementById("sliderNext");
  const dotsContainer = document.getElementById("sliderDots");

  let currentIndex = 0;

  // Создаём точки
  const dots = slides.map((_, i) => {
    const dot = document.createElement("button");
    dot.className =
      "w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-gray-500 transition";
    if (i === 0) dot.classList.add("bg-gray-800");
    dotsContainer.appendChild(dot);
    dot.addEventListener("click", () => goToSlide(i));
    return dot;
  });

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-gray-800", i === currentIndex);
      dot.classList.toggle("bg-gray-300", i !== currentIndex);
    });
  }

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;
    updateSlider();
  }

  // Кнопки
  if (prevBtn) prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

  // Свайп на таче
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  track.addEventListener("touchstart", (e) => {
    if (!e.touches[0]) return;
    startX = e.touches[0].clientX;
    currentX = startX;
    isDragging = true;
  });

  track.addEventListener("touchmove", (e) => {
    if (!isDragging || !e.touches[0]) return;
    currentX = e.touches[0].clientX;
  });

  track.addEventListener("touchend", () => {
    if (!isDragging) return;
    const diff = currentX - startX;
    const threshold = 50; // пикселей
    if (diff > threshold) {
      // свайп вправо -> предыдущий слайд
      goToSlide(currentIndex - 1);
    } else if (diff < -threshold) {
      // свайп влево -> следующий слайд
      goToSlide(currentIndex + 1);
    }
    isDragging = false;
  });

  // init
  updateSlider();
});

  const video = document.getElementById('bgVideo');
  video.playbackRate = 0.75; 
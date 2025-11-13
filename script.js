
document.addEventListener("scroll", () => {
  const section = document.querySelector(".sobre");
  const pos = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (pos < windowHeight - 100) {
    document.querySelector(".sobre-img").style.opacity = "1";
    document.querySelector(".sobre-texto").style.opacity = "1";
  }
});



  const topicos = document.querySelectorAll('.topico');

  function revelarTopicos() {
    const windowHeight = window.innerHeight;
    topicos.forEach(t => {
      const topicoTop = t.getBoundingClientRect().top;
      if (topicoTop < windowHeight - 100) {
        t.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revelarTopicos);
  window.addEventListener('load', revelarTopicos);

//DEPOIMENTOS

const slides = document.querySelectorAll('.depo-slide');
const nextBtn = document.querySelector('.depo-btn.next');
const prevBtn = document.querySelector('.depo-btn.prev');
const dotsContainer = document.querySelector('.depo-dots');
let current = 0;

// Criar indicadores
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => showSlide(i));
  dotsContainer.appendChild(dot);
});
const dots = dotsContainer.querySelectorAll('button');

// Mostrar slide
function showSlide(i) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (i + slides.length) % slides.length;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}

// Botões
nextBtn.addEventListener('click', () => showSlide(current + 1));
prevBtn.addEventListener('click', () => showSlide(current - 1));

// Auto-play
setInterval(() => showSlide(current + 1), 6000);
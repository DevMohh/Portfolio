// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector(".navigate ul");
const nav = document.querySelector(".navigate");

// Scroll to top selection
const scroll = document.querySelector("#scroll");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scroll.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//Dark mode
// const checkbox = document.getElementById("checkbox")
// checkbox.addEventListener("change", () => {
//   document.body.classList.toggle("dark")
// })
const themeButton = document.getElementById('themeButton');
const navigation = document.querySelector('.navigate');
const heroSection = document.querySelector('.hero');
const heroImage = document.getElementById('heroImage');
const moonIcon = document.querySelector('#themeButton i');
const contactSection = document.getElementById('contact'); // Get the contact section element

let isNightMode = false; // Track the current mode

// Toggle hero image based on day or night mode
if (isNightMode) {
  heroImage.src = '/developer-portfolio/assets/images/Gif.gif';
} else {
  heroImage.src = '/developer-portfolio/assets/images/Secure data.gif';
}
// Toggle the mode
isNightMode = !isNightMode;

// Dark mode toggle function
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  navigation.classList.toggle('dark');
  heroSection.classList.toggle('dark');

  // Toggle background color of the contact section
  if (isNightMode) {
    contactSection.style.backgroundColor = 'var(--secondary-color)';
  } else {
    contactSection.style.backgroundColor = 'var(--dark-color)';
  }


  // Toggle moon and sun icons
  if (moonIcon.classList.contains('fa-moon')) {
    moonIcon.classList.remove('fa-moon');
    moonIcon.classList.add('fa-sun');
  } else {
    moonIcon.classList.remove('fa-sun');
    moonIcon.classList.add('fa-moon');
  }
}

themeButton.addEventListener('click', toggleDarkMode);

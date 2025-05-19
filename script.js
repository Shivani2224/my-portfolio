const greeting = document.getElementById("dynamic-greeting");

const hours = new Date().getHours();

if (hours < 12) {
  greeting.textContent = "Good Morning! 🌞";
} else if (hours < 18) {
  greeting.textContent = "Good Afternoon! 🌤️";
} else {
  greeting.textContent = "Good Evening! 🌙";
}
function createNavbar(containerId) {
  const navbarContainer = document.getElementById("navbar-container");

  const navbar = document.createElement("nav");
  navbar.className = "navbar";

  const brand = document.createElement("div");
  brand.className = "brand";
  brand.textContent = "Shivani's Portfolio";

  const menu = document.createElement("div");
  menu.className = "menu";

  const menuItems = [
    { text: "Home", href: "#" },
    { text: "About", href: "#profile" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects-container" },
    { text: "Contact", href: "#contactMe" },
  ];

  menuItems.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.text;
    menu.appendChild(link);
  });

  const toggle = document.createElement("div");
  toggle.className = "toggle";

  ["span", "span", "span"].forEach(() => {
    const bar = document.createElement("span");
    toggle.appendChild(bar);
  });

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  navbar.appendChild(brand);
  navbar.appendChild(toggle);
  navbar.appendChild(menu);

  navbarContainer.appendChild(navbar);
}
createNavbar("navbar-container");

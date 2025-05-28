const projects = [
  {
    name: "Rock-paper-Scissor",
    description:
      "A fun, interactive web-based game where players compete against the computer. Built with HTML, CSS, and JavaScript, it features dynamic gameplay, real-time feedback, and celebratory confetti animations for victories.",
    link: "https://github.com/Shivani2224/Rock-Paper-Scissor.git",
    image: "./picture/project/Rock-paper-Scissor.png",
  },
  {
    name: "To-Do App",
    description:
      "A user-friendly task management application designed to help you organize your daily activities. This project, built using HTML, CSS, and JavaScript, allows users to add, mark as completed, or delete tasks dynamically. ",
    link: "https://github.com/Shivani2224/To-Do-List.git",
    image: "./picture/project/To-Do-List.png",
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "A classic two-player Tic Tac Toe game built with HTML, CSS, and JavaScript. Players take turns marking X and O on a 3x3 grid, with real-time winner detection and a reset option to start a new game. The interface highlights the winning combination and clearly shows whose turn it is, providing an interactive and engaging user experience.",
    link: "https://github.com/Shivani2224/Tic-Tac-Toe-JavaScript.git",
    image: "./picture/project/Tic-Tac-Toe.png",
  },
  {
    name: "Drum Kit",
    description:
      "An interactive web-based drum kit that plays different drum sounds when users click the buttons or press corresponding keyboard keys. Built with HTML, CSS, and JavaScript, this project demonstrates event handling for both mouse and keyboard inputs, dynamic audio playback, and smooth UI animations. The design uses CSS animations and responsive styling for an engaging and user-friendly experience on different screen sizes.",
    link: "https://github.com/Shivani2224/Drum-Kit.git",
    image: "./picture/project/Drum kit .png",
  },
  {
    name: "QR Code Generator",
    description:
      "A QR code generator that lets users enter any URL and instantly creates a QR code image. Built using React, JavaScript, HTML, CSS, and the qrcode npm package for QR code generation. The app features a clean, responsive design for seamless use across devices. It provides instant visual feedback by displaying the generated QR code right after input submission.",
    link: "https://github.com/Shivani2224/QR_code_Generator",
    image: "./picture/project/QR-code.png",
  },
];

function projectHandler() {
  const container = document.querySelector(".project-list");
  const descriptionContainer = document.querySelector(".project-description");
  descriptionContainer.textContent = "Please select a project";
  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";

    const projectLink = document.createElement("a");
    projectLink.href = project.link;
    projectLink.target = "_blank";

    const projectImg = document.createElement("img");
    projectImg.src = project.image;
    projectImg.alt = project.name;
    projectImg.className = "project-image";

    projectLink.appendChild(projectImg);

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.name;

    projectDiv.appendChild(projectLink);
    projectDiv.appendChild(projectTitle);
    projectDiv.addEventListener("click", () => {
      descriptionContainer.textContent = project.description;
    });

    container.appendChild(projectDiv);
  });
}
projectHandler();

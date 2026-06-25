// app-config.js

// Load navbar and footer from components.html
fetch("../components.html")
  .then(res => res.text())
  .then(html => {

    // Create a temporary DOM for reading
    const temp = document.createElement("div");
    temp.innerHTML = html;

    // Inject navbar
    const navbar = temp.querySelector(".nav");
    document.getElementById("navbar").appendChild(navbar);

    // Inject footer
    const footer = temp.querySelector(".footer");
    document.getElementById("footer").appendChild(footer);
  });


  // I NEED TO GO THROUGH THIS
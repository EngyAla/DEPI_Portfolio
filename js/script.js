    let darkMode = localStorage.getItem("darkmode");
    let switchMode = document.querySelector(".switch_mode");

    const enableDarkMode = () => {
    localStorage.setItem("darkmode", "active");
    document.body.classList.add("darkmode");
    };

    const disableDarkMode = () => {
    localStorage.setItem("darkmode", null);
    document.body.classList.remove("darkmode");
    };

    if (darkMode === "active") enableDarkMode();

    switchMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkmode");
    darkMode !== "active" ? enableDarkMode() : disableDarkMode();
    });

    let skillsArr = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Bootstrap",
    "Chart.js",
    "Vite",
    "Responsive Web Design",
    "Git & GitHub",
    "UI/UX",
    ];
    let skills = document.querySelector(".skill_button");
    skills.innerHTML = skillsArr
    .map((skill) => {
        return `
        <button>${skill}</button>
        `;
    })
    .join("");

    let filter_btns = document.querySelectorAll("button");
    let projects_container = document.querySelector(".projects_container");

    let projectsArr = [
    {
        id: "js",
        title: "Mercedes Showcase Website",
        description:
        "A responsive website designed to highlight Mercedes cars with a sleek and modern interface, focusing on elegant UI/UX and smooth navigation.",
        img_src: "img/2019-Mercedes-Benz-G-Class-1.jpg",
        repo: "https://github.com/EngyAla/Mercedes",
        githup: "https://engyala.github.io/Mercedes/",
    },
    {
        id: "js",
        title: "To-Do List App",
        description:
        "A simple and interactive task management app that allows users to add, edit, and delete tasks, helping to organize daily activities efficiently.",
        img_src: "img/time-budgeting-for-remote-workers-1024x585.webp",
        repo: "https://github.com/EngyAla/Mercedes",
        githup: "https://engyala.github.io/Mercedes/",
    },
    {
        id: "js",
        title: "Weather App",
        description:
        "A web application that provides live weather updates by fetching data from a weather API, with a clean interface displaying temperature, conditions.",
        img_src: "img/spire-high-resolution-forecast-data.jpg",
        repo: "https://github.com/EngyAla/Mercedes",
        githup: "https://engyala.github.io/Mercedes/",
    },
    {
        id: "js",
        title: "Furniture E-Commerce Website",
        description:
        "An online furniture store built with React.js featuring product categories, shopping cart, favorites, and a smooth checkout experience.",
        img_src: "img/e-commerce-banner.jpg",
        repo: "https://github.com/EngyAla/Mercedes",
        githup: "https://engyala.github.io/Mercedes/",
    },
    {
        id: "js",
        title: "CRUD Management System",
        description:
        "A web app demonstrating Create, Read, Update, and Delete operations, allowing efficient data handling with a user-friendly interface.",
        img_src: "img/CRUD_Operations_Banner.png",
        repo: "https://github.com/EngyAla/Mercedes",
        githup: "https://engyala.github.io/Mercedes/",
    },
    {
        id: "react",
        title: "E-Commerce App",
        description:
        "E-Commerce Shopping App Description: A full-featured e-commerce application built with React.js, including product listing, categories, shopping cart, favorites, and a smooth checkout flow with responsive design.",
        img_src: "img/download.webp",
        repo: "https://github.com/EngyAla/Mercedes",
        githup: "https://engyala.github.io/Mercedes/",
    },
    {
        id: "react",
        title: "Daily Azkar & Quran Website",
        description:
        "A React-based Islamic website that provides Quran display, daily Azkar, prayer times, and Hijri calendar using APIs, with a simple and user-friendly design.",
        img_src: "img/70f03a124399429.6102f34d699ee.png",
        repo: "https://github.com/EngyAla/Mercedes",
        githup: "https://engyala.github.io/Mercedes/",
    },
    {
        id: "react",
        title: "Interactive Admin Dashboard",
        description:
        "A dynamic dashboard built with React.js featuring data visualization, charts, and CRUD operations, enabling easy management and real-time insights.",
        img_src: "img/600x0_Influencer-Dashboard.png",
        repo: "https://github.com/EngyAla/Mercedes",
        githup: "https://engyala.github.io/Mercedes/",
    },
    {
        id: "react",
        title: "Interactive Quiz App",
        description:
        "A React quiz application that allows users to answer multiple-choice questions, view scores instantly, and track progress with a clean and engaging interface.",
        img_src:
        "img/20963-01-quiz-maker-slides-toolkit-powerpoint-template-3-870x489.webp",
        repo: "https://github.com/EngyAla/Mercedes",
        githup: "https://engyala.github.io/Mercedes/",
    },
    {
        id: "react",
        title: "Real-Time Weather App",
        description:
        "A weather application built with React.js that fetches live data from weather APIs, showing temperature, conditions, and city details in an attractive UI.",
        img_src: "img/original-31b9575e298e495ca6cf2e4d7cd75b9c.webp",
        repo: "https://github.com/EngyAla/Mercedes",
        githup: "https://engyala.github.io/Mercedes/",
    },
    ];

    projects_container.innerHTML = projectsArr
    .map((e) => {
        return `<div class="project">
                        <div class="proj_img">
                            <img src=${e.img_src} alt="" width="297" height="200">
                        </div>
                        <div class="proj_text">
                            <h2 class="proj_title">${e.title}</h2>
                            <p class="proj_description">${e.description}</p>
                        </div>
                        <div class="proj_icons proj_text">
                            <a href=${e.repo} target="_blank"><i class="fa-solid fa-link"></i></a>
                            <a href=${e.githup} target="_blank"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>`;
    })
    .join("");

    filter_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        projects_container.innerHTML = "";
        projects_container.innerHTML = projectsArr
        .map((e) => {
            return `${
            id == "" || id === e.id
                ? `<div class="project">
                        <div class="proj_img">
                            <img src=${e.img_src} alt="" width="297" height="200">
                        </div>
                        <div class="proj_text">
                            <h2 class="proj_title">${e.title}</h2>
                            <p class="proj_description">${e.description}</p>
                        </div>
                        <div class="proj_icons proj_text">
                            <a href=${e.repo} target="_blank"><i class="fa-solid fa-link"></i></a>
                            <a href=${e.githup} target="_blank"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>`
                : ""
            }`;
        })
        .join("");
    });
    });
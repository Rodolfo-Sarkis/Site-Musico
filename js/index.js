const toggle = document.querySelector(".menu-toggle");
        const nav = document.querySelector(".main-nav");
        const header = document.querySelector(".site-header");

        toggle.addEventListener("click", () => {
            nav.classList.toggle("active");
            header.classList.toggle("menu-open");
        });
$(document).ready(function () {
    // Theme Toggle (Default is Dark Mode)
    const $themeToggle = $("#theme-toggle");
    
    $themeToggle.on("click", function () {
        $("body").toggleClass("dark-mode");
        if ($("body").hasClass("dark-mode")) {
            $(this).removeClass("fa-moon").addClass("fa-sun");
        } else {
            $(this).removeClass("fa-sun").addClass("fa-moon");
        }
    });

    // Mobile Menu
    $("#menu").on("click", function () {
        $(this).toggleClass("fa-times");
        $(".navbar").toggleClass("nav-toggle");
    });

    $(".navbar a").on("click", function () {
        $("#menu").removeClass("fa-times");
        $(".navbar").removeClass("nav-toggle");
    });

    // Scroll Effects
    $(window).on("scroll load", function () {
        if ($(window).scrollTop() > 60) {
            $("#scroll-top").addClass("active");
            $("header").addClass("scrolled");
        } else {
            $("#scroll-top").removeClass("active");
            $("header").removeClass("scrolled");
        }

        // Scroll Spy
        $("section").each(function () {
            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 200;
            let height = $(this).outerHeight();
            let id = $(this).attr("id");

            if (top > offset && top < offset + height) {
                $(".navbar ul li a").removeClass("active");
                $(".navbar").find(`[href="#${id}"]`).addClass("active");
            }
        });
    });

    // Typed.js setup for Moaaz
    if ($(".typing-text").length) {
        new Typed(".typing-text", {
            strings: ["Flutter Development", "Mobile Architecture", "Scalable Apps", "Team Leadership"],
            loop: true,
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 500
        });
    }

    // Vanilla Tilt
    if (typeof VanillaTilt !== "undefined") {
        VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 15, speed: 400 });
    }

    // 🌟 Scroll Reveal Animations (Animate Everything) 🌟
    if (typeof ScrollReveal !== "undefined") {
        // Base Setup (Reset = true means it animates every time you scroll past it)
        const sr = ScrollReveal({
            distance: '60px',
            duration: 1000,
            delay: 200,
            reset: true
        });

        // Header & Navbar
        sr.reveal('header', { origin: 'top', delay: 100, distance: '20px' });

        // General Headings
        sr.reveal('.heading', { origin: 'top', delay: 200 });

        // Hero Section elements
        sr.reveal('.home .content h2', { origin: 'left', delay: 300 });
        sr.reveal('.home .content p', { origin: 'left', delay: 400 });
        sr.reveal('.home .content .btn', { origin: 'left', delay: 500 });
        sr.reveal('.home .social-icons', { origin: 'bottom', delay: 600 });
        
        // About Section
        sr.reveal('.about .image', { origin: 'left', delay: 300 });
        sr.reveal('.about .content', { origin: 'right', delay: 400 });

        // Services Section
        sr.reveal('.services .box', { origin: 'bottom', interval: 200, delay: 300 });

        // Skills Section (Staggered items)
        sr.reveal('.skills .boxx', { origin: 'bottom', delay: 200 });
        sr.reveal('.tech-itemm', { origin: 'bottom', interval: 100, delay: 300 });

        // Projects Section
        sr.reveal('.projects .box', { origin: 'bottom', interval: 200, delay: 300 });

        // Experience Timeline
        sr.reveal('.experience .left', { origin: 'left', interval: 200, delay: 300 });
        sr.reveal('.experience .right', { origin: 'right', interval: 200, delay: 300 });

        // Testimonials
        sr.reveal('.testimonials .box', { origin: 'bottom', interval: 200, delay: 300 });

        // Contact & Footer
        sr.reveal('.contact .container p', { origin: 'top', delay: 200 });
        sr.reveal('.contact-links a', { origin: 'bottom', interval: 150, delay: 300 });
        sr.reveal('.footer p', { origin: 'bottom', delay: 200 });
    }

    // Particles.js with Red Theme match
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#D84040" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#8E1616", "opacity": 0.4, "width": 1 },
                "move": { "enable": true, "speed": 4, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
            },
            "retina_detect": true
        });
    }
});

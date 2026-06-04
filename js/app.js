// ============ HAMBURGER MENU ============
const hamburger = document.querySelector('.hamburger-menu');
const links = document.querySelector('.links');

hamburger.addEventListener('click', () => {
    links.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', () => {
        links.classList.remove('active');
    });
});

// ============ ACTIVE LINK ON SCROLL ============
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============ PORTFOLIO FILTER (ISOTOPE) ============
$(document).ready(function() {
    // Initialize Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'masonry'
    });

    // Filter items on button click
    $('.filter-btn').on('click', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

        // Update active button
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
    });
});

// ============ SKILL BARS ANIMATION ============
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkills = () => {
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress;
    });
};

// Trigger animation when skills section is in view
const skillsSection = document.querySelector('.about');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

if (skillsSection) {
    observer.observe(skillsSection);
}

// ============ COUNTER ANIMATION ============
const counters = document.querySelectorAll('.number');

const animateCounters = () => {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-num'));
        let current = 0;
        const increment = Math.ceil(target / 100);

        const updateCounter = () => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
            } else {
                counter.textContent = current;
                setTimeout(updateCounter, 10);
            }
        };

        updateCounter();
    });
};

// Trigger animation when records section is in view
const recordsSection = document.querySelector('.records');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

if (recordsSection) {
    counterObserver.observe(recordsSection);
}

// ============ SWIPER TESTIMONIALS CAROUSEL ============
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        }
    }
});

// ============ SCROLL TO TOP ============
const backBtn = document.querySelector('.back-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backBtn.style.display = 'flex';
    } else {
        backBtn.style.display = 'none';
    }
});

backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============ FORM SUBMISSION ============
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// ============ MOBILE MENU CLOSE ON LINK CLICK ============
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            links.classList.remove('active');
        }
    });
});
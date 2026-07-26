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
const recordsSection = document.querySelector('.records');
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

const updateStats = (stats = {}) => {
    const statValues = [
        stats.projects ?? 235,
        stats.clients ?? 174,
        stats.workingHours ?? 892,
        stats.awards ?? 368
    ];

    const numberIds = ['projectsCount', 'clientsCount', 'workingHoursCount', 'awardsCount'];

    numberIds.forEach((id, index) => {
        const counter = document.getElementById(id);
        if (counter) {
            counter.setAttribute('data-num', statValues[index]);
            counter.textContent = '0';
        }
    });

    if (recordsSection && recordsSection.getBoundingClientRect().top < window.innerHeight) {
        animateCounters();
    }
};

const renderProjects = (projects = []) => {
    const container = document.getElementById('managedProjects');
    if (!container) return;

    if (!projects.length) {
        container.innerHTML = '<p class="text">No projects added yet.</p>';
        return;
    }

    container.innerHTML = projects.map(project => {
        const safeLink = project.link || '#';
        return `<a href="${safeLink}" target="_blank" rel="noopener noreferrer">${project.name || 'Project'}</a>`;
    }).join('');
};

const renderUpcomingProjects = (upcomingProjects = []) => {
    const container = document.getElementById('upcomingProjectsList');
    if (!container) return;

    if (!upcomingProjects.length) {
        container.innerHTML = '<div class="upcoming-card"><p class="text">No upcoming projects added yet.</p></div>';
        return;
    }

    container.innerHTML = upcomingProjects.map(project => {
        const images = project.images || [];
        return `
            <div class="upcoming-card">
                <h4>${project.title || 'Upcoming project'}</h4>
                <p class="text">${project.summary || 'A new project is being prepared.'}</p>
                ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn small">View project</a>` : ''}
                <div class="upcoming-images">
                    ${images.length ? images.slice(0, 3).map(image => `<img src="${image}" alt="Upcoming project image" />`).join('') : '<p class="text">No images uploaded yet.</p>'}
                </div>
            </div>
        `;
    }).join('');
};

const RATINGS_KEY = 'portfolioRatings';

const renderRatings = () => {
    const ratingScore = document.getElementById('ratingScore');
    const ratingStars = document.getElementById('ratingStars');
    const ratingCount = document.getElementById('ratingCount');
    const ratingList = document.getElementById('ratingList');
    if (!ratingScore || !ratingStars || !ratingCount || !ratingList) return;

    const ratings = JSON.parse(localStorage.getItem(RATINGS_KEY) || '[]');
    if (!ratings.length) {
        ratingScore.textContent = '0.0';
        ratingStars.textContent = '☆☆☆☆☆';
        ratingCount.textContent = '0 ratings';
        ratingList.innerHTML = '<div class="rating-item"><p class="text">No ratings yet. Be the first to leave feedback.</p></div>';
        return;
    }

    const average = (ratings.reduce((total, rating) => total + Number(rating.stars || 0), 0) / ratings.length).toFixed(1);
    const filledStars = '★'.repeat(Math.round(Number(average))) + '☆'.repeat(5 - Math.round(Number(average)));
    ratingScore.textContent = average;
    ratingStars.textContent = filledStars;
    ratingCount.textContent = `${ratings.length} rating${ratings.length === 1 ? '' : 's'}`;
    ratingList.innerHTML = ratings.map(rating => `
        <div class="rating-item">
            <strong>${rating.name || 'Client'}</strong>
            <p class="text">${rating.comment || ''}</p>
            <p class="text"><small>${'★'.repeat(Number(rating.stars || 0))}${'☆'.repeat(5 - Number(rating.stars || 0))}</small></p>
        </div>
    `).join('');
};

const normalizeSocialUrl = (value = '') => {
    const trimmed = String(value).trim();
    if (!trimmed) return '';
    if (/^https?:\/\//i.test(trimmed) || /^mailto:/i.test(trimmed)) {
        return trimmed;
    }
    return `https://${trimmed}`;
};

const renderSocialLinks = (socialLinks = {}) => {
    document.querySelectorAll('.social-link').forEach((anchor) => {
        const platform = anchor.getAttribute('data-social-platform');
        const url = normalizeSocialUrl(socialLinks[platform] || '');

        if (url) {
            anchor.href = url;
            anchor.setAttribute('target', '_blank');
            anchor.setAttribute('rel', 'noopener noreferrer');
        } else {
            anchor.removeAttribute('href');
            anchor.removeAttribute('target');
            anchor.removeAttribute('rel');
        }
    });
};

const applyImageContent = (content = {}) => {
    const images = content.images || {};

    const setImageFromValue = (element, value) => {
        if (value) {
            element.src = value;
        }
    };

    const logoImage = document.querySelector('.logo img');
    if (logoImage) {
        setImageFromValue(logoImage, images.logo);
    }

    const heroImage = document.querySelector('img[data-image-role="hero"]');
    if (heroImage) {
        setImageFromValue(heroImage, images.hero);
    }

    const aboutImage = document.querySelector('img[data-image-role="about"]');
    if (aboutImage) {
        setImageFromValue(aboutImage, images.about);
    }

    document.querySelectorAll('.gallery-image img').forEach((img, index) => {
        const imageValue = images.portfolio?.[index];
        if (imageValue) {
            setImageFromValue(img, imageValue);
        }
    });

    document.querySelectorAll('img[data-image-role^="service-icon"]').forEach((img, index) => {
        const imageValue = images.serviceIcons?.[index];
        if (imageValue) {
            setImageFromValue(img, imageValue);
        }
    });
};

const applyPortfolioContent = (content = {}) => {
    updateStats(content.stats || {});
    renderProjects(content.projects || []);
    renderUpcomingProjects(content.upcomingProjects || content.upcoming?.projects || []);
    renderSocialLinks(content.socialLinks || {});
    applyImageContent(content);
    renderRatings();
};

const loadPortfolioContent = async () => {
    try {
        const savedContent = localStorage.getItem('portfolioContent');
        if (savedContent) {
            const parsed = JSON.parse(savedContent);
            applyPortfolioContent(parsed);
        }

        const response = await fetch('/api/content');
        if (!response.ok) throw new Error('Unable to load portfolio data');
        const data = await response.json();
        localStorage.setItem('portfolioContent', JSON.stringify(data));
        applyPortfolioContent(data);
    } catch (error) {
        console.error(error);
    }
};

window.addEventListener('storage', (event) => {
    if (event.key === 'portfolioContent' && event.newValue) {
        applyPortfolioContent(JSON.parse(event.newValue));
    }
});

window.addEventListener('portfolioContentUpdated', (event) => {
    if (event.detail) {
        applyPortfolioContent(event.detail);
    }
});

loadPortfolioContent();

const ratingForm = document.getElementById('ratingForm');
if (ratingForm) {
    ratingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(ratingForm);
        const ratings = JSON.parse(localStorage.getItem(RATINGS_KEY) || '[]');
        ratings.unshift({
            name: formData.get('raterName') || 'Client',
            role: formData.get('raterRole') || '',
            comment: formData.get('raterComment') || '',
            stars: Number(formData.get('stars') || 5)
        });
        localStorage.setItem(RATINGS_KEY, JSON.stringify(ratings));
        ratingForm.reset();
        renderRatings();
    });
}

renderRatings();

// Trigger animation when records section is in view
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
    contactForm.addEventListener('submit', () => {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.textContent = 'Sending...';
        }
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
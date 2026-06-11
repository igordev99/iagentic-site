// ====== NAVBAR SCROLL ======
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ====== MOBILE MENU ======
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    hamburger.classList.toggle('active');
});
mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('active');
    });
});

// ====== FAQ ACCORDION ======
document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
    });
});

// ====== SERVICE CAROUSEL ======
const svcCards = document.querySelectorAll('#svc-cards .svc-card');
let svcPage = 0;
const perPage = 2;
const totalPages = Math.ceil(svcCards.length / perPage);

function showSvcPage(p) {
    svcCards.forEach((c, i) => {
        const start = p * perPage;
        const isVisible = i >= start && i < start + perPage;
        c.style.display = isVisible ? '' : 'none';
        c.classList.toggle('svc-hidden', !isVisible);
        if (isVisible) {
            c.style.opacity = '0';
            c.style.transform = 'translateY(20px)';
            setTimeout(() => {
                c.style.transition = 'opacity .4s ease, transform .4s ease';
                c.style.opacity = '1';
                c.style.transform = 'translateY(0)';
            }, (i - start) * 100);
        }
    });
}

function nextServicePage() {
    svcPage = (svcPage + 1) % totalPages;
    showSvcPage(svcPage);
}

document.getElementById('prev-svc').addEventListener('click', () => {
    svcPage = (svcPage - 1 + totalPages) % totalPages;
    showSvcPage(svcPage);
    resetAutoPlay();
});
document.getElementById('next-svc').addEventListener('click', () => {
    nextServicePage();
    resetAutoPlay();
});
showSvcPage(0);

let autoPlayTimer = setInterval(nextServicePage, 5000);
function resetAutoPlay() {
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(nextServicePage, 5000);
}

// ====== HERO ENTRY ANIMATION ======
window.addEventListener('DOMContentLoaded', () => {
    const heroInner = document.querySelector('.hero-inner');
    if (heroInner) {
        heroInner.style.opacity = '0';
        heroInner.style.transform = 'translateY(40px)';
        setTimeout(() => {
            heroInner.style.transition = 'opacity 1s ease, transform 1s ease';
            heroInner.style.opacity = '1';
            heroInner.style.transform = 'translateY(0)';
        }, 200);
    }
});

// ====== SCROLL REVEAL ======
const revealEls = document.querySelectorAll(
    '#about .about-text, #services .services-layout, ' +
    '#stats .stats-title, #stats .stats-subtitle, #stats .stats-grid, ' +
    '#features .label-orange, #features .bento-row, ' +
    '#integrations .big-heading, #integrations .integrations-split, #integrations .orbit-area, ' +
    '#benefits .benefits-grid, ' +
    '#logos-section .logos-marquee, ' +
    '#team .section-center-title, #team .team-grid, ' +
    '#testimonials .section-center-title, #testimonials .testimonials-grid, ' +
    '#faq .section-center-title, #faq .faq-list, ' +
    '#cta .cta-box, #contact .section-center-title, #contact .contact-form, ' +
    '#partners .partners-label'
);
revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

// ====== TEAM CARDS STAGGERED REVEAL ======
const teamCards = document.querySelectorAll('.team-card');
const teamObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const cards = e.target.querySelectorAll('.team-card');
            cards.forEach((card, i) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    card.style.transition = 'opacity .6s ease, transform .6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, i * 150);
            });
            teamObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.2 });
const teamGrid = document.querySelector('.team-grid');
if (teamGrid) teamObserver.observe(teamGrid);

// ====== ORBIT ANIMATION ======
// Orbital rotation is now handled via CSS animations (.orbit-area and .orbit-dot)

// Add orbit pulse keyframes dynamically (Center pulse only)
const orbitStyle = document.createElement('style');
orbitStyle.textContent = `
    @keyframes orbitPulse {
        0%, 100% { box-shadow: 0 0 20px rgba(0,217,255,.2); }
        50% { box-shadow: 0 0 40px rgba(0,217,255,.4); }
    }
`;
document.head.appendChild(orbitStyle);

// Orbit center pulse
const orbitCenter = document.querySelector('.orbit-center');
if (orbitCenter) {
    orbitCenter.style.animation = 'orbitPulse 3s ease-in-out infinite';
}

// ====== SMOOTH SCROLL ======
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Handle closing modal without jumping to top
        if (href === '#') {
            e.preventDefault();
            history.replaceState('', document.title, window.location.pathname + window.location.search);
            // In addition to replaceState (which removes the hash cleanly from the URL bar), we need to manually blur/un-target the element or just set hash to empty.
            window.location.hash = '';
            return;
        }
        
        // Handle opening modal
        if (href === '#loginModal') {
            e.preventDefault();
            window.location.hash = 'loginModal';
            return;
        }
        
        // Regular smooth scroll
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.pageYOffset - navbar.offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});

// ====== CONTACT FORM ======
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.innerHTML = 'Enviando...';
    btn.style.opacity = '.7';
    btn.disabled = true;
    setTimeout(() => {
        btn.innerHTML = 'Mensagem Enviada! ✓';
        btn.style.background = '#10b981';
        btn.style.color = '#fff';
        setTimeout(() => {
            btn.innerHTML = orig;
            btn.style.opacity = '1';
            btn.style.background = '';
            btn.style.color = '';
            btn.disabled = false;
            e.target.reset();
        }, 2000);
    }, 1500);
});

// ====== PARALLAX GLOWS ======
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    const glowCyan = document.querySelector('.hero-glow-cyan');
    const glowPurple = document.querySelector('.hero-glow-purple');
    if (glowCyan) {
        glowCyan.style.transform = `translate(${x * 30}px, ${y * 20}px)`;
        glowCyan.style.transition = 'transform 0.3s ease-out';
    }
    if (glowPurple) {
        glowPurple.style.transform = `translate(${x * -20}px, ${y * -15}px)`;
        glowPurple.style.transition = 'transform 0.3s ease-out';
    }
});

// ====== COUNTER ANIMATION (Stats) ======
function animateCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = Math.round(current);
        }, 16);
    });
}
// Trigger counters when stats section is visible
const statsGrid = document.querySelector('.stats-grid');
if (statsGrid) {
    const statsObs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                animateCounters();
                statsObs.unobserve(e.target);
            }
        });
    }, { threshold: 0.3 });
    statsObs.observe(statsGrid);
}

// ====== NAVBAR ACTIVE LINK ======
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + navbar.offsetHeight + 100;
    sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === '#' + id) {
                    link.style.color = 'var(--white)';
                }
            });
        }
    });
});

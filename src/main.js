import '@fontsource/fira-sans/400.css';
import '@fontsource/fira-sans/500.css';
import '@fontsource/fira-sans/600.css';
import '@fontsource/fira-sans/700.css';
import '@fontsource/fira-sans/800.css';
import '@fontsource/fira-sans/900.css';
import '@fontsource/outfit/800.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import './styles.css';

import { icon, brandIcon, githubIcon, star } from './icons.js';
import { projectVisuals } from './visuals.js';
import {
  EMAIL, GITHUB, NAME, FULL_NAME, ACADEMIC_STATUS, roles, skills, process as steps, projects, lab, experience, chapters, softSkills,
} from './data.js';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const pad2 = (n) => String(n).padStart(2, '0');
const YEAR = new Date().getFullYear();
const NAME_UP = NAME.toUpperCase();
const BASE = import.meta.env.BASE_URL;

const wave = (cls = '', d = 'M0 44C180 92 360 8 600 38S1000 86 1200 48 1380 12 1440 34V80H0Z') =>
  `<svg class="wave ${cls}" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true"><path d="${d}"/></svg>`;

/* ------------------------------------------------------------------ markup */
const app = document.querySelector('#app');
app.innerHTML = `
<div class="loader" id="loader" aria-hidden="true">
  <div class="loader-stage">
    <div class="loader-grid"></div>
    <span class="loader-corner tl">PORTFOLIO / ${YEAR}</span>
    <span class="loader-corner tr">${NAME_UP}_NDUVA</span>
    <span class="loader-side left">KENYA / CHUKA</span>
    <span class="loader-side right">CODE / DESIGN</span>
    <div class="loader-center">
      <div class="loader-welcome"><i></i><span>WELCOME</span><i></i></div>
      <div class="loader-word" data-text="${NAME_UP}"><span class="lw-text">${NAME_UP}</span><span class="lw-dot">.</span></div>
      <div class="loader-rule"></div>
      <div class="loader-role"><b></b><span>FULL STACK DEVELOPER</span><b></b></div>
    </div>
    <div class="loader-init"><span>INITIALIZING <em id="ld1">•</em><em id="ld2">•</em><em id="ld3">•</em></span><div class="loader-bar"><i id="loader-bar"></i></div></div>
  </div>
</div>

<header class="site-header" id="site-header">
  <div class="nav-inner">
    <a class="brand" href="#home" aria-label="${FULL_NAME} — home">${NAME_UP}<span>.</span></a>
    <nav class="desktop-nav" aria-label="Primary navigation">
      <a href="#home" data-nav="home">Home</a><a href="#about" data-nav="about">About</a><a href="#skills" data-nav="skills">Skills</a><a href="#projects" data-nav="projects">Projects</a><a href="#contact" data-nav="contact">Contact</a>
    </nav>
    <a class="hire-btn" href="#contact">Hire Me</a>
    <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">${icon('menu', 22)}</button>
  </div>
  <div class="mobile-menu" aria-hidden="true">
    <a href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
  </div>
</header>

<main>
  <!-- HERO -->
  <section class="hero" id="home">
    <div class="hero-bg"></div>
    <div class="hero-copy">
      <h1 aria-label="Hi, I'm ${NAME_UP}, ${roles[0]}"><span class="h1-line">Hi, I'm ${NAME_UP},</span><span class="h1-line"><span id="role-text"></span><span class="caret"></span></span></h1>
      <p class="hero-lede">I build practical software across web, mobile and backend systems — with a clean, considered point of view.</p>
      <div class="hero-actions">
        <a class="pill pill-dark" href="#projects">View My Work ${icon('arrow', 14, 2)}</a>
        <a class="pill pill-soft" href="#contact">Contact Me</a>
        <a class="pill pill-ghost" href="${GITHUB}" target="_blank" rel="noreferrer">${githubIcon(15)} GitHub</a>
      </div>
      <div class="socials">
        <a href="${GITHUB}" target="_blank" rel="noreferrer" aria-label="GitHub">${githubIcon(19)}</a>
        <a href="mailto:${EMAIL}" aria-label="Email">${icon('mail', 19, 1.8)}</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="monitor">
        <div class="monitor-body">
          <div class="monitor-top"><span><i class="dot dot-amber"></i>${NAME_UP}</span><span>ON<i class="dot dot-amber"></i></span></div>
          <div class="monitor-screen">
            <video id="hero-video" muted loop playsinline preload="auto" poster="${BASE}media/hero-poster.jpg" aria-label="Portrait of ${FULL_NAME}">
              <source src="${BASE}media/hero-loop.webm" type="video/webm" /><source src="${BASE}media/hero-loop.mp4" type="video/mp4" />
            </video>
            <div class="screen-glare"></div><div class="screen-scan"></div>
          </div>
          <div class="monitor-chin"><div class="speaker">${'<i></i>'.repeat(14)}</div><div class="chin-row"><b></b><u></u><b></b></div></div>
        </div>
        <div class="leg leg-l"></div><div class="leg leg-r"></div>
      </div>
    </div>
    <a class="scroll-cue" href="#about" aria-label="Scroll to About">${icon('arrowDown', 20, 1.6)}</a>
  </section>

  <!-- ABOUT -->
  <section class="about" id="about">
    ${wave('wave-top wave-paper')}
    <span class="star star-a">${star(54)}</span><span class="star star-b">${star(40)}</span>
    <div class="container about-grid">
      <div class="lanyard-wrap">
        <div class="lanyard" id="lanyard" tabindex="0" aria-label="Draggable ID card">
          <div class="strap"></div>
          <div class="clip"></div>
          <div class="id-card"><img src="${BASE}media/portrait-card.jpg" alt="Portrait of ${FULL_NAME}" draggable="false" width="688" height="860" /></div>
        </div>
      </div>
      <div class="about-copy reveal">
        <h2 class="about-title">Hello!</h2>
        <p class="about-intro">Hi, my name is <strong>${NAME_UP}</strong>. I care about building clear, useful and refined digital products.</p>
        <p>I’m a ${ACADEMIC_STATUS} at Chuka University, building a practical foundation in software engineering across web, mobile, backend systems and data. I like understanding how a product works — from the first interaction to the systems underneath.</p>
        <p>My approach is hands-on: understand the problem, shape the structure, build carefully, and keep improving the details that make a product easier to use. I value readable work, strong collaboration and interfaces that communicate without unnecessary noise.</p>
        <p>Outside the code itself, I enjoy the visual side of digital work: pacing, composition, motion and the small interactions that give a project its character.</p>
      </div>
    </div>
    ${wave('wave-bottom wave-light')}
  </section>

  <!-- SKILLS -->
  <section class="skills" id="skills">
    <div class="container">
      <header class="sec-head reveal"><span class="chip">Technical Stack</span><h2 class="sec-title caps">My Skillset</h2><p class="sec-sub">A comprehensive overview of my programming languages, frameworks, databases and engineering concepts.</p></header>
      <div class="skill-grid">
        ${skills.map(([n, cat, ico, kind], i) => `
        <article class="skill-card reveal" style="--d:${(i % 6) * 55}ms">
          <span class="skill-ico">${kind === 'brand' ? brandIcon(ico, 26) : icon(ico, 26, 1.6)}</span>
          <h3>${n}</h3><p>${cat}</p><i class="skill-bar"></i>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <section class="process" id="process">
    <div class="container">
      <header class="proc-head reveal"><span class="chip">My Process</span><h2 class="sec-title left">How I Build</h2><p class="sec-sub left">From a simple idea to a polished digital experience — I combine development, design and careful thinking at every stage.</p></header>
      <div class="timeline">
        <div class="tl-line"><i></i></div>
        ${steps.map(([t, d, ico, tags], i) => `
        <article class="step reveal" style="--d:${i * 110}ms; --step-off:${[0, 38, 12, 62][i]}px">
          <span class="tl-dot"></span>
          <div class="step-card">
            <div class="step-top"><span class="step-ico">${icon(ico, 18, 1.9)}</span><em>STAGE ${pad2(i + 1)}</em></div>
            <h3>${t}</h3><p>${d}</p>
            <div class="chips">${tags.map((x) => `<span>${x}</span>`).join('')}</div>
          </div>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section class="projects" id="projects">
    <div class="container">
      <header class="sec-head reveal"><span class="chip chip-ghost">Featured Projects</span><h2 class="sec-title big">Work that speaks for itself</h2><p class="sec-sub">A focused selection of work built around clear interfaces, thoughtful interaction and practical digital experiences.</p></header>
      <div class="project-grid">
        ${projects.map((p, i) => `
        <article class="project-card reveal" style="--d:${i * 120}ms">
          <div class="project-media">${p.image ? `<img src="${BASE}${p.image}" alt="${p.title} desktop preview" loading="lazy" decoding="async" width="1024" height="684" />` : projectVisuals[i]()}<span class="project-label">${p.label}</span><span class="project-num">${p.num}</span></div>
          <div class="project-body">
            <div class="project-status"><i></i>${p.status}</div>
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="project-tags">${p.tech.map((t) => `<span>${t}</span>`).join('')}</div>
            <div class="project-actions">
              ${p.href
    ? `<a class="pill pill-dark pill-sm" href="${p.href}" target="_blank" rel="noreferrer">${githubIcon(14)} ${p.cta}</a><a class="pill pill-ghost pill-sm" href="${p.href}" target="_blank" rel="noreferrer">Source ${icon('external', 13)}</a>`
    : `<span class="pill pill-dark pill-sm is-disabled">${p.cta}</span><a class="pill pill-ghost pill-sm" href="#contact">Ask me about it ${icon('arrowUpRight', 13)}</a>`}
            </div>
          </div>
        </article>`).join('')}
      </div>
      <div class="lab reveal"><span>More in the lab</span><div>${lab.map((l) => `<b>${l}</b>`).join('')}</div></div>
    </div>
  </section>
  <div class="ink-band" style="--a:#f4f2ee;--b:#ebe8e1" aria-hidden="true"><svg viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0 14C240 64 480 -6 760 26S1200 64 1440 12V46C1200 88 1000 34 760 62S240 30 0 52Z"/></svg></div>

  <!-- EXPERIENCE -->
  <section class="experience" id="experience">
    <span class="star star-c">${star(46)}</span>
    <div class="container">
      <header class="sec-head reveal"><h2 class="sec-title caps">Experience & Education</h2><p class="sec-sub">Hands-on experience through academic study, personal projects and continuous creative practice.</p></header>
      <div class="exp-grid">
        ${experience.map((e, i) => `
        <article class="exp-card reveal" style="--d:${i * 110}ms; --off:${[0, -22, 0][i]}px">
          <div class="exp-top"><span>${e.date}</span><em>${e.badge}</em></div>
          <h3>${e.title}</h3><h4>${e.org}</h4>
          <h5>Skills gained:</h5>
          <ul>${e.skills.map((s) => `<li>${s}</li>`).join('')}</ul>
          <hr /><h5>Technologies:</h5>
          <div class="chips">${e.tech.map((t) => `<span>${t}</span>`).join('')}</div>
        </article>`).join('')}
      </div>
    </div>
  </section>

  <!-- BEYOND CODE -->
  <section class="beyond" id="beyond" style="--n:${chapters.length}">
    <div class="beyond-sticky">
      <header class="beyond-head"><h2>Beyond Code</h2><p>A look at the things I build, explore and keep learning beyond the code itself.</p></header>
      <div class="beyond-stage">
        <div class="deck" id="deck">
          ${chapters.map(([t, cat, d, tags], i) => `
          <article class="chapter" data-i="${i}">
            <div class="ch-top"><div class="ch-num"><b>${pad2(i + 1)}</b><span>/ ${pad2(chapters.length)}</span></div><em>${cat}</em></div>
            <small>Chapter ${pad2(i + 1)}</small>
            <h3>${t}</h3><p>${d}</p>
            <div class="ch-tags">${tags.map((x) => `<span>${x}</span>`).join('')}</div>
            <div class="ch-orb" aria-hidden="true"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width=".8"/><path d="M26 26 74 74M74 26 26 74" stroke="currentColor" stroke-width="1.2" fill="none"/><circle cx="50" cy="50" r="5" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></div>
          </article>`).join('')}
        </div>
        <div class="beyond-count"><b id="ch-count">01 / ${pad2(chapters.length)}</b><span>Journey</span></div>
      </div>
    </div>
  </section>

  <div class="ink-band" style="--a:#f4f2ee;--b:#ffffff" aria-hidden="true"><svg viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0 14C240 64 480 -6 760 26S1200 64 1440 12V46C1200 88 1000 34 760 62S240 30 0 52Z"/></svg></div>
  <!-- SOFT SKILLS -->
  <section class="soft" id="soft">
    <div class="container">
      <header class="sec-head reveal"><span class="chip">Core Competencies</span><h2 class="sec-title caps">Professional Soft Skills</h2><p class="sec-sub">Essential traits that make me an effective engineer, collaborator and communicator.</p></header>
      <div class="soft-grid">
        ${softSkills.map(([t, d, ico], i) => `
        <article class="soft-card reveal" style="--d:${(i % 4) * 70}ms"><span class="soft-ico">${icon(ico, 20, 1.6)}</span><h3>${t}</h3><p>${d}</p></article>`).join('')}
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="contact" id="contact">
    <div class="container contact-grid">
      <div class="contact-copy reveal">
        <span class="eyebrow"><i></i>Let’s connect</span>
        <h2>Let’s build something <span class="underlined">meaningful.</span></h2>
        <p>Have an idea, a project, or just want to connect? Feel free to reach out.</p>
        <div class="contact-line"><i></i><span>${NAME_UP} / AVAILABLE FOR NEW PROJECTS</span></div>
        <div class="contact-icons"><a href="${GITHUB}" target="_blank" rel="noreferrer" aria-label="GitHub">${githubIcon(18)}</a><a href="mailto:${EMAIL}" aria-label="Email">${icon('mail', 18, 1.8)}</a></div>
        <a class="contact-mail" href="mailto:${EMAIL}">${icon('mail', 14, 1.8)} ${EMAIL}</a>
        <span class="contact-loc">${icon('pin', 14, 1.8)} Chuka, Tharaka-Nithi County · Kenya</span>
      </div>
      <form class="contact-card reveal" id="contact-form" style="--d:120ms" novalidate>
        <i class="card-accent"></i>
        <span class="eyebrow sm">${icon('mail', 13, 1.8)} Start a conversation</span>
        <h3>Tell me about your idea.</h3>
        <p class="card-sub">Fill in the details below and I’ll get back to you.</p>
        <div class="field-row">
          <label><span>First name</span><input required name="first" type="text" placeholder="Jane" autocomplete="given-name" /></label>
          <label><span>Last name</span><input required name="last" type="text" placeholder="Your last name" autocomplete="family-name" /></label>
        </div>
        <label><span>Email</span><input required name="email" type="email" placeholder="you@email.com" autocomplete="email" /></label>
        <label><span>Message <b>*</b></span><textarea required name="message" rows="5" placeholder="Tell me what you’re thinking..."></textarea></label>
        <div class="form-foot"><span class="replies"><i></i>Usually replies via email</span><button class="send" type="submit">Send message ${icon('arrow', 14, 2)}</button></div>
        <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
      </form>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="container">
    <div class="foot-meta"><span>${NAME_UP} / PORTFOLIO</span><span>© ${YEAR} ${NAME_UP}</span></div>
    <div class="foot-main">
      <a class="foot-brand" href="#home"><b>${NAME_UP[0]}</b><span><strong>${NAME_UP}</strong><small>FULL STACK DEVELOPER</small></span></a>
      <div class="foot-links"><a href="${GITHUB}" target="_blank" rel="noreferrer">GitHub</a><a href="mailto:${EMAIL}">Email</a></div>
    </div>
    <div class="foot-bottom"><span>© ${YEAR} ${NAME_UP}. All rights reserved.</span><a class="to-top" href="#home">Back to top <i>${icon('arrowUp', 12, 2)}</i></a></div>
  </div>
</footer>`;

/* ----------------------------------------------------------------- loader */
const html = document.documentElement;
const loader = document.querySelector('#loader');
const bar = document.querySelector('#loader-bar');
const heroVideo = document.querySelector('#hero-video');
html.classList.add('loading');
window.scrollTo(0, 0);

const LOADER_MS = reduceMotion ? 700 : 3900;
const dots = ['#ld1', '#ld2', '#ld3'].map((s) => document.querySelector(s));
let loaderStart = performance.now();
let loaderRaf;
const tickLoader = (now) => {
  const t = Math.min(1, (now - loaderStart) / LOADER_MS);
  bar.style.transform = `scaleX(${t})`;
  const phase = Math.floor((now - loaderStart) / 260) % 4;
  dots.forEach((d, i) => d.classList.toggle('on', i < phase));
  if (t < 1) loaderRaf = requestAnimationFrame(tickLoader); else finishLoader();
};
loader.classList.add('run');
loaderRaf = requestAnimationFrame(tickLoader);

function finishLoader() {
  cancelAnimationFrame(loaderRaf);
  const stage = loader.querySelector('.loader-stage');
  document.body.classList.add('ready');
  html.classList.remove('loading');
  heroVideo?.play().catch(() => {});
  startTyping();
  if (reduceMotion) { loader.remove(); return; }
  // Glitch tear-out: the stage is sliced into bands that jitter sideways while the hero shows through.
  loader.classList.add('tearing');
  const bands = 9;
  const clones = [];
  for (let i = 0; i < bands; i += 1) {
    const top = (i / bands) * 100 + (Math.random() * 3 - 1.5);
    const bottom = 100 - ((i + 1) / bands) * 100 + (Math.random() * 3 - 1.5);
    const c = stage.cloneNode(true);
    c.classList.add('slice');
    c.removeAttribute('id');
    c.style.clipPath = `inset(${Math.max(0, top).toFixed(2)}% 0 ${Math.max(0, bottom).toFixed(2)}% 0)`;
    loader.appendChild(c);
    clones.push(c);
    const dx = (Math.random() > 0.5 ? 1 : -1) * (40 + Math.random() * 220);
    c.animate([
      { transform: 'translateX(0)', opacity: 1, filter: 'none' },
      { transform: `translateX(${dx * 0.3}px)`, opacity: 1, offset: 0.25, filter: 'none' },
      { transform: `translateX(${-dx * 0.2}px) skewX(${(Math.random() * 20 - 10).toFixed(1)}deg)`, opacity: 0.85, offset: 0.55, filter: 'blur(1px)' },
      { transform: `translateX(${dx}px)`, opacity: 0, filter: 'blur(6px)' },
    ], { duration: 520 + Math.random() * 260, delay: Math.random() * 140, easing: 'steps(7, end)', fill: 'forwards' });
  }
  stage.style.visibility = 'hidden';
  setTimeout(() => loader.remove(), 1000);
}

/* ----------------------------------------------------------------- typing */
let typingStarted = false;
function startTyping() {
  if (typingStarted) return; typingStarted = true;
  const el = document.querySelector('#role-text');
  if (reduceMotion) { el.textContent = roles[0]; return; }
  let ri = 0; let ci = 0; let deleting = false;
  const step = () => {
    const word = roles[ri];
    if (!deleting) {
      ci += 1; el.textContent = word.slice(0, ci);
      if (ci === word.length) { deleting = true; return setTimeout(step, 2200); }
      return setTimeout(step, 80 + Math.random() * 40);
    }
    ci -= 1; el.textContent = word.slice(0, ci);
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; return setTimeout(step, 380); }
    return setTimeout(step, 38);
  };
  setTimeout(step, reduceMotion ? 0 : 700);
}

/* ------------------------------------------------------------- navigation */
const header = document.querySelector('#site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const setMenu = (open) => {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.innerHTML = icon(open ? 'x' : 'menu', 22);
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
};
menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
  const target = document.querySelector(a.getAttribute('href'));
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
}));

const navLinks = [...document.querySelectorAll('[data-nav]')];
const watch = { home: 'home', about: 'about', skills: 'skills', process: 'skills', projects: 'projects', experience: 'projects', beyond: 'projects', soft: 'contact', contact: 'contact' };
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) {
      const key = watch[en.target.id];
      navLinks.forEach((l) => l.classList.toggle('active', l.dataset.nav === key));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
Object.keys(watch).forEach((id) => { const s = document.getElementById(id); if (s) navObserver.observe(s); });

/* ---------------------------------------------------------------- reveals */
const revealObserver = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (en.isIntersecting) { en.target.classList.add('in'); revealObserver.unobserve(en.target); }
}), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ------------------------------------------------- swinging ID-card lanyard */
(() => {
  const lan = document.querySelector('#lanyard');
  const section = document.querySelector('#about');
  if (!lan) return;
  let theta = 0.32; let omega = 0; let dragging = false; let visible = false; let raf = 0; let last = 0;
  let lastScroll = window.scrollY; let lastPointer = null;
  const K = 7.5; const C = 0.85;
  const apply = () => { lan.style.transform = `rotate(${theta}rad)`; };
  const frame = (now) => {
    const dt = Math.min(0.033, (now - last) / 1000 || 0.016); last = now;
    if (!dragging) {
      omega += (-K * Math.sin(theta) - C * omega) * dt;
      theta += omega * dt;
      if (Math.abs(omega) < 0.0005 && Math.abs(theta) < 0.0005) {
        theta = 0;
        omega = 0;
        apply();
        raf = 0;
        return;
      }
    }
    apply();
    raf = visible || dragging ? requestAnimationFrame(frame) : 0;
  };
  const kick = () => { if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) kick(); }, { threshold: 0 }).observe(section);
  window.addEventListener('scroll', () => {
    const dy = window.scrollY - lastScroll; lastScroll = window.scrollY;
    if (visible && !dragging) { omega += Math.max(-0.35, Math.min(0.35, dy * 0.0042)); kick(); }
  }, { passive: true });
  const angleFrom = (e) => {
    const wrap = lan.parentElement.getBoundingClientRect();
    const pivotX = wrap.left + wrap.width / 2; const pivotY = wrap.top;
    return Math.max(-1.1, Math.min(1.1, Math.atan2(pivotX - e.clientX, e.clientY - pivotY)));
  };
  lan.addEventListener('pointerdown', (e) => { dragging = true; lan.setPointerCapture(e.pointerId); lan.classList.add('grab'); lastPointer = { a: angleFrom(e), t: performance.now() }; kick(); });
  lan.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const a = angleFrom(e); const t = performance.now();
    if (lastPointer) omega = (a - lastPointer.a) / Math.max(0.008, (t - lastPointer.t) / 1000) * 0.6;
    theta = a; lastPointer = { a, t };
  });
  const release = () => { dragging = false; lan.classList.remove('grab'); omega = Math.max(-5, Math.min(5, omega)); kick(); };
  lan.addEventListener('pointerup', release); lan.addEventListener('pointercancel', release);
  lan.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') omega -= 2; if (e.key === 'ArrowRight') omega += 2; kick(); });
  apply();
})();

/* ------------------------------------------------ Beyond Code stacked deck */
(() => {
  const section = document.querySelector('#beyond');
  const cards = [...document.querySelectorAll('.chapter')];
  const counter = document.querySelector('#ch-count');
  const total = cards.length;
  let lastActive = -1;
  const update = () => {
    const mobile = window.innerWidth < 760;
    const rect = section.getBoundingClientRect();
    const dist = Math.max(1, section.offsetHeight - window.innerHeight);
    const p = mobile ? 0 : Math.min(1, Math.max(0, -rect.top / dist));
    const f = p * (total - 1);
    cards.forEach((c, i) => {
      if (mobile) { c.style.cssText = ''; return; }
      const d = i - f; // <0 = already passed, >0 = still waiting
      let y; let s; let o; let blur = 0;
      if (d < 0) { y = d * 70; s = 1 + d * 0.015; o = Math.max(0, 1 + d * 1.1); blur = Math.min(6, -d * 3); }
      else { y = Math.min(d, 4) * 20; s = 1 - Math.min(d, 4) * 0.045; o = Math.max(0, 1 - d * 0.28); }
      c.style.transform = `translate3d(0, ${y}px, 0) scale(${s})`;
      c.style.opacity = o.toFixed(3);
      c.style.zIndex = String(100 - Math.round(Math.abs(d) * 10) - (d < 0 ? 0 : 0));
      c.style.filter = blur ? `blur(${blur.toFixed(1)}px)` : 'none';
      c.style.pointerEvents = Math.abs(d) < 0.5 ? 'auto' : 'none';
    });
    const active = Math.min(total - 1, Math.round(f));
    if (active !== lastActive) { lastActive = active; counter.textContent = `${pad2(active + 1)} / ${pad2(total)}`; }
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

/* ------------------------------------------------------------ contact form */
(() => {
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const first = String(d.get('first') || '').trim(); const last = String(d.get('last') || '').trim();
    const email = String(d.get('email') || '').trim(); const message = String(d.get('message') || '').trim();
    if (!first || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      status.textContent = 'Please add your name, a valid email and a short message.'; status.className = 'form-status show err'; return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${first} ${last}`.trim());
    const body = encodeURIComponent(`${message}\n\n— ${first} ${last}\nReply to: ${email}`);
    status.textContent = 'Thanks! Your email app is opening with the message ready to send.'; status.className = 'form-status show ok';
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  });
})();

if (reduceMotion) { document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in')); }

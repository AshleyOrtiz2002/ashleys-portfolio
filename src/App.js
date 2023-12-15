
import './App.css';
import React, { useEffect } from 'react';
import 'swiper/swiper-bundle.css';


const MyComponent = () => {
  useEffect(() => {
    /*==================== MENU SHOW Y HIDDEN ====================*/
    const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }

    /*==================== REMOVE MENU MOBILE ====================*/
    const navLink = document.querySelectorAll('.nav__link');

    function linkAction() {
      const navMenu = document.getElementById('nav-menu');
      // When we click on each nav__link, we remove the show-menu class
      navMenu.classList.remove('show-menu');
    }
    navLink.forEach((n) => n.addEventListener('click', linkAction));

    /*==================== ACCORDION SKILLS ====================*/
    const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

    function toggleSkills() {
      let itemClass = this.parentNode.className;

      for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
      }
      if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
      }
    }

    skillsHeader.forEach((el) => {
      el.addEventListener('click', toggleSkills);
    });

    /*==================== QUALIFICATION TABS ====================*/
    const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
          tabContent.classList.remove('qualification__active');
        });
        target.classList.add('qualification__active');

        tabs.forEach((tab) => {
          tab.classList.remove('qualification__active');
        });
        tab.classList.add('qualification__active');
      });
    });

    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.add('active-link');
    } else {
      document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

    /*==================== CHANGE BACKGROUND HEADER ====================*/
    function scrollHeader() {
      const nav = document.getElementById('header');
      if (this.scrollY >= 80) nav.classList.add('scroll-header');
      else nav.classList.remove('scroll-header');
    }
    window.addEventListener('scroll', scrollHeader);

    /*==================== SHOW SCROLL TOP ====================*/
    function scrollTop() {
      let scrollTop = document.getElementById('scroll-top');
      // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
      if (this.scrollY >= 200) scrollTop.classList.add('show-scroll');
      else scrollTop.classList.remove('show-scroll');
    }
    window.addEventListener('scroll', scrollTop);

    /*==================== DARK LIGHT THEME ====================*/
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'uil-sun';

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
      themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);
      // We save the theme and the current icon that the user chose
      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
    });
  }, []);
  

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/*==================== UNICONS ====================*/}
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css" />
      {/*==================== SWIPER CSS====================*/}
      <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
      {/*==================== CSS ==========*/}
      <link rel="stylesheet" href="assets/css/styles.css" />
      <title>Responsive Portfolio Website</title>
      {/*==================== HEADER ====================*/}
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">Ashley Ortiz</a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  <i className="uil uil-estate nav__icon" /> Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-user nav__icon" /> About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon" /> Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="uil uil-briefcase-alt nav__icon" /> Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-message nav__icon" /> Contact
                </a>
              </li>
            </ul>
            <i className="uil uil-times nav__close" id="nav-close" />
          </div>
          <div className="nav__btns">
            {/* Theme change button */}
            <i className="uil uil-moon change-theme" id="theme-button" />
            <div className="nav__toggle" id="nav-toggle">
              <i className="uil uil-apps" />
            </div>
          </div>
        </nav>
      </header>
      {/*==================== MAIN ====================*/}
      <main className="main">
        {/*==================== HOME ====================*/}
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <div className="home__img">
                <svg className="home__blob" viewBox="0 0 200 187">
                  <mask id="mask0" mask-type="alpha">
                    <path d="M50 20 L180 20 L1500 140 L20 1400 Z" />
                  </mask>
                  <g mask="url(#mask0)">
                    <path d="M50 20 L180 20 L150 140 L20 140 Z"  />
                    
                    <image className="home__blob-img" x={12} y={18} href="https://i.ibb.co/Wfqgbgp/Untitled-design.png" />
                  </g>
                </svg>
              </div>
              <div className="home__data">
                <h1 className="home__title">Hello, I'm Ashley</h1>
                <h3 className="home__subtitle">Frontend developer</h3>
                <p className="home__description">Take a scroll into my world</p>
                <a href="#contact" className="button button--flex">
                  Contact Me <i className="uil uil-message button__icon" />
                </a>
              </div>
            </div>
            <div className="home__scroll">
              <a href="#about" className="home__scroll-button button--flex">
                <i className="uil uil-mouse-alt home__scroll-mouse" />
                <span className="home__scroll-name">Scroll down</span>
                <i className="uil uil-arrow-down home__scroll-arrow" />
              </a>
            </div>
          </div>
        </section>
        {/*==================== ABOUT ====================*/}
        <section className="about section" id="about">
          <h2 className="section__title">Who Am I ?</h2>
          <span className="section__subtitle">My Introduction</span>
          <div className="about__container container grid">
            <div className="about__data">
              <p className="about__description">I'm an enthusiastic front-end developer fueled by a lifelong passion for computer science and web development. Currently pursuing a degree in computer science at El Centro College, I find immense joy in the creative process of designing visually stunning and user-friendly websites. The art of problem-solving has always captivated me, and I thrive on the challenges it brings. Whether it's debugging complex code or optimizing performance, I approach each task with meticulous attention to detail. I stay up-to-date with the latest front-end technologies and trends to ensure that I deliver innovative solutions that meet the evolving needs of users. With a strong commitment to excellence and a keen eye for design aesthetics, I'm dedicated to crafting exceptional digital experiences that leave a lasting impression.
              </p>
            </div>
          </div>
        </section>
        {/*==================== SKILLS ====================*/}
        <section className="skills section" id="skills">
          <h2 className="section__title">Skills</h2>
          <div className="skills__container container grid">
            <div>
              {/*=============== SKILLS 1 ===============*/}
              <div className="skills__content skills__open">
                <div className="skills__header">
                  <i className="uil uil-brackets-curly skills__icon" />
                  <div>
                    <h1 className="skills__title">Programming Languages</h1>
                    <span className="skills__subtitle">More than 4 years</span>
                  </div>
                  <i className="uil uil-angle-down skills__arrow" />
                </div>
                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">HTML5</h3>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">CSS3</h3>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">JavaScript</h3>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">XML</h3>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Typescript</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/*=============== SKILLS 3 ===============*/}
              <div className="skills__content skills__close">
                <div className="skills__header">
                  <i className="uil uil-qrcode-scan skills__icon" />
                  <div>
                    <h1 className="skills__title">Frameworks</h1>
                    <span className="skills__subtitle">and Technologies</span>
                  </div>
                  <i className="uil uil-angle-down skills__arrow" />
                </div>
                <div className="skills__list grid">
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">React</h3>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">AJAX</h3>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">RESTful APIs</h3>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">JSON</h3>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Redux</h3>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">React Router</h3>
                    </div>
                  </div>
                  <div className="skills__data">
                    <div className="skills__titles">
                      <h3 className="skills__name">Node.js</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*==================== QUALIFICATION ====================*/}
        <section className="qualification section">
          <h2 className="section__title">Experience</h2>
          <span className="section__subtitle">My personal journey</span>
          <div className="qualification__container container">
            <div className="qualification__tabs">
              <div className="qualification__button button--flex qualification__active" data-target="#education">
                <i className="uil uil-graduation-cap qualification__icon" />
                Education
              </div>
              <div className="qualification__button button--flex" data-target="#work">
                <i className="uil uil-briefcase-alt qualification__icon" />
                Work
              </div>                      
            </div>
            <div className="qualification__sections">
              {/*=============== QUALIFICATION CONTENT 1 ===============*/}
              <div className="qualification__content qualification__active" data-content id="education">
                {/*=============== QUALIFICATION 1 ===============*/}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Computer Science NAFTrack</h3>
                    <span className="qualification__subtitle">Highschool Dimploma</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" />
                      2016 - 2020
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder" />
                    <span className="qualification__line" />
                  </div>
                </div>
                {/*=============== QUALIFICATION 2 ===============*/}
                <div className="qualification__data">                                 
                  <div />
                  <div>
                    <span className="qualification__rounder" />
                    <span className="qualification__line" />
                  </div>
                  <div>
                    <h3 className="qualification__title">Computer Science</h3>
                    <span className="qualification__subtitle">El Centro College</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" />
                      2020 - Present
                    </div>
                  </div>
                </div>
                {/*=============== QUALIFICATION 3 ===============*/}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Application Development Training</h3>
                    <span className="qualification__subtitle">YearUp</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" />
                      January - August 2023
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder" />
                    <span className="qualification__line" />
                  </div>
                </div>
                {/*=============== QUALIFICATION 4 ===============*/}
                <div className="qualification__data">
                  <div />
                  <div className="qualification__time">
                    <span className="qualification__rounder" />
                    {/* <span class="qualification__line"></span> */}
                  </div>
                  
                </div>
              </div>
              {/*=============== QUALIFICATION CONTENT 2 ===============*/}
              <div className="qualification__content" data-content id="work">
                {/*=============== QUALIFICATION 1 ===============*/}
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Software Engineer Intern</h3>
                    <span className="qualification__subtitle">Verizon - Irving Tx</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" />
                      May - August 2019
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder" />
                    <span className="qualification__line" />
                  </div>
                </div>
                {/*=============== QUALIFICATION 2 ===============*/}
                <div className="qualification__data">
                  <div />
                  <div className="qualification__time">
                    <span className="qualification__rounder" />
                    <span className="qualification__line" />
                  </div>
                  <div>
                    <h3 className="qualification__title">Team Lead</h3>
                    <span className="qualification__subtitle">Walmart - Garland Tx</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" />
                      July 2020 - October 2022
                    </div>
                  </div>
                </div>
                <div className="qualification__data">
                  <div>
                    <h3 className="qualification__title">Software Engineer Intern</h3>
                    <span className="qualification__subtitle">J.P Morgan Chase - Plano Tx</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" />
                      January - August 2023
                    </div>
                  </div>
                  <div>
                    <span className="qualification__rounder" />
                    <span className="qualification__line" />
                    {/* <span class="qualification__line"></span> */}
                  </div>
                </div>
                <div className="qualification__data">
                  <div />
                  <div className="qualification__time">
                    <span className="qualification__rounder" />
                    <span className="qualification__line" />
                  </div>
                  <div>
                    <h3 className="qualification__title">Team Lead</h3>
                    <span className="qualification__subtitle">Walmart - Garland Tx</span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt" />
                      July 2020 - October 2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*==================== SERVICES ====================*/}
        <section className="services section" id="services">
          <h2 className="section__title">Projects</h2>
          <span className="section__subtitle"></span>
          <div className="services__container container grid">
            {/*=============== SERVICES 1 ===============*/}
            <div className="services__content">
              <div>
                <i className="uil uil-web-grid services__icon" />
                <h3 className="services__title">Expense <br /> Tracker</h3>
              </div>
              <a href="https://ashleyortiz2002.github.io/expense-tracker/" target="_blank" className="button button--flex button--small button--link services__button">
                View More 
                <i className="uil uil-arrow-right button__icon" />
              </a>
            </div>
            {/*=============== SERVICES 2 ===============*/}
            <div className="services__content">
              <div>
                <i className="uil uil-arrow services__icon" />
                <h3 className="services__title">Chat <br /> Bot</h3>
                <p></p>
              </div>
              <a href="https://ashleyortiz2002.github.io/chat_app/" target="_blank" className="button button--flex button--small button--link services__button">
                View More 
                <i className="uil uil-arrow-right button__icon" />
              </a>
            </div>
            {/*============== Services 3 ============*/}
            <div className="services__content">
              <div>
                <i className="uil uil-bus-school services__icon" />
                <h3 className="services__title"> Car<br /> Catelog</h3>
                <p></p>
              </div>
              <a href="https://catr.vercel.app/" target="_blank" className="button button--flex button--small button--link services__button">
                View More 
                <i className="uil uil-arrow-right button__icon" />
              </a>
            </div>
          </div>
        </section>
        
        {/*==================== CONTACT ME ====================*/}
        <section className="contact section" id="contact">
          <h2 className="section__title">Contact Me</h2>
          <span className="section__subtitle">Get in touch</span>
          <div className="contact__container container grid">
            <div>
              <div className="contact__information">
                <i className="uil uil-phone contact__icon" />
                <div>
                  <h3 className="contact__title">Call Me</h3>
                  <span className="contact__subtitle">(469) 412-5914</span>
                </div>
              </div>
              <div className="contact__information">
                <i className="uil uil-envelope contact__icon" />
                <div>
                  <h3 className="contact__title">Email</h3>
                  <span className="contact__subtitle">ortiz.ashleyy.02@gmail.com</span>
                </div>
              </div>
              <div className="contact__information">
                <i className="uil uil-map-marker contact__icon" />
                <div>
                  <h3 className="contact__title">Location</h3>
                  <span className="contact__subtitle">Dallas, Tx</span>
                </div>
              </div>
            </div>
            <div>
              <h3>
                If you would like to contact me feel free to send me an email 
              </h3>
            </div>
            
                  <a href="mailto:ortiz.ashleyy.02@gmail.com" className="button button--flex">
                    Send Message
                    <i className="uil uil-message button__icon" />
                  </a>
          </div>
        </section>
      </main>
      {/*==================== FOOTER ====================*/}
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">Ashley</h1>
              <span className="footer__subtitle">Frontend developer</span>
            </div>
            <ul className="footer__links">
            <li>
                <a href="#about" className="footer__link">About</a>
              </li>
              <li>
                <a href="#services" className="footer__link">Projects</a>
              </li>
              <li>
                <a href="#contact" className="footer__link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/*========== SCROLL TOP ==========*/}
      <a href="#" className="scrollup" id="scroll-top">
        <i className="uil uil-arrow-up scrollup__icon" />
      </a>
      {/*==================== SWIPER JS ====================*/}
      {/*==================== MAIN JS ====================*/}
    </div>
  );
};

export default MyComponent;


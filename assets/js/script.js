// Internationalization (i18n) Support
let currentLanguage = localStorage.getItem('language') || 'en';

// Check if translation objects are loaded, with error handling
const translations = {};
if (typeof translations_en !== 'undefined') translations.en = translations_en;
if (typeof translations_pt !== 'undefined') translations.pt = translations_pt;
if (typeof translations_es !== 'undefined') translations.es = translations_es;

// Fallback to English if translations are not loaded
if (Object.keys(translations).length === 0) {
    console.error('No translation files loaded');
    currentLanguage = 'en';
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageContent();
    updateLanguageButtons();
}

function updatePageContent() {
    const t = translations[currentLanguage];
    
    // Handle case where translations for current language are not available
    if (!t) {
        console.error(`Translations for language '${currentLanguage}' not found`);
        return;
    }
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = key.split('.').reduce((obj, k) => obj && obj[k], t);
        if (value) {
            element.textContent = value;
        }
    });
}

function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// GitHub API Integration Configuration
// Configuration is injected from Jekyll's _config.yml via window.siteConfig
const GITHUB_USERNAME = window.siteConfig?.githubUsername || 'lucasestevesr';
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;
const LINKEDIN_USERNAME = window.siteConfig?.linkedinUsername || 'lucasestevesr';

// Language colors (common programming languages)
const languageColors = {
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    Java: '#b07219',
    TypeScript: '#2b7489',
    HTML: '#e34c26',
    CSS: '#563d7c',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Go: '#00ADD8',
    Rust: '#dea584',
    Swift: '#ffac45',
    Kotlin: '#F18E33',
    Shell: '#89e051',
    Vue: '#41b883',
    React: '#61dafb',
    default: '#cccccc'
};

// Fetch GitHub repositories
async function fetchGitHubProjects() {
    const projectsContainer = document.getElementById('github-projects');
    
    try {
        const response = await fetch(GITHUB_API_URL, {
            headers: {
                'Accept': 'application/vnd.github+json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`GitHub API responded with status: ${response.status}`);
        }
        
        const repos = await response.json();
        
        // Sort by stars and updated date, filter out forks if desired
        const sortedRepos = repos
            .filter(repo => !repo.fork) // Optional: filter out forked repos
            .sort((a, b) => {
                // Sort by stars first, then by last updated
                if (b.stargazers_count !== a.stargazers_count) {
                    return b.stargazers_count - a.stargazers_count;
                }
                return new Date(b.updated_at) - new Date(a.updated_at);
            })
            .slice(0, 6); // Show top 6 repositories
        
        if (sortedRepos.length === 0) {
            const t = translations[currentLanguage];
            projectsContainer.innerHTML = `<p class="loading">${t.projects.noProjects}</p>`;
            return;
        }
        
        // Clear loading message
        projectsContainer.innerHTML = '';
        
        // Create project cards
        sortedRepos.forEach(repo => {
            const card = createProjectCard(repo);
            projectsContainer.appendChild(card);
        });
        
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
        const t = translations[currentLanguage];
        projectsContainer.innerHTML = `
            <div class="error-message">
                <p>${t.projects.error}</p>
                <p>${t.projects.visitProfile} <a href="https://github.com/${GITHUB_USERNAME}" target="_blank">GitHub profile</a>.</p>
            </div>
        `;
    }
}

// Create a project card element
function createProjectCard(repo) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const title = document.createElement('h3');
    title.textContent = repo.name;
    
    const description = document.createElement('p');
    description.textContent = repo.description || 'No description available';
    
    const meta = document.createElement('div');
    meta.className = 'project-meta';
    
    // Language indicator
    if (repo.language) {
        const languageDiv = document.createElement('div');
        languageDiv.className = 'project-language';
        
        const colorDot = document.createElement('span');
        colorDot.className = 'language-color';
        colorDot.style.backgroundColor = languageColors[repo.language] || languageColors.default;
        
        const languageText = document.createElement('span');
        languageText.textContent = repo.language;
        
        languageDiv.appendChild(colorDot);
        languageDiv.appendChild(languageText);
        meta.appendChild(languageDiv);
    }
    
    // Stars count
    if (repo.stargazers_count > 0) {
        const stars = document.createElement('div');
        stars.className = 'project-stars';
        stars.innerHTML = `<i class="fas fa-star" style="color: #fbbf24;"></i> ${repo.stargazers_count}`;
        meta.appendChild(stars);
    }
    
    const t = translations[currentLanguage];
    const link = document.createElement('a');
    link.href = repo.html_url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'project-link';
    link.innerHTML = `${t.projects.viewOnGitHub} <i class="fas fa-external-link-alt"></i>`;
    
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(meta);
    card.appendChild(link);
    
    return card;
}

// LinkedIn API Integration
// Note: LinkedIn API requires OAuth authentication and doesn't support direct public profile access
// We'll use a proxy approach or display static data with a link to LinkedIn
async function fetchLinkedInData() {
    fetchLinkedInExperience();
    fetchLinkedInEducation();
}

function fetchLinkedInExperience() {
    const experienceContainer = document.getElementById('linkedin-experience');
    const t = translations[currentLanguage];
    
    if (!t) return;
    
    // Since LinkedIn API requires OAuth, we'll display a static message with a link
    // In a production environment, you'd need a backend proxy to fetch this data
    const exp = t.linkedin.experience;
    experienceContainer.innerHTML = `
        <div class="linkedin-fallback">
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3>${exp.job1.title}</h3>
                    <span class="timeline-date">${exp.job1.period}</span>
                    <p>${exp.job1.description}</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3>${exp.job2.title}</h3>
                    <span class="timeline-date">${exp.job2.period}</span>
                    <p>${exp.job2.description}</p>
                </div>
            </div>
            <div class="linkedin-link">
                <a href="https://linkedin.com/in/${LINKEDIN_USERNAME}" target="_blank" rel="noopener">
                    <i class="fab fa-linkedin"></i> ${t.linkedin.viewMore}
                </a>
            </div>
        </div>
    `;
    
    // Animate timeline items after insertion
    animateTimelineItems();
}

function fetchLinkedInEducation() {
    const educationContainer = document.getElementById('linkedin-education');
    const t = translations[currentLanguage];
    
    if (!t) return;
    
    // Since LinkedIn API requires OAuth, we'll display a static message with a link
    const edu = t.linkedin.education;
    educationContainer.innerHTML = `
        <div class="linkedin-fallback">
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3>${edu.degree1.title}</h3>
                    <span class="timeline-date">${edu.degree1.period}</span>
                    <p>${edu.degree1.description}</p>
                </div>
            </div>
            <div class="linkedin-link">
                <a href="https://linkedin.com/in/${LINKEDIN_USERNAME}" target="_blank" rel="noopener">
                    <i class="fab fa-linkedin"></i> ${t.linkedin.viewMore}
                </a>
            </div>
        </div>
    `;
    
    // Animate timeline items after insertion
    animateTimelineItems();
}

// Helper function to animate timeline items
function animateTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;
        observer.observe(item);
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    setLanguage(currentLanguage);
    
    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
            // Reload dynamic content with new language
            fetchGitHubProjects();
            fetchLinkedInData();
        });
    });
    
    // Fetch GitHub projects when page loads
    fetchGitHubProjects();
    
    // Fetch LinkedIn data
    fetchLinkedInData();
    
    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
    
    // Animate skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Add current year to footer
const updateFooterYear = () => {
    const year = new Date().getFullYear();
    const footerText = document.querySelector('.footer p');
    const authorName = window.siteConfig?.author || 'Lucas Esteves';
    if (footerText) {
        footerText.textContent = `© ${year} ${authorName}. All rights reserved.`;
    }
};

updateFooterYear();

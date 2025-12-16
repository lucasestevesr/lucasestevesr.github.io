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
            projectsContainer.innerHTML = '<p class="loading">No public repositories found.</p>';
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
        projectsContainer.innerHTML = `
            <div class="error-message">
                <p>Unable to load GitHub projects at the moment.</p>
                <p>Please visit <a href="https://github.com/${GITHUB_USERNAME}" target="_blank">my GitHub profile</a> directly.</p>
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
    
    const link = document.createElement('a');
    link.href = repo.html_url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'project-link';
    link.innerHTML = 'View on GitHub <i class="fas fa-external-link-alt"></i>';
    
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(meta);
    card.appendChild(link);
    
    return card;
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
    // Fetch GitHub projects when page loads
    fetchGitHubProjects();
    
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
    
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;
        observer.observe(item);
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

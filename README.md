# lucasestevesr.github.io

Personal portfolio and CV website hosted on GitHub Pages, built with Jekyll.

## Features

- 📱 Fully responsive design
- 🎨 Modern and clean UI
- 🚀 GitHub API integration to display repositories dynamically
- 🔗 LinkedIn profile integration
- ⚡ Fast and lightweight
- 🎯 Smooth scrolling and animations
- 🛠️ Built with Jekyll for easy content management

## Sections

- **About**: Introduction and background
- **Skills**: Technical skills and competencies
- **Experience**: Work history and timeline
- **Projects**: Automatically fetched from GitHub using the API
- **Contact**: Contact information and social links

## Technologies Used

- Jekyll 3.10.0 (GitHub Pages compatible)
- HTML5 with Liquid templating
- CSS3 (with CSS Variables and Grid/Flexbox)
- Vanilla JavaScript
- GitHub API
- Font Awesome icons

## Local Development

### Prerequisites

- Ruby 3.2.3 or higher
- Bundler

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/lucasestevesr/lucasestevesr.github.io.git
   cd lucasestevesr.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Serve the site locally:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser and visit `http://localhost:4000`

## GitHub API Integration

The site automatically fetches and displays your public GitHub repositories using the GitHub REST API. No authentication is required for public repositories.

## Customization

To customize this portfolio for yourself:

1. Update `_config.yml` with your information:
   - `title`: Your name
   - `description`: Your tagline
   - `author`: Your full name
   - `email`: Your email address
   - `github_username`: Your GitHub username
   - `linkedin_username`: Your LinkedIn username

2. Modify the content in `index.html` (experience, skills, etc.)

3. Update the GitHub username in `assets/js/script.js` if needed

4. Adjust colors in `assets/css/styles.css` (CSS variables in `:root`)

## Deployment

This site is configured for GitHub Pages deployment. Simply push your changes to the main branch, and GitHub Pages will automatically build and deploy your site.

## License

This project is open source and available under the MIT License.
# lucasestevesr.github.io

Personal portfolio and CV website hosted on GitHub Pages, built with Jekyll.

## Features

- 📱 Fully responsive design
- 🎨 Modern and clean UI
- 🌍 Multilingual support (English, Portuguese, Spanish)
- 🚀 GitHub API integration to display repositories dynamically
- 🔗 LinkedIn profile integration
- 🎓 Education section with timeline
- ⚡ Fast and lightweight
- 🎯 Smooth scrolling and animations
- 🛠️ Built with Jekyll for easy content management
- 🤖 Automated deployment via GitHub Actions

## Sections

- **About**: Introduction and background
- **Skills**: Technical skills and competencies
- **Experience**: Work history and timeline with LinkedIn integration
- **Education**: Educational background with LinkedIn integration
- **Projects**: Automatically fetched from GitHub using the API
- **Contact**: Contact information and social links

## Multilingual Support

The site supports three languages:
- **English (EN)** - Default language
- **Portuguese (PT)** - Brazilian Portuguese
- **Spanish (ES)** - Spanish

Users can switch between languages using the language selector in the navigation bar. The selected language preference is saved in browser localStorage.

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

The site automatically fetches and displays your public GitHub repositories using the GitHub REST API. No authentication is required for public repositories. The API integration:
- Fetches up to 6 most starred repositories
- Displays language, stars, and description
- Filters out forked repositories
- Gracefully handles API errors

## LinkedIn Integration

The site includes a LinkedIn integration structure for displaying:
- **Work Experience**: Professional work history
- **Education**: Academic background
- **Recommendations**: Professional recommendations

**Note**: LinkedIn's API requires OAuth authentication and doesn't support direct public profile access. The current implementation provides a fallback display with static content and links to view the full profile on LinkedIn. For dynamic LinkedIn data, you would need to implement a backend proxy service with proper OAuth authentication.

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

This site uses GitHub Actions for automated deployment:

1. Push your changes to the `main` branch
2. GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
   - Checks out the code
   - Sets up Ruby and installs dependencies
   - Builds the Jekyll site
   - Deploys to GitHub Pages

The workflow runs on every push to the `main` branch or can be triggered manually via workflow_dispatch.

### GitHub Actions Workflow

The deployment workflow includes:
- Ruby 3.2 setup with bundler caching
- Jekyll build with production environment
- Automated artifact upload and deployment to GitHub Pages

Make sure GitHub Pages is configured to deploy from GitHub Actions in your repository settings.

## License

This project is open source and available under the MIT License.
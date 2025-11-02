# eliottteissonniere.com

Personal website built with Hugo, the world's fastest static site generator.

## Development

This site uses Hugo Extended for building.

### Prerequisites

- Hugo Extended (installed automatically in devcontainer)
- Or install locally: https://gohugo.io/installation/

### Local Development

Build the site:
```bash
hugo
```

Run development server with live reload:
```bash
hugo server -D
```

The site will be available at http://localhost:1313

### Writing Posts

Create a new markdown file in the `content/posts/` directory:

```bash
hugo new content/posts/my-new-post.md
```

Or create manually:

```markdown
---
title: Your Post Title
date: 2024-03-15
---

Your post content here in markdown...

## Subheadings work

- Lists work
- Links work
- Everything you'd expect from markdown
```

### Project Structure

```
.
├── content/           # Markdown content
│   ├── _index.md     # Homepage content
│   └── posts/        # Blog posts
├── layouts/          # HTML templates
│   ├── _default/     # Default layouts
│   │   ├── baseof.html
│   │   └── single.html
│   ├── partials/     # Reusable components
│   │   └── sidebar.html
│   └── index.html    # Homepage template
├── static/           # Static assets (copied as-is)
│   ├── css/         # Stylesheets
│   └── robot.svg    # Images
├── public/           # Generated site (git ignored)
└── hugo.toml         # Hugo configuration
```

### Configuration

Edit `hugo.toml` to update:
- Site title and URL
- Author information
- Social links
- "Now" section
- Speaking engagements

### Dev Container

This project includes a devcontainer with Hugo pre-installed:

1. Install Docker and the "Dev Containers" extension in VSCode
2. Open the command palette (Cmd+Shift+P) and select "Dev Containers: Reopen in Container"
3. Hugo will be ready to use

## Deployment

The `public/` folder contains the complete static site after running `hugo`. Deploy to:
- Cloudflare Pages
- GitHub Pages
- Netlify
- Any static hosting service

For GitHub Pages, you can use GitHub Actions to auto-build on push. For Cloudflare Pages or Netlify, set the build command to `hugo` and publish directory to `public`.

## Tech Stack

- Hugo Extended v0.139+
- Pure HTML/CSS (no client-side JavaScript)
- Markdown for content
- Go templates for layouts

## License

MIT

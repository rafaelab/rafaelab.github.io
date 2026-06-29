# rafaelab.github.io

Personal website for Rafael A. B., hosted on GitHub Pages.

## Features

- **Multilingual Support**: Switch between English and Portuguese
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Multiple Sections**:
  - Home: Introduction and overview
  - Research: Showcase research areas and projects
  - Teaching: Display courses and teaching activities
  - Publications: List academic publications
  - Contact: Contact information and social links

## How to Customize

### Update Personal Information

1. **Edit `index.html`**:
   - Replace "Rafael A. B." with your name
   - Update email, office location, and social media links in the Contact section
   - Replace placeholder content with your actual research areas, courses, and publications

2. **Edit `script.js`**:
   - Modify the `translations` object to update all text content
   - Add or remove translation keys as needed for both `en` and `pt` languages

### Add More Languages

1. In `script.js`, add a new language object to the `translations` object
2. In `index.html`, add a new language button in the `.language-switcher` section

### Styling

- Edit `styles.css` to customize colors, fonts, and layout
- Change CSS variables in `:root` to quickly update the color scheme

### Adding New Sections

1. Add a new `<section>` in `index.html`
2. Add corresponding styles in `styles.css`
3. Add a navigation link in the navbar

## Deployment

This website is automatically deployed via GitHub Pages. Any changes pushed to the main branch will be live at `https://rafaelab.github.io`.

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- No external dependencies

## License

Personal website - All rights reserved.
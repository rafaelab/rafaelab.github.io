# rafaelab.github.io

Personal website for Rafael Alves Batista, hosted on GitHub Pages.

## Features

- **Multilingual Support**: Switch between English and Portuguese
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Multi-page Structure**:
	- `index.html`: Landing page and profile overview
	- `research.html`: Dedicated research page
	- `teaching.html`: Dedicated teaching page

## How to Customize

### Update Content

1. **Edit the page files**:
	- Update `index.html` for the landing page summary and contact/profile cards
	- Update `research.html` for research topics and background
	- Update `teaching.html` for courses, mentoring, and outreach content

2. **Edit `script.js`**:
	- Modify the `translations` object to update text content in both languages
	- Add or remove translation keys as needed for `en` and `pt`

3. **Keep formatting consistent**:
	- The repository uses tabs via `.editorconfig`

### Add More Languages

1. In `script.js`, add a new language object to the `translations` object
2. In each HTML page, add a new language button in the `.language-switcher`

### Styling

- Edit `styles.css` to customize colors, fonts, spacing, and page layout
- Change CSS variables in `:root` to quickly update the visual theme

### Add More Pages

1. Create a new `.html` page following the existing layout
2. Add its navigation link to the shared navbar
3. Add translation keys in `script.js` for any new text

## Deployment

This website is automatically deployed via GitHub Pages. Any changes pushed to the main branch will be live at `https://rafaelab.github.io`.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- No external dependencies

## License

Personal website - All rights reserved.

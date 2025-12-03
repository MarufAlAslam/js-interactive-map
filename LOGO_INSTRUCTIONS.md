# Logo Instructions

## Logo File Placement

All company logos should be placed in the `img/logos/` directory with the following filenames:

### Required Logo Files:

1. **excite.png** - Excite Automation & Controls logo
2. **primec.png** - Primec Controls logo
3. **wyss.png** - Wyoming Service & Supply logo
4. **alleghany.png** - Alleghany logo
5. **pneumatic.png** - Pneumatic Controls logo
6. **sivalls.png** - Sivalls logo
7. **westernsky.png** - Western Sky logo
8. **spindletop.png** - Spindletop Energy Products logo
9. **bobdavis.png** - Bob Davis Sales logo
10. **qualitycontrol.png** - Quality Control Products logo
11. **strategic.png** - Strategic Energy Products logo
12. **gec.png** - Global Engine Controls logo

## Logo Specifications:

- **Format**: PNG with transparent background (recommended)
- **Dimensions**: Max 400px width, max 160px height
- **Aspect Ratio**: Maintain original aspect ratio
- **File Size**: Keep under 100KB for optimal loading

## How the Logos Display:

Logos will appear in the contact modal popup:
- Centered horizontally
- Displayed below the company name
- Maximum display size: 200px wide x 80px tall (will scale proportionally)
- The logo maintains its aspect ratio

## Updating Logo Paths:

If you need to change the logo path for any region, edit the `contactData` object in `js/app.js`. Each region has a `logo` property that points to the logo file path.

Example:
```javascript
'Canada': {
  company: 'Excite Automation & Controls',
  logo: 'img/logos/excite.png',  // Update this path if needed
  contacts: [...]
}
```

## Testing:

After placing all logo files:
1. Open `index.html` in a web browser
2. Click on each map region
3. Verify that the correct logo displays in the popup modal
4. Check that logos are clear and properly sized

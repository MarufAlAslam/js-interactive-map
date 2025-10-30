# Interactive Map with Hover Effect

A clean, interactive SVG map that highlights regions on hover.

## Features

- Hover over grey regions (`#c7c8ca`) to see them turn red
- Smooth transitions with no layout jumping
- Touch-friendly and keyboard accessible
- Responsive design

## Project Structure

```
maps/
├── index.html             # Main HTML file
├── css/
│   └── style.css          # Styles
├── js/
│   └── app.js             # Interactive logic
└── README.md              # Documentation
```

## Usage

1. Open `index.html` in a modern browser
2. Hover over any grey region to see it highlight in red
3. The map is keyboard accessible (Tab to navigate)

## Customization

### Change Highlight Color
Edit `#ff3b30` in both `css/style.css` and `js/app.js`

### Target Different Colors
Modify the `isTargetGrey()` function in `js/app.js` to match different RGB values

### Adjust Hover Effect
Edit `.interactive-region.popout` in `css/style.css` to change stroke width or add effects

## Browser Support

Works in all modern browsers: Chrome, Firefox, Safari, Edge

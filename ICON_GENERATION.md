# Icon Generation for Chrome Extension

This document explains how to generate and use icons for your Chrome extension based on this template.

## Placeholder Icons

The template includes a script to generate simple placeholder SVG icons for development. To generate these placeholder icons:

1. Navigate to the template directory in your terminal
2. Run the icon generation script:

```bash
node generate-icons.js
```

This will create SVG icons in the `src/assets` directory with the following names:
- `icon16.svg`
- `icon48.svg`
- `icon128.svg`

These placeholder icons are useful during development but should be replaced with proper PNG icons before publishing your extension.

## Creating Production Icons

For a production-ready extension, you should create PNG icons in the following sizes:

- 16x16 pixels
- 48x48 pixels
- 128x128 pixels

These icons should be placed in the `src/assets` directory with the following filenames:
- `icon16.png`
- `icon48.png`
- `icon128.png`

## Icon Best Practices

When designing icons for your Chrome extension:

1. **Simple Design**: Keep the design simple and recognizable even at small sizes
2. **Consistent Style**: Maintain a consistent visual style across all icon sizes
3. **Transparency**: Use transparency where appropriate
4. **Color**: Choose colors that stand out in both light and dark browser themes
5. **Follow Guidelines**: Adhere to [Chrome's extension icon guidelines](https://developer.chrome.com/docs/webstore/images/)

## Converting SVG to PNG

If you already have an SVG icon, you can convert it to PNG using:

- **Inkscape**: Free, open-source vector graphics editor
- **Adobe Illustrator**: Professional vector graphics editor
- **Online Converters**: Websites like [SVG to PNG](https://svgtopng.com/)
- **Command Line**: Tools like ImageMagick

## Icon Resources

- [Chrome Extension Icon Guidelines](https://developer.chrome.com/docs/webstore/images/)
- [Material Design Icons](https://material.io/resources/icons/)
- [Font Awesome](https://fontawesome.com/)
- [Flaticon](https://www.flaticon.com/) 
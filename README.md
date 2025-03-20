# Chrome Extension Template

A modern template for building Chrome extensions using TypeScript, with a modular architecture and a solid foundation for development.

## Features

- **TypeScript** for type safety and modern JavaScript features
- **Webpack** for bundling and development workflow
- **Modular Architecture** with separate components for popup, background, and options
- **Ready-to-use UI** with modern styling
- **Storage API** implementation for saving settings
- **Service-based pattern** for API communication
- **Message passing** between components

## Project Structure

```
├── src/                  # Source code
│   ├── assets/           # Icons and other static assets
│   ├── background/       # Background script
│   ├── models/           # TypeScript interfaces and types
│   ├── options/          # Options page
│   ├── popup/            # Popup UI
│   ├── services/         # Services for API communication
│   └── manifest.json     # Extension manifest
├── dist/                 # Compiled extension (generated)
├── package.json          # NPM dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── webpack.config.js     # Webpack configuration
```

## Getting Started

### Prerequisites

- Node.js (v14.x or later recommended)
- npm (v6.x or later recommended)

### Installation

1. Clone or download this template repository
2. Install dependencies:

```bash
npm install
```

### Development

Build the extension in development mode:

```bash
npm run build
```

Watch mode (automatically rebuilds on changes):

```bash
npm run watch
```

### Loading the Extension in Chrome

1. Build the extension using one of the commands above
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top-right corner)
4. Click "Load unpacked" and select the `dist` directory from this project

## Customization

### Extension Information

Edit the `manifest.json` file to change:

- Extension name
- Description
- Version
- Permissions
- Icons

### Add Your Functionality

1. **Background Logic**: Modify `src/background/background.ts` to include your background processing logic
2. **UI Components**: Customize `src/popup` directory files for the extension popup
3. **Settings**: Update `src/options` files to change available settings
4. **Data Models**: Define your data structures in `src/models/types.ts`
5. **API Services**: Implement API calls in the `src/services` directory

## Building for Production

To build for production, simply run:

```bash
npm run build
```

The extension will be compiled to the `dist` directory, ready for publication to the Chrome Web Store.

## Resources

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/mv3/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Webpack Documentation](https://webpack.js.org/concepts/)

## License

This template is released under the MIT License. See the LICENSE file for details. 
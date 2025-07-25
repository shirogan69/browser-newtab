# Custom New Tab - Material You Chrome Extension

A beautiful, Material You-inspired custom new tab page for Chrome with dynamic greeting, live time widget, and quick search functionality.

## Features

- **Dynamic Greeting**: Displays "Good morning", "Good afternoon", or "Good evening" based on the time of day
- **Live Time & Date Widget**: Shows the current time (auto-updating every second) and the full date
- **Dynamic Background**: Background gradient changes based on the time (morning, afternoon, evening, night)
- **Quick Search Bar**: Search the web or type a URL directly with special search tags:
  - `/ppx your query` — Search Perplexity
  - `/r your query` — Search Reddit
  - `/bing your query` — Search Bing
  - `/yt your query` — Search YouTube
  - `/g your query` — Search Google
  - `/wiki your query` — Search Wikipedia
- **Quick Links**: Easy access to popular websites (Gmail, YouTube, GitHub, Drive, Translate, ChatGPT)

## Installation

### Method 1: Load as Unpacked Extension (Recommended for Development)

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" by toggling the switch in the top right corner
3. Click "Load unpacked" button
4. Select the folder containing the extension files (this folder)
5. The extension should now be loaded and your new tab page will be replaced

### Method 2: Create a .crx file (For Distribution)

1. In Chrome, go to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Pack extension"
4. Select the extension folder
5. Click "Pack Extension" to create a .crx file
6. You can then share this .crx file with others

## Files Structure

```
├── manifest.json       # Extension configuration
├── newtab.html        # Main HTML file
├── styles.css         # CSS styles
├── script.js          # JavaScript functionality
└── EXTENSION_README.md # This file
```

## Customization

You can customize the extension by editing:

- **Quick Links**: Modify the links in `newtab.html`
- **Colors/Styling**: Edit `styles.css`
- **Time-based backgrounds**: Adjust gradients in `script.js` in the `updateBackground()` function
- **Search shortcuts**: Add new search providers in `script.js` in the `handleSearch()` function

## Browser Compatibility

This extension is designed for Google Chrome and Chromium-based browsers. It uses Manifest V3 for future compatibility.

## Troubleshooting

If the extension doesn't load:
1. Make sure all files are in the same directory
2. Check that Developer mode is enabled in Chrome extensions
3. Reload the extension from the extensions page
4. Check the browser console for any error messages

## Version

Current version: 1.0.0

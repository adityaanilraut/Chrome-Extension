# Auto Image Replacer

A Chrome extension that automatically replaces all images on webpages with a single "fun.png" image.

## Description

Auto Image Replacer is a lightweight Chrome extension that transforms your web browsing experience by replacing all images across websites with a consistent, non-distracting image. This extension works automatically upon page load and continues to replace any dynamically loaded images through an intelligent observer pattern implementation.

## Features

- **Automatic Image Replacement**: Replaces all images on a webpage with a single "fun.png" image
- **Dynamic Content Support**: Uses MutationObserver to capture and replace images that load dynamically
- **Popup Interface**: Includes a simple popup with a manual replacement button
- **Lightweight**: Minimal impact on browser performance

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" at the top-right
4. Click "Load unpacked" and select the extension directory
5. The extension icon should appear in your Chrome toolbar

## Usage

The extension works in two modes:

1. **Automatic Mode**: Once installed, the extension automatically replaces all images on every webpage you visit
2. **Manual Mode**: Click the extension icon in your toolbar, then click the "Replace Images" button in the popup

## Use Cases

### Reduce Distractions
- **Focus Mode**: Eliminate visually distracting images while researching or studying online
- **Content Priority**: Force yourself to engage with the text content rather than being drawn to flashy images
- **Reduced Information Overload**: Simplify visually complex websites by standardizing all imagery

### Productivity Enhancement
- **Faster Page Loading**: Replace large, bandwidth-heavy images with a lightweight alternative
- **Consistent Reading Experience**: Create a more uniform visual experience across different websites
- **Minimize Context Switching**: Reduce the cognitive load of processing varied visual information

### Digital Wellbeing
- **Reduced Visual Stimulation**: Decrease eye strain and mental fatigue from processing numerous images
- **Ad Visibility Reduction**: While not an ad blocker, replacing ad images makes them less attention-grabbing
- **Mindful Browsing**: Encourage more intentional interaction with web content

### Specialized Uses
- **Text-Focused Research**: Ideal for academic or professional research where images are secondary
- **Bandwidth Conservation**: Useful for slow connections where loading many images is problematic
- **Content Filtering**: Provide a layer of abstraction from potentially unwanted imagery
- **Web Content Analysis**: Help developers and content creators understand the impact of images on their site layout

## Technical Details

The extension consists of:
- **content.js**: Main script that handles automatic image replacement and observes for dynamic changes
- **popup.html/js**: Simple interface for manual replacement
- **manifest.json**: Configuration file for the Chrome extension

The image replacement logic uses:
- `document.getElementsByTagName('img')` to find all existing images
- `MutationObserver` to detect and replace dynamically added images
- Data attributes to store original image sources

## Customization

To use your own replacement image:
1. Replace the `fun.png` file in the `images` directory with your preferred image
2. Make sure to keep the same filename or update the references in the code

## License

[MIT License](LICENSE)

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

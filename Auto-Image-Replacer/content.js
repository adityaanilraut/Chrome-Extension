
function replaceAllImages() {
  const funImageURL = chrome.runtime.getURL('images/fun.png');
  console.log('Fun image URL:', funImageURL);
  
  // Replace existing images
  const images = document.getElementsByTagName('img');
  console.log(`Found ${images.length} images to replace`);
  
  for (let i = 0; i < images.length; i++) {
    // Store original src for potential restoration
    if (!images[i].dataset.originalSrc) {
      images[i].dataset.originalSrc = images[i].src;
    }
    // Replace with fun.png
    images[i].src = funImageURL;
    
    // Make sure the image is visible
    images[i].style.display = "inline-block";
    images[i].style.visibility = "visible";
    
    // Ensure the image doesn't try to load the original again
    images[i].setAttribute('loading', 'eager');
  }
  
  console.log(`Replaced ${images.length} images with fun.png`);
}

// Run immediately when the content script loads
replaceAllImages();

// Set up a MutationObserver to handle dynamically added images
const observer = new MutationObserver((mutations) => {
  let hasNewImages = false;
  
  mutations.forEach((mutation) => {
    // Check if new nodes were added
    if (mutation.addedNodes && mutation.addedNodes.length > 0) {
      // Check if any of the added nodes are images or contain images
      for (let i = 0; i < mutation.addedNodes.length; i++) {
        const node = mutation.addedNodes[i];
        
        // If the node is an image
        if (node.nodeName === 'IMG') {
          hasNewImages = true;
          break;
        }
        
        // If the node contains images
        if (node.getElementsByTagName) {
          const images = node.getElementsByTagName('img');
          if (images.length > 0) {
            hasNewImages = true;
            break;
          }
        }
      }
    }
  });
  
  // If new images were added, replace all images again
  if (hasNewImages) {
    replaceAllImages();
  }
});

// Start observing the document with the configured parameters
observer.observe(document.body, { 
  childList: true, 
  subtree: true 
});
document.getElementById('replaceButton').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: replaceImages
  });
});

function replaceImages() {
  const funImageURL = chrome.runtime.getURL('images/fun.png');
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.src = funImageURL;
    img.style.display = "inline-block";
    img.style.visibility = "visible";
  });
  
  console.log(`Replaced ${images.length} images with fun.png`);
  console.log(`Using image path: ${funImageURL}`);
}
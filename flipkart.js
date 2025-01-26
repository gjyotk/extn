console.log("Flipkart script injected successfully!");

function extractFlipkartMetadata() {
  try{
    const metadata = {
      title: document.title,  // Extract the page title
      price: document.querySelector("span._30jeq3")?.innerText || "N/A",  // Selector for price
      image: document.querySelector("meta[property='og:image']")?.content || "N/A",  // Extract image from og:image meta tag
      keywords: document.querySelector("meta[name='Keywords']")?.content || "N/A",  // Extract keywords from meta tag
      description: document.querySelector("meta[name='Description']")?.content || "N/A",  // Extract description from meta tag
      // productUrl: window.location.href  // Current product URL
    };
  

    console.log("Extracted metadata from Flipkart:", metadata);

    if (chrome.runtime?.sendMessage) {
      chrome.runtime.sendMessage({ action: "storeMetadata", metadata }, response => {
        if (chrome.runtime.lastError) {
          console.error("Error sending metadata to background script:", chrome.runtime.lastError.message);
        } else {
          console.log("Metadata sent to background script:", response);
        }
      });
    } else {
      console.error("Chrome runtime API is not available.");
    }
  } catch (error) {
    console.error("Error extracting Flipkart metadata:", error);
  }
}

extractFlipkartMetadata();

console.log("Content script loaded!");

const currentURL = window.location.href;

if (currentURL.includes("flipkart.com")) {
  console.log("Flipkart website detected.");
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("flipkart.js");
  script.onload = () => console.log("flipkart.js loaded successfully.");
  script.onerror = () => console.error("Failed to load flipkart.js.");
  document.body.appendChild(script);
} else {
  console.log("Website not supported.");
}



// works- flipkart
// // content.js
// console.log("Content script injected successfully!");

// function extractMetadata() {
//   const metadata = {
//     title: document.title,  // Extract the page title
//     price: document.querySelector("span._30jeq3")?.innerText || "N/A",  // Selector for price
//     image: document.querySelector("meta[property='og:image']")?.content || "N/A",  // Extract image from og:image meta tag
//     keywords: document.querySelector("meta[name='Keywords']")?.content || "N/A",  // Extract keywords from meta tag
//     description: document.querySelector("meta[name='Description']")?.content || "N/A",  // Extract description from meta tag
//     productUrl: window.location.href  // Current product URL
//   };

//   // Send the extracted metadata back to the popup
//   chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action === "extractMetadata") {
//       sendResponse({ metadata });
//     }
//   });
// }

// extractMetadata();
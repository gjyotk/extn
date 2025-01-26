chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "storeMetadata") {
    // Store metadata in local storage
    chrome.storage.local.set({ metadata: message.metadata }, () => {
      console.log("Metadata saved to storage:", message.metadata);
      sendResponse({ success: true });
    });

    // Indicate that the response will be asynchronous
    return true;
  }
});



// works- flipkart
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log("Received message:", message); // Debug
//   if (message.action === "saveProductDetails") {
//     console.log("Saving product details:", message.data); // Debug
//     chrome.storage.local.set({ productMetadata: message.data });
//   }
// });


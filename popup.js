document.addEventListener("DOMContentLoaded", () => {
  const metadataContainer = document.getElementById("metadataContainer");
  const clearStorageButton = document.getElementById("clearStorage");

  // Fetch metadata from storage and display it
  chrome.storage.local.get(["metadata"], result => {
    if (result.metadata) {
      metadataContainer.innerHTML = `
        <p><strong>Title:</strong> ${result.metadata.title}</p>
        <p><strong>Price:</strong> ${result.metadata.price}</p>
        <p><strong>Image:</strong> <img src="${result.metadata.image}" alt="Product Image" width="100"></p>
        <p><strong>Keywords:</strong> ${result.metadata.keywords}</p>
        <p><strong>Description:</strong> ${result.metadata.description}</p>
      `;
    } else {
      metadataContainer.textContent = "No metadata available.";
    }
  });

  // Clear metadata from storage
  clearStorageButton.addEventListener("click", () => {
    chrome.storage.local.remove(["metadata"], () => {
      metadataContainer.textContent = "Metadata cleared.";
    });
  });
});








//  works - flipkart
// // Log debug messages
// function logDebug(message) {
//   console.log(`[DEBUG]: ${message}`);
// }

// // Display error messages
// function displayError(message) {
//   logDebug(`Error: ${message}`);
//   document.getElementById("stored-metadata").innerHTML = `<p>${message}</p>`;
// }

// // Update UI with metadata
// function updateUI(metadata) {
//   if (!metadata) {
//     displayError("No metadata available to display.");
//     return;
//   }

//   document.getElementById("title").textContent = `Title: ${metadata.title}`;
//   document.getElementById("price").textContent = `Price: ${metadata.price}`;
//   document.getElementById("image").textContent = `Image URL: ${metadata.image}`;
//   document.getElementById("keywords").textContent = `Keywords: ${metadata.keywords}`;
//   document.getElementById("description").textContent = `Description: ${metadata.description}`;
// }

// // Store metadata in local storage
// function storeMetadata(metadata) {
//   chrome.storage.local.get({ metadata: [] }, function (result) {
//     const storedMetadata = result.metadata || [];
//     storedMetadata.push(metadata);

//     chrome.storage.local.set({ metadata: storedMetadata }, function () {
//       if (chrome.runtime.lastError) {
//         displayError(`Error saving metadata: ${chrome.runtime.lastError.message}`);
//         return;
//       }

//       logDebug("Metadata stored successfully.");
//       displayStoredMetadata();
//     });
//   });
// }

// function storeMetadata(metadata) {
//   chrome.storage.local.get({ metadata: [] }, function (result) {
//     const storedMetadata = result.metadata || [];
//     storedMetadata.push(metadata);

//     chrome.storage.local.set({ metadata: storedMetadata }, function () {
//       if (chrome.runtime.lastError) {
//         alert(`Error saving metadata: ${chrome.runtime.lastError.message}`);
//         return;
//       }

//       alert("Metadata stored successfully! You can view it on the Options page.");
//     });
//   });
// }


// // Clear all metadata
// function clearMetadata() {
//   chrome.storage.local.remove("metadata", function () {
//     if (chrome.runtime.lastError) {
//       displayError(`Error clearing metadata: ${chrome.runtime.lastError.message}`);
//       return;
//     }

//     logDebug("All metadata cleared.");
//     displayStoredMetadata();
//   });
// }

// // Initialize popup
// document.addEventListener("DOMContentLoaded", function () {
//   // Fetch metadata from the content script
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     if (tabs.length === 0) {
//       displayError("No active tab detected.");
//       return;
//     }

//     const activeTab = tabs[0];
//     logDebug(`Fetching metadata for tab: ${activeTab.url}`);

//     chrome.tabs.sendMessage(activeTab.id, { action: "extractMetadata" }, function (response) {
//       if (chrome.runtime.lastError) {
//         displayError("Content script not injected. Reload the tab and try again.");
//         return;
//       }

//       if (response && response.metadata) {
//         logDebug("Metadata fetched successfully.");
//         updateUI(response.metadata);

//         // Handle "Store Metadata" button click
//         document.getElementById("store").addEventListener("click", function () {
//           logDebug("Store button clicked.");
//           storeMetadata(response.metadata);
//         });
//       } else {
//         displayError("Failed to fetch metadata.");
//       }
//     });
//   });

//   // Handle "Clear All Metadata" button click
//   document.getElementById("clear").addEventListener("click", function () {
//     logDebug("Clear button clicked.");
//     clearMetadata();
//   });

//   // Display stored metadata on popup load
//   displayStoredMetadata();
// });
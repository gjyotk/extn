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





// works flipkart
// // Display stored metadata
// function displayStoredMetadata() {
//   chrome.storage.local.get({ metadata: [] }, function (result) {
//     const storedMetadata = result.metadata || [];
//     const storedMetadataDiv = document.getElementById("stored-metadata");

//     if (storedMetadata.length === 0) {
//       storedMetadataDiv.innerHTML = "<p>No metadata stored.</p>";
//       return;
//     }

//     storedMetadataDiv.innerHTML = "";
//     storedMetadata.forEach((data, index) => {
//       storedMetadataDiv.innerHTML += `
//         <div class="metadata">
//           <h3>Metadata ${index + 1}</h3>
//           <p><strong>Title:</strong> ${data.title}</p>
//           <p><strong>Price:</strong> ${data.price}</p>
//           <p><strong>Image URL:</strong> <a href="${data.image}" target="_blank">${data.image}</a></p>
//           <p><strong>Keywords:</strong> ${data.keywords}</p>
//           <p><strong>Description:</strong> ${data.description}</p>
//         </div>`;
//     });
//   });
// }

// // Clear all metadata
// function clearMetadata() {
//   chrome.storage.local.remove("metadata", function () {
//     if (chrome.runtime.lastError) {
//       alert(`Error clearing metadata: ${chrome.runtime.lastError.message}`);
//       return;
//     }
//     alert("All metadata cleared.");
//     displayStoredMetadata();
//   });
// }

// // Initialize options page
// document.addEventListener("DOMContentLoaded", function () {
//   displayStoredMetadata();

//   // Handle "Clear All Metadata" button click
//   document.getElementById("clear").addEventListener("click", clearMetadata);
// });
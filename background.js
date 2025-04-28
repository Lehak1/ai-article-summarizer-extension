 // Runs when the extension is first installed or updated
chrome.runtime.onInstalled.addListener(() => {
  
    // Check if Gemini API key is already stored
    chrome.storage.sync.get(["geminiApiKey"], (result) => {
      
      // If not found, open the options page
      if (!result.geminiApiKey) {
        chrome.tabs.create({
          url: "options.html", // This is where user can input/save their API key
        });
      }
      
    });
  });
  
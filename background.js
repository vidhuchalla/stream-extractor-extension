// Simple background script to capture manifest URLs
let detectedStreams = {};

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = details.url;
    if (url.includes('.m3u8') || url.includes('.mpd') || url.includes('.mp4')) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs[0]) {
          let tabId = tabs[0].id;
          if (!detectedStreams[tabId]) detectedStreams[tabId] = [];
          if (!detectedStreams[tabId].includes(url)) {
            detectedStreams[tabId].push(url);
          }
        }
      });
    }
    return {cancel: false};
  },
  {urls: ["<all_urls>"]},
  []
);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getStreams") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs[0]) {
        sendResponse({streams: detectedStreams[tabs[0].id] || []});
      } else {
        sendResponse({streams: []});
      }
    });
    return true;
  }
});

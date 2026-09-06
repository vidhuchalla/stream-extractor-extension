chrome.runtime.sendMessage({action: "getStreams"}, (response) => {
  const listDiv = document.getElementById("streams-list");
  if (!response || !response.streams || response.streams.length === 0) {
    listDiv.innerText = "No stream links captured yet. Play a video to trigger detection.";
    return;
  }
  listDiv.innerHTML = "";
  response.streams.forEach((streamUrl, index) => {
    let item = document.createElement("div");
    item.className = "stream-item";
    
    let label = document.createElement("div");
    label.innerText = "Link #" + (index + 1) + " (" + (streamUrl.includes('.m3u8') ? 'HLS Stream' : streamUrl.includes('.mpd') ? 'DASH Stream' : 'Direct MP4') + ")";
    label.style.fontWeight = "bold";
    label.style.marginBottom = "4px";
    
    let btn = document.createElement("button");
    btn.innerText = "Copy URL to Clipboard";
    btn.onclick = () => {
      navigator.clipboard.writeText(streamUrl);
      btn.innerText = "Copied!";
      setTimeout(() => btn.innerText = "Copy URL to Clipboard", 2000);
    };
    
    item.appendChild(label);
    item.appendChild(btn);
    listDiv.appendChild(item);
  });
});

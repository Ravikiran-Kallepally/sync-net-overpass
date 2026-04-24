const noteArea = document.getElementById('note');
const copyBtn = document.getElementById('copyBtn');
const wipeBtn = document.getElementById('wipeBtn');

// 1. Load the most recent snippet from the cloud
chrome.storage.sync.get(['sharedSnippet'], (data) => {
  if (data.sharedSnippet) {
    noteArea.value = data.sharedSnippet;
  }
});

// 2. Listen for changes made on the OTHER laptop
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'sync' && changes.sharedSnippet) {
    noteArea.value = changes.sharedSnippet.newValue;
  }
});

// 3. Sync if the user types manually into the notepad
noteArea.addEventListener('input', () => {
  chrome.storage.sync.set({ sharedSnippet: noteArea.value });
});

// 4. "Copy Latest" functionality
copyBtn.addEventListener('click', () => {
  const text = noteArea.value;
  if (!text) return;

  navigator.clipboard.writeText(text).then(() => {
    const originalText = copyBtn.innerText;
    copyBtn.innerText = "COPIED!";
    copyBtn.style.background = "#28a745";
    
    setTimeout(() => {
      copyBtn.innerText = originalText;
      copyBtn.style.background = "#0e639c";
    }, 1500);
  });
});

// 5. Clear everything on both devices
wipeBtn.addEventListener('click', () => {
  if (confirm("Clear notepad on all devices?")) {
    noteArea.value = "";
    chrome.storage.sync.set({ sharedSnippet: "" });
  }
});
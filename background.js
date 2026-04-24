
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "pushToSync",
    title: "Push to Sync-Net",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "pushToSync") {
    chrome.storage.sync.set({ sharedSnippet: info.selectionText }, () => {
      console.log("Snippet synced successfully.");
    });
  }
});
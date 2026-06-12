chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action !== 'openLink') return;

  chrome.storage.sync.get('openInBackground', (data) => {
    const active = !data.openInBackground;
    chrome.tabs.create({ url: message.url, active });
  });
});

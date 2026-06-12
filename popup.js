const siteLabel = document.getElementById('site-label');
const siteToggle = document.getElementById('site-toggle');
const bgToggle = document.getElementById('bg-toggle');

let currentHost = '';

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const url = tabs[0]?.url;
  if (!url) return;

  try {
    currentHost = new URL(url).hostname;
  } catch {
    return;
  }

  siteLabel.textContent = currentHost;

  chrome.storage.sync.get('disabledSites', (data) => {
    const disabled = data.disabledSites || [];
    siteToggle.checked = !disabled.includes(currentHost);
  });
});

chrome.storage.sync.get('openInBackground', (data) => {
  bgToggle.checked = !!data.openInBackground;
});

siteToggle.addEventListener('change', () => {
  chrome.storage.sync.get('disabledSites', (data) => {
    let disabled = data.disabledSites || [];
    if (siteToggle.checked) {
      disabled = disabled.filter((s) => s !== currentHost);
    } else if (!disabled.includes(currentHost)) {
      disabled.push(currentHost);
    }
    chrome.storage.sync.set({ disabledSites: disabled });
  });
});

bgToggle.addEventListener('change', () => {
  chrome.storage.sync.set({ openInBackground: bgToggle.checked });
});

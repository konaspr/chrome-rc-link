let disabledSites = [];

chrome.storage.sync.get('disabledSites', (data) => {
  disabledSites = data.disabledSites || [];
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.disabledSites) {
    disabledSites = changes.disabledSites.newValue || [];
  }
});

document.addEventListener('contextmenu', (event) => {
  if (event.ctrlKey) return;
  if (disabledSites.includes(window.location.hostname)) return;

  let target = event.target;
  while (target && target.tagName !== 'A') {
    target = target.parentElement;
  }

  if (!target || !target.href) return;

  const href = target.href;
  if (href.startsWith('javascript:') || href === '#' || href === '') return;

  event.preventDefault();
  if (chrome.runtime?.sendMessage) {
    chrome.runtime.sendMessage({ action: 'openLink', url: href });
  } else {
    window.open(href, '_blank', 'noopener,noreferrer');
  }
}, true);

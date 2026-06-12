const toggle = document.getElementById('bg-toggle');

chrome.storage.sync.get('openInBackground', (data) => {
  toggle.checked = !!data.openInBackground;
});

toggle.addEventListener('change', () => {
  chrome.storage.sync.set({ openInBackground: toggle.checked });
});

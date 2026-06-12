document.addEventListener('contextmenu', (event) => {
  if (event.ctrlKey) return;

  let target = event.target;
  while (target && target.tagName !== 'A') {
    target = target.parentElement;
  }

  if (!target || !target.href) return;

  const href = target.href;
  if (href.startsWith('javascript:') || href === '#' || href === '') return;

  event.preventDefault();
  window.open(href, '_blank', 'noopener,noreferrer');
}, true);

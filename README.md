# Right-Click Open Link

A Chrome extension that opens links in a new tab on right-click, bypassing the context menu. Ctrl+right-click shows the regular menu.

## Features

- **Right-click any link** — opens it directly in a new tab
- **Ctrl+right-click** — shows the normal context menu
- **Per-site toggle** — disable the extension on specific sites via the popup
- **Background tabs** — optionally open links in background (inactive) tabs

## Installation

1. Go to `chrome://extensions`
2. Enable **Developer mode** (top-right)
3. Click **Load unpacked** and select this directory

## Usage

Click the extension icon in the toolbar to open the popup:

```
┌─────────────────────┐
│ example.com         │
│ [✓] Enabled on this │
│      site           │
│ ─────────────────── │
│ [✓] Open links in   │
│      background     │
└─────────────────────┘
```

- **Enabled on this site** — toggle the extension on/off for the current site
- **Open links in background** — when checked, new tabs open without stealing focus

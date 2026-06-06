// theme.js — BlockDegree · Inline-safe theme + sidebar helpers
// This file is kept for reference but all logic is also inlined in each HTML.
// The inline version in each HTML always wins.

(function () {
  // Apply saved theme to <html> element immediately (works before <body> exists)
  try {
    var saved = localStorage.getItem('bd-theme') || 'dark';
    if (saved === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  } catch(e) {}
})();
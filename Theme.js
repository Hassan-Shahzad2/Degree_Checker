// theme.js — BlockDegree shared theme + mobile nav helpers
(function () {
  // ── Apply saved theme immediately (no flash) ──
  const saved = localStorage.getItem('bd-theme') || 'dark';
  if (saved === 'light') document.body.classList.add('light');

  function updateToggleBtn() {
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      const isLight = document.body.classList.contains('light');
      btn.querySelector('.theme-icon').textContent = isLight ? '🌙' : '☀️';
      btn.querySelector('.theme-label').textContent = isLight ? 'Dark' : 'Light';
    });
  }

  window.toggleTheme = function () {
    document.body.classList.toggle('light');
    localStorage.setItem('bd-theme', document.body.classList.contains('light') ? 'light' : 'dark');
    updateToggleBtn();
  };

  // ── Sidebar toggle ──
  window.openSidebar = function () {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebarOverlay').classList.add('show');
    document.body.style.overflow = 'hidden';
  };
  window.closeSidebar = function () {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('show');
    document.body.style.overflow = '';
  };

  document.addEventListener('DOMContentLoaded', function () {
    updateToggleBtn();
    // Close sidebar when nav-item clicked on mobile
    document.querySelectorAll('.nav-item').forEach(function (el) {
      el.addEventListener('click', function () {
        if (window.innerWidth <= 768) closeSidebar();
      });
    });
  });
})();
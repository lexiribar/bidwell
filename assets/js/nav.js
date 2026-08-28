/* Mobile navigation toggle. Progressive enhancement: without JS the nav
   list still renders (it is only hidden at narrow widths once .site-nav
   exists), so keep the toggle's aria state in sync here. */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  toggle.addEventListener('click', function () {
    setOpen(!nav.classList.contains('is-open'));
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Reset state when returning to the desktop layout.
  var mq = window.matchMedia('(min-width: 60.0625rem)');
  mq.addEventListener('change', function (e) { if (e.matches) setOpen(false); });
})();

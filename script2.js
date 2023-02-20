// Hide the URL when the page loads
history.pushState({}, '', '');

// Restore the URL when the page is refreshed
window.addEventListener('beforeunload', function() {
  history.replaceState({}, '', location.href);
});

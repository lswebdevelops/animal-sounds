// Hide the URL when the page loads
history.pushState({}, '', '');

// Restore the URL when the page is refreshed
window.addEventListener('beforeunload', function() {
  history.replaceState({}, '', location.href);
});


const nextBtn = document.querySelector('#nextBtn');
nextBtn.addEventListener('click',()=>{
  window.location.href = "body.html";
});

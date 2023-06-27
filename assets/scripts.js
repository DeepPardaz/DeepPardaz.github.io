window.addEventListener('DOMContentLoaded', function() {
  var elements = document.getElementsByClassName('fade-in');
  
  Array.prototype.forEach.call(elements, function(element) {
    element.classList.add('show');
  });
});

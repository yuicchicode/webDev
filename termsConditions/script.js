const acceptCheckbox = document.getElementById('acceptCheckbox');
const submitButton = document.getElementById('submitButton');

acceptCheckbox.addEventListener('change', function() {
  if (acceptCheckbox.checked) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'true');
  }
});

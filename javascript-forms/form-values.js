var $form = document.querySelector('#contact-form');

$form.addEventListener('submit', handleForm);

function handleForm(event) {
  event.preventDefault();
  var formDetails = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value
  };
  console.log('formDetails', formDetails);
  $form.reset();
}

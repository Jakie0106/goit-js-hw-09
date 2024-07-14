const inputForm = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};

const input = inputForm.elements.email;
const textarea = inputForm.elements.message;

const savedForm = JSON.parse(localStorage.getItem(localStorageKey));

if (savedForm) {
  input.value = savedForm.email;
  textarea.value = savedForm.message;
  formData.email = savedForm.email;
  formData.message = savedForm.message;
} else {
  input.value = '';
  textarea.value = '';
}

inputForm.addEventListener('input', event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  } else if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

inputForm.addEventListener('submit', event => {
  event.preventDefault();
  if (input.value.trim() !== '' && textarea.value.trim() !== '') {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formData.email = '';
    formData.message = '';
    inputForm.reset();
  } else {
    alert('Fill please all fields');
  }
});

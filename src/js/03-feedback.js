import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[type="email"]');
const messageEl = document.querySelector('textarea[name="message"]');
const savedEls = 'feedback-form-state';

const updateData = () => {
  const data = {
    email: emailEl.value,
    message: messageEl.value,
  };
  localStorage.setItem(savedEls, JSON.stringify(data));
};

emailEl.addEventListener(`input`, throttle(updateData, 500));
messageEl.addEventListener(`input`, throttle(updateData, 500));

const saveData = () => {
  const data = JSON.parse(localStorage.getItem(savedEls));
  if (data) {
    emailEl.value = data.email;
    messageEl.value = data.message;
  }
};
saveData();

function submitData(event) {
  const data = JSON.parse(localStorage.getItem(savedEls));
  console.log(`email: ${data.email} message: ${data.message}`);
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(savedEls);
}

formEl.addEventListener(`submit`, submitData);

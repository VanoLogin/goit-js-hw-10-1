import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.getElementById('form'),
  btnSumbit: document.getElementById('submit'),
};
refs.form.addEventListener('submit', handleSumbit);

function handleSumbit(event) {
  event.preventDefault();
  const formData = new FormData(refs.form);
  const delay = formData.get('delay');
  const state = formData.get('state');
  refs.btnSumbit.disabled = true;
  createNewPromise({ delay, state })
    .then(delay => {
      iziToast.success({
        position: 'topCenter',
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
      refs.btnSumbit.disabled = false;
      refs.form.reset();
    })
    .catch(delay => {
      iziToast.error({
        position: 'topCenter',
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
      refs.btnSumbit.disabled = false;
      refs.form.reset();
    });
}

function createNewPromise({ delay, state }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

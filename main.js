// modal

document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.querySelector('.js-open-modal');
  const modal = document.querySelector(openButton.dataset.target);

  openButton.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  modal.querySelector('.modal-dialog').addEventListener('click', (event) => {
    event._withinModal = true;
  });

  modal.addEventListener('click', (event) => {
    if (event._withinModal) return;
    modal.style.display = 'none';
  });
});

// dropdown

document.addEventListener('DOMContentLoaded', () => {
  const openDropdown = document.querySelector('.js-open-drop');
  const dropdown = document.querySelector('#dropdown');

  openDropdown.addEventListener('click', function (event) {
    dropdown.style.display = 'block';
    event._Dropdown = true;
  });

  dropdown.addEventListener('click', function (event) {
    event._withinDropdown = true;
  });

  window.addEventListener('click', function (event) {
    if (event._withinDropdown || event._Dropdown) return;
    dropdown.style.display = 'none';
  });
});

// fio

(function () {
  document.addEventListener('DOMContentLoaded', (_) => {
    const form = document.querySelector('.form'),
      сontainer = document.querySelector('.container'),
      inputs = form.querySelectorAll('input');
    inputs.forEach((field) => {
      field.addEventListener('keypress', (event) => {
        let regExp = /[а-яА-Я\s-]/;
        event.key.match(regExp) ? null : event.preventDefault();
      });
      field.addEventListener('blur', (event) => {
        let correctedValue = field.value.trim();
        while (correctedValue.indexOf('-') === 0) {
          correctedValue = correctedValue.slice(1);
        }
        while (correctedValue.substring(correctedValue.length - 1) === '-') {
          correctedValue = correctedValue.slice(0, -1);
        }
        correctedValue = correctedValue.replace(/-+/g, '-');
        correctedValue = correctedValue.replace(/\s+/g, ' ');
        correctedValue =
          correctedValue.substring(0, 1).toUpperCase() +
          correctedValue.substring(1, correctedValue.length).toLowerCase();
        field.value = correctedValue;
      });
    });
    form.addEventListener('submit', (el) => {
      el.preventDefault();
      let surname = form.querySelector('input[name="surname"]').value,
        name = form.querySelector('input[name="name"]').value,
        patronymic = form.querySelector('input[name="patronymic"]').value,
        fio = document.createElement('p');
      fio.textContent = `${surname} ${name} ${patronymic}`;
      divId.append(fio);
      document.querySelectorAll('.form input').forEach((field) => {
        field.value = '';
      });
    });
  });
})();

// scroll

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.style.display = 'block';
  },
  hide() {
    this.el.style.display = 'none';
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 100 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener();

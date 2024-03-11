const dropdown = document.querySelectorAll('div.dropdown__value');
const dropdownItem = document.querySelectorAll('a.dropdown__link');

dropdown.forEach(el => el.addEventListener('click', event => {
    el.nextElementSibling.classList.toggle('dropdown__list_active');
  }));

dropdownItem.forEach(el => el.addEventListener('click', event => {
    event.preventDefault();
    el.closest("ul").classList.toggle('dropdown__list_active');
    el.closest(".dropdown__list").previousElementSibling.textContent = el.textContent;
  }));
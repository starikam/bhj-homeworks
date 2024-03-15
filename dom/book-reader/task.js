let controls = Array.from(document.querySelectorAll('.font-size'));
const book = document.getElementById('book');

controls.forEach(el => el.addEventListener('click', event => {
    event.preventDefault();
    let attr = el.getAttribute('data-size');

    [...controls].forEach(e => e.classList.remove('font-size_active'));

    el.classList.add('font-size_active');

    switch (attr) {
        case "big":
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
          break;
        case "small":
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
          break;
        default:
            book.classList.remove('book_fs-big');
            book.classList.remove('book_fs-small');
      }
  }));
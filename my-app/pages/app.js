// add //

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entrytarget.classList.add('show')
    }
  });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => { observer.observe(el));
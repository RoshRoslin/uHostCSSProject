var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative')
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');


for (let i = 0; i < selectPlanButton.length; i++){
  selectPlanButton[i].addEventListener('click', function(){
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
};

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}


backdrop.addEventListener('click', function(){
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal();
});

function closeModal(){
  // modal.style.display = 'none';
  // backdrop.style.display = 'none';
  if (modal) {
    modal.classList.remove('open');
  }

  backdrop.classList.remove('open');
};

toggleButton.addEventListener('click', function(){
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';

  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});


ctaButton.addEventListener('animationstart', function(event){
  console.log('animation started', event)
});

ctaButton.addEventListener('animationend', function(event){
  console.log('animation end', event)
});

ctaButton.addEventListener('animationiteration', function(event){
  console.log('animation iteration', event)
});

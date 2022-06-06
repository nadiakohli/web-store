window.onload = () => {
  // Get burger button from DOM
  const burgerButton = document.querySelector('.burger-btn');
  // Get menu from DOM
  const menu = document.querySelector('.wrap-burger-menu');
  // Get wrapper background color from DOM
  const wrapBgColor = document.querySelector('.wrap-bg-color');
  // Get all body element from DOM
  const bodyAllEl = document.querySelectorAll('div, h1, h2, p, input, button, ul, li, a, img, span, i, header');
  // Get only elements of the menu from DOM
  const contentMenu = document.querySelectorAll('.wrap-burger-menu, .wrap-burger-menu .menu-user, .user-name div, .wrap-burger-menu ul, .wrap-burger-menu li, .wrap-menu-btn, .sync-btn, .log-out-btn');
  // Get elements with appropriate attribute from DOM
  const arrWithTabindex = [...bodyAllEl].filter((el) => el.hasAttribute('tabindex'));
  
  // Function which toogle state of menu
  const toggleMenu = (el) => {
    // Toogle 'active' class by each click on the burger button
    el.currentTarget.classList.toggle('active');
    // Set display style for menu. Check if burger button element have 'active' class
    menu.style.display = el.currentTarget.classList.contains('active') ? 'flex' : 'none';
    //This condition checks whether the menu is active and then changes icon, background-color and attribute to the appropriate one
    if (el.currentTarget.classList.contains('active')) {
      document.querySelector('.burger-btn i').className = 'fas fa-times';
      wrapBgColor.style.display = 'block';
      [...bodyAllEl].filter((el) => {
          if ([...contentMenu].includes(el)) {
            el.setAttribute('tabindex', '0');
          } else {
            el.setAttribute('tabindex', '-1');
          };
        });
    } else {
      document.querySelector('.burger-btn i').className = 'fas fa-solid fa-bars';
      wrapBgColor.style.display = 'none';
      [...arrWithTabindex].forEach((el) => {
          el.setAttribute('tabindex', '0');
      });
    };
  };
  // Add click event on burger button
  burgerButton.addEventListener('click', toggleMenu);
  
  // Get add user button from DOM
  const addUserBtn = document.querySelector('.wrap-add-user-btn');
  // Get modal container from DOM
  const modal = document.querySelector('.modal-container');
   // Get modal content from DOM
  const modalContent = document.querySelectorAll('.modal, .modal-header, .modal-header h1, .modal-body button, .modal-body input');

  // Function which add state of modal
  const handleOpenModel = (el) => {
    // Add 'active' class by click on the add user button
    el.currentTarget.classList.add('active');
    // Set display style for modal. Check if modal element have 'active' class
    modal.style.display = el.currentTarget.classList.contains('active') ? 'flex' : 'none';

    //This condition checks whether the modal is active and then changes attribute to the appropriate one
    if (el.currentTarget.classList.contains('active')) {
      [...bodyAllEl].filter((el) => {
        if ([...modalContent].includes(el)) {
          el.setAttribute('tabindex', '0');
        } else {
          el.setAttribute('tabindex', '-1');
        };
      });
    } else {
      [...arrWithTabindex].forEach((el) => {
        el.setAttribute('tabindex', '0');
      });
    };
  };
  // Add click event on add user button
  addUserBtn.addEventListener('click', handleOpenModel);


  // Get close user button from DOM
  const closeUserBtn = document.querySelector('.close-modal');
  
  // Function which add state of modal
  const handleCloseModel = (el) => {
    // Add 'active' class by click on the close user button
    el.currentTarget.classList.add('active');
    // Set display style for modal. Check if modal element have 'active' class
    modal.style.display = el.currentTarget.classList.contains('active') ? 'none' : 'flex';

    //This condition checks whether the modal is active and then changes attribute to the appropriate one
    if (el.currentTarget.classList.contains('active')) {
      [...bodyAllEl].filter((el) => {
        if ([...modalContent].includes(el)) {
          el.setAttribute('tabindex', '0');
        } else {
          [...arrWithTabindex].forEach((el) => {
            el.setAttribute('tabindex', '0');
          });
        };
      });
    };
  };
  // Add click event on close user button
  closeUserBtn.addEventListener('click', handleCloseModel);
};
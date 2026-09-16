"use strict";
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('#mobile-menu');
function closeMenu(returnFocus = false) {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = 'Menu';
  mobileMenu.hidden = true;
  if (returnFocus) menuButton.focus();
}
if (menuButton && mobileMenu) {
  menuButton.hidden = false;
  document.body.classList.add('js-ready');
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'Close' : 'Menu';
    mobileMenu.hidden = !open;
  });
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileMenu.hidden) closeMenu(true);
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });
}
const form = document.querySelector('#quote-form');
const success = document.querySelector('#form-success');
const fields = document.querySelector('#quote-fields');
const reset = document.querySelector('#reset-form');
const prototype = document.body.dataset.prototype === 'true';
function restoreForm() {
  if (!form || !success) return;
  success.hidden = true;
  form.hidden = false;
}
if (form && success && fields) {
  // Disabled without JavaScript so review data cannot be posted by accident.
  fields.disabled = false;
  if (prototype) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      form.reset();
      form.hidden = true;
      success.hidden = false;
      success.focus();
    });
  } else {
    // Enable only after Netlify Forms detection and email routing are tested.
    const note = document.querySelector('#preview-note');
    note.textContent = 'Share a few details and we’ll follow up about your request.';
    fields.querySelector('[type="submit"]').textContent = 'Send quote request';
  }
  reset?.addEventListener('click', () => {
    form.reset();
    restoreForm();
    document.querySelector('#name')?.focus();
  });
}
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    restoreForm();
    const select = document.querySelector('#service');
    if (select) select.value = link.dataset.service;
  });
});
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

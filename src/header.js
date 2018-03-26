import logo from './static/Logo.png';
import Close from './static/Close.svg';
import Hamburguer from './static/Hamburguer.svg';

export const header = isOpen => `
  <header class='header'>
    <div class="header__nav">
      <img class='header__logo' src='${logo}' alt='store logo' />
      <img class='header__icon' onclick="handleClick(${isOpen})" src='${
  isOpen ? Close : Hamburguer
}' alt='hamburguer menu' />
    </div>
    <div class='header__hero'><div>
  </header>
`;

export const modal = isOpen => `
  <div class='modal ${isOpen ? 'modal--open' : 'modal--close'}'>
    <ul class='modal__content'>
      <li class='modal__item'>Item Menu</li>
      <li class='modal__item'>Another Item Menu</li>
      <li class='modal__item'>Item Menu Here</li>
      <li class='modal__item'>Item Menu</li>
      <li class='modal__item'>Another Item</li>
    </ul>
  </div>
`;

import { footer } from './footer';
import { header, modal } from './header';
import { renderProducts } from './product';

export const App = (function App() {
  const root = document.querySelector('.root');

  window.handleClick = isOpen => {
    isOpen = !isOpen;
    render(isOpen);
  };

  function render(isOpen) {
    return (root.innerHTML =
      header(isOpen) + modal(isOpen) + renderProducts + footer);
  }

  render(false);

  return {
    render,
  };
})();

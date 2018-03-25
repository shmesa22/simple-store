import { footer } from './footer';
import { header } from './header';
import { renderProducts } from './product';

const root = document.querySelector('.root');

root.innerHTML = header + renderProducts + footer;

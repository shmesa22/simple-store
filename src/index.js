import { header } from './header';
import { renderProduct } from './product';

const root = document.querySelector('.root');

root.innerHTML = header + renderProduct;

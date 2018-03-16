import products from './productsList.js';

const { shoes } = products;

function renderProduct(product) {
  const { colour, img, name, price } = product;

  return `
    <div class="card">
      <img class="card__image" src='${img}' alt='${name} ${colour}' />
      <h3 class="card__title">${name}</h3>
      <p class="card__price">$${price}</p>
    </div>
  `;
}

export const renderProducts = `
  <section class="store">
    <div class="store__header">
      <h2 class="store__title">A super title or something else here</h2>
      <p class="store__counter">${shoes.length} productos</p>
    </div>
    ${shoes.map(renderProduct).join('')}
  </section>
`;

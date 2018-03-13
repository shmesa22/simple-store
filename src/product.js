import products from './productsList.js';

const { shoes } = products;

function renderProduct(product) {
  const { colour, img, name, price } = product;

  return `
    <div class="card">
      <img class="card__image" src='${img}' alt='${name} ${colour}' />
      <h3 class="card__title">${name}</h3>
      <p class="card__price>$${price}</p>
    </div>
  `;
}

export const renderProducts = `
  ${shoes.map(renderProduct).join('')}
`;

import products from './productsList.js';

const { shoes } = products;

function renderProduct(product) {
  const { availability, colour, img, name, price, url } = product;

  return `
    <div class="card">
      <div class="card__image--container">
        <img class="card__image--product" src="${img}" alt="${name} ${colour}" />
        <span class="card__count">${availability}/50</span>
      </div>
      <div class="card__description--container">
        <div class="card__description">
          <h3 class="card__title">${name}</h3>
          <p class="card__price">$${price}</p>
        </div>
        <a href="${url}" target="_blank">+ More</a>
      </div>
    </div>
  `;
}

export const renderProducts = `
  <section class="store">
    <div class="store__header">
      <h2 class="store__title">A super title or something else here</h2>
      <span class="store__counter">${shoes.length} productos</span>
    </div>
    ${shoes.map(renderProduct).join('')}
    <p class="store__more">load more products</p>
  </section>
`;

let products;

fetch('index.json').then(handleJson);

function handleJson(res) {
  products = res.shoes;
}

export const renderProduct = `
  ${products}
`;

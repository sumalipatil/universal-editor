export default function decorate(block) {

  block.innerHTML = `
    <button class="load-product">Load Product Info</button>
    <div class="product-result"></div>
  `;

  const button = block.querySelector('.load-product');
  const resultDiv = block.querySelector('.product-result');

  button.addEventListener('click', async () => {
    resultDiv.innerHTML = '<p>Loading product details...</p>';

    try {
        const res = await fetch('https://27420-auspost-integratiton.adobeioruntime.net/api/v1/web/shipping/fetch-shipping-prices', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 22FADE005721F8257F000101'
          },
          body: JSON.stringify({
                "title": "I am Hero",
                "userId": 5
          })
        });
      } catch (error) {
        console.error('Error:', error);
        resultDiv.innerHTML = `<p>Failed to load product information.</p>`;
      }

        if (!res.ok) throw new Error('API call failed');

          const result = await res.json();

            return {
              statusCode: 200,
              body: result
            };

  });
}
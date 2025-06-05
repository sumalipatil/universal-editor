xport default function decorate(block) {
  // Create Button
  const button = document.createElement('button');
  button.textContent = 'Create Customer via API Mesh';
  button.style.padding = '1em';
  button.style.marginBottom = '1em';
  block.appendChild(button);

  // Create Output Display
  const resultDisplay = document.createElement('pre');
  resultDisplay.style.backgroundColor = '#f5f5f5';
  resultDisplay.style.padding = '1em';
  resultDisplay.style.whiteSpace = 'pre-wrap';
  block.appendChild(resultDisplay);

  // Button click handler
  button.addEventListener('click', async () => {
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

          if (!res.ok) throw new Error('API call failed');

          const result = await res.json();

            return {
              statusCode: 200,
              body: result
            };

        } catch (error) {
          console.error('Error:', error);
          resultDiv.innerHTML = `<p>Failed to load product information.</p>`;
        }

  });
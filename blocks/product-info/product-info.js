document.addEventListener('DOMContentLoaded', async () => {

  try {
    const res = await fetch(`https://27420-auspost-integratiton.adobeioruntime.net/api/v1/web/shipping/fetch-shipping-prices`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        'Authorization': `Bearer 22FADE005721F8257F000101`
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
  } catch (err) {
    console.error(err);
    block.innerHTML = `<p>Failed to load product info.</p>`;
  }
});

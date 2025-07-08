export default function decorate(block) {
  // Create Button
  const button = document.createElement('button');
  button.textContent = 'AEM to App Builder';
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
         const cfResponse = await fetch('/content/dam/content-fragments/hero-banner.json');
         const cfData = await cfResponse.json();
         const token = 'eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsI'
         + 'ml0dCI6ImF0In0.eyJpZCI6IjE3NTE5NzA5MDkxMzRfMDIwYTlmY2YtOWZiNC00NmI3LTg4YWYtYTVjYmJiY2JiYjAxX3V3MiIsIm9yZyI'
         + '6IjIyRkFERTAwNTcyMUY4MjU3RjAwMDEwMUBBZG9iZU9yZyIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiI3NzE4NWEx'
         + 'ZTdkZDE0M2NiYWE0Mzc2ODM3MTc4MGM4MiIsInVzZXJfaWQiOiI5OTNCMjI3RTY4MkIyQkVDMEE0OTVDMjdAdGVjaGFjY3QuYWRvYmUuY'
         + '29tIiwiYXMiOiJpbXMtbmExIiwiYWFfaWQiOiI5OTNCMjI3RTY4MkIyQkVDMEE0OTVDMjdAdGVjaGFjY3QuYWRvYmUuY29tIiwiY3RwIjo'
         + 'zLCJtb2kiOiI0MGY1NmZhNSIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsInNjb3BlIjoiYWRvYmVpb19hcGksb3BlbmlkLHJlYWRfY2xp'
         + 'ZW50X3NlY3JldCxBZG9iZUlELGFkZGl0aW9uYWxfaW5mby5yb2xlcyxtYW5hZ2VfY2xpZW50X3NlY3JldHMscmVhZF9vcmdhbml6YXRpb'
         + '25zLGFkZGl0aW9uYWxfaW5mby5wcm9qZWN0ZWRQcm9kdWN0Q29udGV4dCxldmVudF9yZWNlaXZlcl9hcGkiLCJjcmVhdGVkX2F0IjoiMTc'
         + '1MTk3MDkwOTEzNCJ9.WVAXX3ymTV_5DVxS4vah9rSVhvIA1T5grYIjnA-g2865sVTGm2jwvcJS5MRE246hU7uFd3FYmRbSximDbYk-TeI9'
         + '0SLJwgFQLBBTzKEUt5VDxye5Z-p701zzggolKSeWDVVWPe5zeHs1T3KCi5hsWKWiJHFRix_hRJ0E_jzbwTtmEgC_N3tUBQkS80DYI51A-S'
         + 'NLodPuzbLld8UVerZJf06iJne0gNtod5Wt2LA5DL2I32JdGSQdETZjcnWKmySnd6b_3o0IsUfd5olgv8hcn9_I4o57F4HXSU3zL55bmcgq'
         + 'CclMzldUj5o976483pA1aKFWBkDopo_7-XJpUlE7lQ';

         const appBuilderResponse = await fetch('https://27420-auspost-integratiton.adobeioruntime.net/api/v1/web/shipping/fetch-shipping-prices', {
          method: 'POST',
          headers: {
           'Content-Type': 'application/json',
           Authorization: `Bearer ${token}`,
           'x-gw-ims-org-id': '22FADE005721F8257F000101@AdobeOrg',
        },
          body: JSON.stringify({ cfData }),
        });

        const result = await appBuilderResponse.json();
        console.log('App Builder Response:', result);
        alert('T & C sent successfully!');

        } catch (error) {
          console.error('Error sending data:', error);
          alert('Failed to T & C data.');
     }
  });
}

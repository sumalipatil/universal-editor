export default function decorate(block) {
  // Create Button
  const button = document.createElement('button');
  button.textContent = 'AEM to App builder';
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
    const endpoint = 'https://27420-auspost-integratiton.adobeioruntime.net/api/v1/web/shipping/fetch-shipping-prices';
    const token = 'eyJhbGciOiJSUzI1NiIsIng1dSI6Imltc19uYTEta2V5LWF0LTEuY2VyIiwia2lkIjoiaW1zX25hMS1rZXktYXQtMSIsIml0dCI6ImF0In0.eyJpZCI6IjE3NDkxMjU2NzE4ODBfMGIwOTM5MGMtZDlmYy00YjZiLWIxOGItZmQwNDg3YTBhYTlkX3V3MiIsIm9yZyI6IjIyRkFERTAwNTcyMUY4MjU3RjAwMDEwMUBBZG9iZU9yZyIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJjbGllbnRfaWQiOiI3NzE4NWExZTdkZDE0M2NiYWE0Mzc2ODM3MTc4MGM4MiIsInVzZXJfaWQiOiI5OTNCMjI3RTY4MkIyQkVDMEE0OTVDMjdAdGVjaGFjY3QuYWRvYmUuY29tIiwiYXMiOiJpbXMtbmExIiwiYWFfaWQiOiI5OTNCMjI3RTY4MkIyQkVDMEE0OTVDMjdAdGVjaGFjY3QuYWRvYmUuY29tIiwiY3RwIjozLCJtb2kiOiJhMjllNjI0OSIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsInNjb3BlIjoiYWRvYmVpb19hcGksb3BlbmlkLHJlYWRfY2xpZW50X3NlY3JldCxBZG9iZUlELGFkZGl0aW9uYWxfaW5mby5yb2xlcyxtYW5hZ2VfY2xpZW50X3NlY3JldHMscmVhZF9vcmdhbml6YXRpb25zLGFkZGl0aW9uYWxfaW5mby5wcm9qZWN0ZWRQcm9kdWN0Q29udGV4dCxldmVudF9yZWNlaXZlcl9hcGkiLCJjcmVhdGVkX2F0IjoiMTc0OTEyNTY3MTg4MCJ9.RohKldn61dsPz3_6kBKHA0Fz-03y3-R6QBxPAYIUka_K0d_Y6raODrZ4_0iDxJsZTS0NTETIRzgjWTDBIBTtPd_yg_8YO6aWtC37yu56mzY-1sksJcAen9pf3Y31EBOFduDAVOKiExG8h5bi2ryB388sPPb9c1kGlWMQUtl42RAInlNmOVD-V0xCB6q28fAWQFGdfwp-dVgcebZ38zrBG6RFTEyrxWhKTzVFeLlssRrU_OqCRdiWQsbppTLsn8CLLxM007YakK9aPH2S1KL90tvRpE2amvouUcXfrrdOosm-3tg_qEtMBNYRPUvaCKSre38wSdi5OdBUSqk4shlPpw';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
              "title": "I am Hero",
              "userId": 5 }),
      });

      const data = await response.json();

      if (data.errors) {
        resultDisplay.textContent = `❌ Error:\n${JSON.stringify(data.errors, null, 2)}`;
      } else {
        resultDisplay.textContent = `✅ Customer Created:\n${JSON.stringify(data.data, null, 2)}`;
      }
    } catch (error) {
      resultDisplay.textContent = `⚠️ Network Error: ${error.message}`;
    }
  });
}

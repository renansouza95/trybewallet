const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

// async function getCurrencies() {
//   try {
//     const fetchAPI = await fetch(ENDPOINT);
//     const response = await fetchAPI.json();
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// }

async function getCurrencyAPI() {
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
}

export default getCurrencyAPI;

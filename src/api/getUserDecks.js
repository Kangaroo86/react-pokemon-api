//an API fetch call
//get data from airtable, data is under tab deck -- containing all of user deck information
export default function getUserDecks({ databaseId, token }) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/decks`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      //console.log('getUserDecks response: ', response);
      return response['records']; //'records' is an object from List records in Airtable
    });
}

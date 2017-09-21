export default function createUserDeck(id, { databaseId, token }) {
  return fetch(`https://api.airtable.com/v0/${databaseId}/decks/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      return response['records'];
    });
}

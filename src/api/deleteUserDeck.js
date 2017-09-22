export default function deleteUserDeck(id, { databaseId, token }) {
  console.log('deleteUserDeck id', id);
  return fetch(`https://api.airtable.com/v0/${databaseId}/decks/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(result => {
      console.log('deleteUserDeck result', result);
      return result.deleted;
    });
}

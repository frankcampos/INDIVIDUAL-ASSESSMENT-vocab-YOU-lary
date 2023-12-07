import client from '../utils/client';

const endpoint = client.databaseURL;

const createVocabularyCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabularyentry.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateVocabularyCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabularyentry/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export { updateVocabularyCard, createVocabularyCard };
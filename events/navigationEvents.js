import { signOut } from '../utils/auth';
import addVocabularyForm from '../components/forms/addVocabularyEntry';
import clearDom from '../utils/clearDom';
import { getvocabularyCards } from '../api/createVocabularyCard';
import showvocabularyEntry from '../pages/vocabulary';

const navigationEvents = (user) => {
  document.querySelector('#google-auth').addEventListener('click', signOut);

  document.querySelector('#create-entry').addEventListener('click', () => {
    console.warn('CLICKED CREATE ENTRY');
    clearDom();
    addVocabularyForm();
  });
  document.querySelector('#my-vocabulary').addEventListener('click', () => {
    console.warn('clicked my vocabulary button');
    clearDom();
    getvocabularyCards(user.uid).then(showvocabularyEntry);
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchVocabTitle = (searchValue) => getvocabularyCards(user.uid).then((vocabularyArray) => vocabularyArray.filter((vocabulary) => vocabulary.title.toLowerCase().includes(searchValue.toLowerCase())));

    if (e.keyCode === 13) {
      e.preventDefault();
      const searchValue = document.querySelector('#search').value;
      searchVocabTitle(searchValue)
        .then((data) => {
          console.warn(data);
          console.warn(typeof data);
          showvocabularyEntry(data);
        })
        .then(() => {
          // Clear the input field after displaying the search results
          document.querySelector('#search').value = '';
        })
        .catch((error) => {
          console.error('Error:', error); // Added error handling
        });
    }
  });
};

export default navigationEvents;
